exports.createConversation = {
  receiverId: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Id cannot be empty',
    isNumeric: {
      errorMessage: 'Id must be Number',
    },
    isLength: {
      errorMessage: 'Id should not be more than 200 chars long',
      options: { max: 200 },
    },
  },
};
