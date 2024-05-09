const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const multer = require('multer');
const SharedControl = require('../../../controllers/api/v1/Shared');

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.post('/upload', upload.single('file'), SharedControl.upload);
module.exports = router;
