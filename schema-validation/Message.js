exports.sendMessage = {
  message: {
    in: ['body'],
    trim: true,
    notEmpty: true,
    errorMessage: 'message cannot be empty',
    isString: {
      errorMessage: 'message must be string',
    },
    isLength: {
      errorMessage: 'message should not be more than 200 chars long',
      options: { max: 200 },
    },
  },
  receiverId: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'receiverId cannot be empty',
    isNumeric: {
      errorMessage: 'receiverId must be Number',
    },
    isLength: {
      errorMessage: 'receiverId should not be more than 200 chars long',
      options: { max: 200 },
    },
  },
  senderId: {
    in: ['body'],
    notEmpty: false,
    errorMessage: 'senderId cannot be empty',
    isNumeric: {
      errorMessage: 'senderId must be Number',
    },
    isLength: {
      errorMessage: 'senderId should not be more than 200 chars long',
      options: { max: 200 },
    },
  },
  conversationId: {
    in: ['body'],
    notEmpty: false,
    errorMessage: 'conversationId cannot be empty',
    isNumeric: {
      errorMessage: 'conversationId must be Number',
    },
    isLength: {
      errorMessage: 'conversationId should not be more than 200 chars long',
      options: { max: 200 },
    },
  },
};
