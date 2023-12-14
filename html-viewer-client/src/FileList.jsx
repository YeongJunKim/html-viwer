// FileList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FileList.css';

const FileList = () => {
    const defaultServerUrl = 'http://localhost:3001';
    const [serverAddressText, setServerAddressText] = useState(defaultServerUrl);
    const [fileList, setFileList] = useState([]);
    const [renderedHtmlUrl, setRenderedHtmlUrl] = useState('');
    const [tableHeight, setTableHeight] = useState('300px'); // 초기 높이 설정


    useEffect(() => {
        // 화면 크기가 변경될 때마다 뷰포트 높이를 계산하여 높이를 업데이트
        const updateTableHeight = () => {
            const windowHeight = window.innerHeight;
            setTableHeight(`${windowHeight - 50}px`); // 50은 여분의 여백
        };

        // 페이지 로딩 시 한 번 실행
        updateTableHeight();

        // 리사이즈 이벤트에 대한 리스너 등록
        window.addEventListener('resize', updateTableHeight);

        // 컴포넌트 언마운트 시 리스너 해제
        return () => {
            window.removeEventListener('resize', updateTableHeight);
        };
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

    const requestFileList = async () => {
        try {
            console.log(serverAddressText)
            // Flask 서버의 파일 목록 엔드포인트에 GET 요청 보내기
            const response = await axios.get(`${serverAddressText}/file_list`);

            // 서버에서 받은 파일 목록을 상태에 설정
            const sortedFiles = response.data.files.sort((a, b) => a.localeCompare(b));
            setFileList(sortedFiles);
            // setFileList(response.data.files);
        } catch (error) {
            console.error('Error fetching file list:', error.message);
        }

    }

    // 파일에 대한 작업 수행 함수
    const handleFileAction = async (fileName) => {
        // 원하는 작업을 수행 (예: 파일 다운로드, 수정, 삭제 등)
        console.log(`Performing action on file: ${fileName}`);
        try {
            // Flask 서버의 파일 읽기 엔드포인트에 GET 요청 보내기
            const response = await axios.get(`http://localhost:3001/read_file/${fileName}`, { responseType: 'blob' });

            // 파일 내용을 다운로드
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            // document.body.removeChild(link);
        } catch (error) {
            console.error('Error reading file:', error.message);
        }
    };

    const handleReadFile = async (fileName) => {
        console.log(`Performing action on file: ${fileName}`);
        try {
            // Flask 서버의 파일 읽기 엔드포인트에 GET 요청 보내기
            const response = await axios.get(`http://localhost:3001/read_file/${fileName}`);

            const blob = new Blob([response.data], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            setRenderedHtmlUrl(url);
        } catch (error) {
            console.error('Error reading file:', error.message);
        }
    };


    const handleTextChange = (e) => {
        setServerAddressText(e.target.value);
    };


    return (
        <div className="container">
            <div style={{ height: tableHeight, width: '300px', overflowY: 'scroll' }}>
                <h2>Server Address</h2>
                <div
                    contentEditable
                    style={{ border: '1px solid #ccc', minHeight: '10px', padding: '8px' }}
                    onInput={handleTextChange}
                >
                    {serverAddressText}
                </div>
                <h2>File List</h2>
                <button onClick={() => requestFileList()}>Read File</button>
                <table>
                    <thead>
                        <tr>
                            <th>File Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fileList.map((fileName, index) => (
                            <tr key={index}>
                                <td>{fileName}</td>
                                <td>
                                    {/* 각 행의 버튼에 이벤트 핸들러를 전달 */}
                                    <button onClick={() => handleFileAction(fileName)}>Download</button>
                                    <button onClick={() => handleReadFile(fileName)}>Show</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {renderedHtmlUrl && (
                <div style={{ width: '100%', height: '100%' }}>
                    <iframe title="Rendered HTML" src={renderedHtmlUrl} width="100%" className="iframe100" />
                </div>
            )}
        </div>
    );
};

export default FileList;