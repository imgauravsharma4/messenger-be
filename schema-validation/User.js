const options = require('../config/options');

exports.login = {
  email: {
    in: ['body'],
    trim: true,
    notEmpty: true,
    errorMessage: 'Email cannot be empty',
    isString: {
      errorMessage: 'Email must be string',
    },
    isEmail: {
      bail: true,
      errorMessage: 'Enter a valid Email',
    },
    isLength: {
      errorMessage: 'Email should not be more than 200 chars long',
      options: { max: 200 },
    },
  },
  password: {
    in: ['body'],
    trim: true,
    notEmpty: true,
    errorMessage: 'Password cannot be empty',
    isString: {
      errorMessage: 'Password must be string',
    },
    isLength: {
      errorMessage: 'Password should not be more than 200 chars long',
      options: { max: 200 },
    },
  },
};

exports.signUp = {
  email: {
    in: ['body'],
    trim: true,
    notEmpty: true,
    errorMessage: 'Email cannot be empty',
    isString: {
      errorMessage: 'Email must be string',
    },
    isEmail: {
      bail: true,
      errorMessage: 'Enter a valid Email',
    },
    isLength: {
      errorMessage: 'Email should not be more than 200 chars long',
      options: { max: 200 },
    },
  },
  userName: {
    in: ['body'],
    trim: true,
    notEmpty: true,
    errorMessage: 'Username cannot be empty',
    isString: {
      errorMessage: 'Username must be string',
    },
    isLength: {
      errorMessage: 'Username should not be more than 200 chars long',
      options: { max: 200 },
    },
  },
  role: {
    in: ['body'],
    trim: true,
    notEmpty: true,
    errorMessage: 'role cannot be empty',
    isIn: {
      options: [[options.usersRoles.USER]],
      errorMessage: `Role value must be ${options.usersRoles.USER}`,
    },
    isString: {
      errorMessage: 'role must be string',
    },
    isLength: {
      errorMessage: 'role should not be more than 200 chars long',
      options: { max: 200 },
    },
  },
  password: {
    in: ['body'],
    trim: true,
    notEmpty: true,
    errorMessage: 'Password cannot be empty',
    isString: {
      errorMessage: 'Password must be string',
    },
    isLength: {
      errorMessage: 'Password should not be more than 200 chars long',
      options: { max: 200 },
    },
  },
  fullName: {
    in: ['body'],
    trim: true,
    notEmpty: true,
    errorMessage: 'fullName cannot be empty',
    isString: {
      errorMessage: 'fullName must be string',
    },
    isLength: {
      errorMessage: 'fullName should not be more than 200 chars long',
      options: { max: 200 },
    },
  },
};
