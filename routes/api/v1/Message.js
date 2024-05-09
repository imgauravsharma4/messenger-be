const express = require('express');
const { checkSchema } = require('express-validator');

const router = express.Router();

const MessageControl = require('../../../controllers/api/v1/Message');
const MessageSchema = require('../../../schema-validation/Message');
const ErrorHandleHelper = require('../../../models/helpers/ErrorHandleHelper');

router.post(
  '/',
  checkSchema(MessageSchema.sendMessage),
  ErrorHandleHelper.requestValidator,
  MessageControl.newMessage
);
router.get('/:id', MessageControl.getAll);
module.exports = router;
