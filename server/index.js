// 기본 설정
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let downloadCount = 0;

app.post('/api/download', (req, res) => {
    res.json({
        title: "게임 제목",
        description: "게임 설명",
        downloadCount,
    });
});

// 다운로드 api
app.get('/api/download', (req, res) => {
    downloadCount++;
    res.redirect('/download/game.zip');
});

// 다운로드 횟수 카운터 api
app.get('/api/downloadCount', (req, res) => {
    res.json({
        downloadCount,
    });
});

// 정적 파일 서빙
app.use('/download', express.static(path.join(__dirname,'public/download')));

// 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});