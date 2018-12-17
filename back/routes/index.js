const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'tmp/', fieldSize: 3, mimetype: 'image/png' });
const fs = require('fs');

router.post('/', upload.array('myfile', 3), function (req, res, next) {
  console.log(req.files);
})

module.exports = router;