const express = require('express');

const router = express.Router();

const AuthHandler = require('../../../models/helpers/AuthHelper');

/**
 * APIs routes.
 */
const User = require('./User');
const Conversation = require('./Conversation');
const Message = require('./Message');
const Shared = require('./Shared');

router.use('/user', User);
router.use('/conversation', AuthHandler.authenticateJWT(), Conversation);
router.use('/message', AuthHandler.authenticateJWT(), Message);
router.use('/shared', Shared);

module.exports = router;
