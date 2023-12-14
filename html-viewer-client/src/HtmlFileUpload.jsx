import React, { useState, useEffect } from 'react';
import axios from 'axios';



const HtmlFileUpload = () => {
    const [htmlFile, setHtmlFile] = useState(null);
    const [renderedHtmlUrl, setRenderedHtmlUrl] = useState('');
    const [setHtmlFiles] =useState([]);

    useEffect(() => {
        // 컴포넌트가 마운트되면 서버에서 HTML 파일 리스트를 가져옴
        // fetchHtmlFilesList();
    }, []);

    const fetchHtmlFilesList = async () => {
        try {
            const response = await axios.get('http://localhost:3001/files');
            setHtmlFiles(response.data.htmlFiles);
        } catch (error) {
            console.error('Error fetching HTML files list', error);
        }
    };


    const handleFileChange = (e) => {
        setHtmlFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('htmlFile', htmlFile);

        try {
            const response = await axios.post('http://localhost:3001/html', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });


            const blob = new Blob([response.data], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            setRenderedHtmlUrl(url);

            // fetchHtmlFilesList();
        } catch (error) {
            console.error('Error uploading and rendering HTML file', error);
        }
    };

    return (
        <div>
            <input type="file" accept=".html" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload and Render</button>

            {renderedHtmlUrl && (
                <div>
                    <h2>Rendered HTML:</h2>
                    <iframe title="Rendered HTML" src={renderedHtmlUrl} width="100%" height="500px" />
                </div>
            )}
        </div>
    );
};

export default HtmlFileUpload;
