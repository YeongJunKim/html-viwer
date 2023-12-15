const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(cors());
// app.use(cors({ origin: 'http://localhost:3000' }));

// 파일 저장 경로 및 파일명 설정
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${Date.now()}${ext}`);
    },
});

// 파일 업로드 설정
const upload = multer({ storage: storage });

// HTML 파일 리스트 엔드포인트
app.get('/files', (req, res) => {
    const htmlFiles = getHtmlFilesList('uploads/');
    res.json({ htmlFiles });
  });

// 파일 업로드 엔드포인트
app.post('/upload', upload.single('file'), (req, res) => {
    // 파일 업로드 완료 후 수행할 작업 추가
    res.json({ message: 'File uploaded successfully' });
});

app.post('/html', upload.single('htmlFile'), (req, res) => {
    const htmlFilePath = req.file.path;
    
    fs.readFile(htmlFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading html file');
        }
        res.send(data);
    });
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


function getHtmlFilesList(directory) {
    const htmlFiles = [];
    const files = fs.readdirSync(directory);
  
    files.forEach((file) => {
      const filePath = path.join(directory, file);
      if (fs.statSync(filePath).isFile() && path.extname(filePath) === '.html') {
        htmlFiles.push(file);
      }
    });
  
    return htmlFiles;
  }

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});