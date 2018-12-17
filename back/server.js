const express = require('express');
const uploadRouter = require('./routes/index.js')
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'tmp/', fieldSize: 3, mimetype: 'image/png' });
const fs = require('fs');


app.use('/uploads', uploadRouter)

// Code qui déplace l'image dans un dossier choisi à la reception du fichier
// app.post('/', upload.single('myfile'), function (req, res, next) {
//   console.log(req.file);
//   fs.rename(req.file.path, '/home/wilder/Pictures/quete-upload-file/' + req.file.originalname, function(err){
//     if (err) {
//         res.send(err.message);
//     } else {
//         res.send('Fichier uploadé avec succès');
//     }
//   });
// })


app.listen(8000);