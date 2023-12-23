// FileList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FileList.css';

const FileList = () => {
    const defaultServerUrl = 'http://localhost:3001';
    const [serverAddressText, setServerAddressText] = useState(defaultServerUrl);
    const [fileList, setFileList] = useState([]);
    const [renderedHtmlUrl, setRenderedHtmlUrl] = useState('');
    const [tableHeight, setTableHeight] = useState('');
    const [inputValue, setInputValue] = useState(defaultServerUrl);
    const [tableVisibility, setTableVisibility] = useState(false);

    useEffect(() => {
        const updateTableHeight = () => {
            const windowHeight = window.innerHeight;
            setTableHeight(`${windowHeight - 50}px`);
        };

        updateTableHeight();
        window.addEventListener('resize', updateTableHeight);
        return () => {
            window.removeEventListener('resize', updateTableHeight);
        };
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

    const requestFileList = async () => {
        try {
            console.log(inputValue)
            // Flask 서버의 파일 목록 엔드포인트에 GET 요청 보내기
            const response = await axios.get(`${inputValue}/file_list`);

            // 서버에서 받은 파일 목록을 상태에 설정
            const sortedFiles = response.data.files.sort((a, b) => a.localeCompare(b));
            // const files = response.data.files
            // setFileList(files);
            setFileList(response.data.files);
            setTableVisibility(true);
        } catch (error) {
            alert("Check server state and port");
            console.error('Error fetching file list:', error.message);
        }
        
    }


    const fileListClear = () => {
        setFileList([])
        setTableVisibility(false);
    }

    // 파일에 대한 작업 수행 함수
    const handleFileAction = async (fileName) => {
        // 원하는 작업을 수행 (예: 파일 다운로드, 수정, 삭제 등)
        console.log(`Performing action on file: ${fileName}`);
        try {
            // Flask 서버의 파일 읽기 엔드포인트에 GET 요청 보내기
            const response = await axios.get(`${inputValue}/read_file/${fileName}`, { responseType: 'blob' });

            // 파일 내용을 다운로드
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName);
            document.body.appendChild(link);
            link.click();
            // document.body.removeChild(link);
        } catch (error) {
            alert("Check server state and port");
            console.error('Error reading file:', error.message);
        }
    };

    const handleReadFile = async (fileName) => {
        console.log(`Performing action on file: ${fileName}`);
        try {
            // Flask 서버의 파일 읽기 엔드포인트에 GET 요청 보내기
            const response = await axios.get(`${inputValue}/read_file/${fileName}`);

            const blob = new Blob([response.data], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            setRenderedHtmlUrl(url);
        } catch (error) {
            alert("Check server state and port");
            console.error('Error reading file:', error.message);
        }
    };


    const handleTextChange = (e) => {
        setServerAddressText(e.target.value);
    };

    // 입력 변경 핸들러
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="main_container">
            <div className='setting_container'>
                
                <label className='server_input'>
                    server Address:
                    <div style={{flex: '1'}}></div>
                    <input type="text" value={inputValue} onChange={handleInputChange}/>
                </label>

                <div className='table_container'>
                    <table style={{ visibility: tableVisibility ? 'visible' : 'hidden' }}>
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th style={{ width: '200px' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {fileList.map((fileName, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className='file_name_container'>
                                            <div className='file_name_container_index'>
                                                {index}
                                            </div>
                                            <div className='file_name_container_file_name'>
                                                {fileName}
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{width: '100px'}}>
                                        <div className="table_action_button_container">
                                            <button onClick={() => handleFileAction(fileName)}>Download</button>
                                            <button onClick={() => handleReadFile(fileName)}>Display</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <div style={{flex: '1'}}  />

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button className='fetch_file' onClick={() => requestFileList()}>Fetch File List</button>
                    <div style = {{width: '16px'}}></div>
                    <button className='clear' onClick={() => fileListClear()}>Clear</button>
                </div>
            </div>
            
        
            <div className="vertical-line"></div>

            <iframe title="Rendered HTML" src={renderedHtmlUrl} className="iframe100" />
        </div>
    );
};

export default FileList;