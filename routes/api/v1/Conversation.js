const express = require('express');
const { checkSchema } = require('express-validator');

const router = express.Router();

const ConversationControl = require('../../../controllers/api/v1/Conversation');
const ConversationSchema = require('../../../schema-validation/Conversation');
const ErrorHandleHelper = require('../../../models/helpers/ErrorHandleHelper');

router.post(
  '/',
  checkSchema(ConversationSchema.createConversation),
  ErrorHandleHelper.requestValidator,
  ConversationControl.newConversation
);
router.get('/', ConversationControl.getAll);
router.get('/:id', ConversationControl.getOne);
module.exports = router;
