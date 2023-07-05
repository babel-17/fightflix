const uploadFile = require('../../config/upload-file');
const Video = require('../../models/video');

module.exports = {
  index,
  upload
};

async function index(req, res) {
  const videos = await Video.find({}).sort('-createdAt').exec();
  res.json(videos);
}

async function upload(req, res) {
  console.log(req.file);
  try {
    if (req.file) {
      // TODO: Remove the console.log after you've verified the output
      console.log(req.file);
      // The uploadFile function will return the uploaded file's S3 endpoint
      const videoURL = await uploadFile(req.file);
      const videoDoc = await Video.create({
        url: videoURL,
        // As usual, other inputs sent with the file are available on req.body
        title: req.body.title
      });
      res.json(videoDoc);
    } else {
      throw new Error('Must select a file');
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}