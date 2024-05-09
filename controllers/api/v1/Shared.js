// eslint-disable-next-line import/no-extraneous-dependencies
const { put } = require('@vercel/blob');
const { resCode } = require('../../../config/options');
const OPTIONS = require('../../../config/options');
const {
  customErrorLogger,
} = require('../../../models/helpers/ErrorHandleHelper');

exports.upload = async (req, res) => {
  try {
    const { originalname, buffer } = req.file;
    const { url } = await put(originalname, buffer, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    if (url) {
      const response = {
        url,
      };
      return res
        .status(resCode.HTTP_OK)
        .json(OPTIONS.genRes(resCode.HTTP_OK, response));
    }
    return res
      .status(resCode.HTTP_BAD_REQUEST)
      .json(
        OPTIONS.genRes(resCode.HTTP_BAD_REQUEST, 'Error in uploading media')
      );
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
