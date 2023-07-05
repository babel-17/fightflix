const express = require('express');
const router = express.Router();
const upload = require("multer")();
const videosCtrl = require('../../controllers/api/videos');

router.get('/', videosCtrl.index);
router.post('/upload', upload.single('video'), videosCtrl.upload);

module.exports = router;