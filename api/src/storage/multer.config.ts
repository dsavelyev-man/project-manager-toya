import { Options } from 'multer';
import * as path from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ERRORS } from 'database';

export const multerConfigPng: Options = {
  limits: {
    fileSize: 1024 * 1024 * 5,
  },

  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);

    if (ext !== '.png') {
      return callback(
        new HttpException(ERRORS.ONLY_PNG_ALLOWED, HttpStatus.NOT_ACCEPTABLE),
      );
    }
    callback(null, true);
  },
};

export const multerConfigPdf: Options = {
  limits: {
    fileSize: 1024 * 1024 * 16,
  },

  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);

    console.log(ext);
    if (ext !== '.pdf') {
      return callback(
        new HttpException(ERRORS.ONLY_PDF_ALLOWED, HttpStatus.NOT_ACCEPTABLE),
      );
    }
    callback(null, true);
  },
};
