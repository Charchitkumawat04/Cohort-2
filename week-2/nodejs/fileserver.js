const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// GET /files - Returns a list of files present in `./files/` directory
app.get('/files', (req, res) => {
  const filesDirectory = './files';
  fs.readdir(filesDirectory, (err, files) => {
    if (err) {
      console.error('Error reading files:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    res.status(200).json(files);
  });
});

// GET /file/:filename - Returns content of given file by name
app.get('/file/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'files', filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      res.status(404).send('File not found');
      return;
    }
    res.status(200).send(data);
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
