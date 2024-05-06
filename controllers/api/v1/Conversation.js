const { Op } = require('sequelize');
const ConversationRepository = require('../../../models/repositories/ConversationRepository');
const OPTIONS = require('../../../config/options');
const ErrorHandleHelper = require('../../../models/helpers/ErrorHandleHelper');

const { resCode } = require('../../../config/options');
const db = require('../../../models');
const options = require('../../../config/options');

const { customErrorLogger } = ErrorHandleHelper;
exports.newConversation = async (req, res) => {
  try {
    const { body } = req;
    body.senderId = req.user.id;
    if (Number(body.receiverId) === Number(body.senderId)) {
      return res
        .status(resCode.HTTP_OK)
        .json(OPTIONS.genRes(resCode.HTTP_OK, { success: true, data: [] }));
    }
    const response = await ConversationRepository.createConversation(req.body);
    if (!response.success) {
      return res
        .status(resCode.HTTP_BAD_REQUEST)
        .json(OPTIONS.genRes(resCode.HTTP_BAD_REQUEST, response.message));
    }
    return res
      .status(resCode.HTTP_OK)
      .json(OPTIONS.genRes(resCode.HTTP_OK, response));
  } catch (e) {
    customErrorLogger(e);
    return res
      .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
      .json(
        OPTIONS.genRes(
          resCode.HTTP_INTERNAL_SERVER_ERROR,
          OPTIONS.errorMessage.SERVER_ERROR,
          OPTIONS.errorTypes.INTERNAL_SERVER_ERROR
        )
      );
  }
};

exports.getAll = async (req, res) => {
  try {
    const query = {
      where: {
        [Op.or]: [{ senderId: req.user.id }, { receiverId: req.user.id }],
        status: options.defaultStatus.ACTIVE,
      },
      include: [
        {
          model: db.User,
          as: 'receiver',
          attributes: ['id', 'firstName', 'email', 'userName'],
        },
        {
          model: db.User,
          as: 'sender',
          attributes: ['id', 'firstName', 'email', 'userName'],
        },
      ],
    };
    const response = await ConversationRepository.findAll(query);
    if (!response.success) {
      return res
        .status(resCode.HTTP_BAD_REQUEST)
        .json(OPTIONS.genRes(resCode.HTTP_BAD_REQUEST, response.message));
    }
    return res
      .status(resCode.HTTP_OK)
      .json(OPTIONS.genRes(resCode.HTTP_OK, response));
  } catch (e) {
    customErrorLogger(e);
    return res
      .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
      .json(
        OPTIONS.genRes(
          resCode.HTTP_INTERNAL_SERVER_ERROR,
          OPTIONS.errorMessage.SERVER_ERROR,
          OPTIONS.errorTypes.INTERNAL_SERVER_ERROR
        )
      );
  }
};

exports.getOne = async (req, res) => {
  try {
    const query = {
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: db.User,
          as: 'receiver',
          attributes: ['id', 'firstName', 'email', 'userName'],
        },
        {
          model: db.User,
          as: 'sender',
          attributes: ['id', 'firstName', 'email', 'userName'],
        },
      ],
    };
    const response = await ConversationRepository.findOne(query);
    if (!response.success) {
      return res
        .status(resCode.HTTP_BAD_REQUEST)
        .json(OPTIONS.genRes(resCode.HTTP_BAD_REQUEST, response.message));
    }
    return res
      .status(resCode.HTTP_OK)
      .json(OPTIONS.genRes(resCode.HTTP_OK, response));
  } catch (e) {
    customErrorLogger(e);
    return res
      .status(resCode.HTTP_INTERNAL_SERVER_ERROR)
      .json(
        OPTIONS.genRes(
          resCode.HTTP_INTERNAL_SERVER_ERROR,
          OPTIONS.errorMessage.SERVER_ERROR,
          OPTIONS.errorTypes.INTERNAL_SERVER_ERROR
        )
      );
  }
};
