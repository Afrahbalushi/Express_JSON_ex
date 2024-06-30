const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.get('/api/data', (req, res) => {

    const filePath = path.join(__dirname, 'data.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
       
            const jsonData = JSON.parse(data);
            const response = {
                title: jsonData.title,
                publishDate: jsonData.publishDate,
                author: jsonData.author
            }
            res.json(response);
            
    });
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
