import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FolderUploader = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    // 파일이 선택되었을 때 실행되는 콜백 함수
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <FileTable files={files} />
    </div>
  );
};

const FileTable = ({ files }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>File Name</th>
          <th>File Size</th>
        </tr>
      </thead>
      <tbody>
        {files.map(file => (
          <tr key={file.name}>
            <td>{file.name}</td>
            <td>{file.size} bytes</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default FolderUploader;
