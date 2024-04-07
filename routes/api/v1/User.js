const express = require('express');
// const { checkSchema } = require("express-validator");

const router = express.Router();

const UserControl = require('../../../controllers/api/v1/User');
// const UserSchema = require("../../../schema-validation/User");
// const ErrorHandleHelper = require("../../../models/helpers/ErrorHandleHelper");

router.post('/sign-up', UserControl.signup);
router.post('/login', UserControl.login);
module.exports = router;
