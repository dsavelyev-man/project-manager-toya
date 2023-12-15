import { ERRORS } from 'shared';
import { HttpStatus } from '@nestjs/common';

const prismaErrors: {
  [key: string]: [ERRORS, HttpStatus];
} = {
  P2025: [ERRORS.NOT_FOUND, HttpStatus.NOT_FOUND],
  default: [ERRORS.UNKNOWN_ERROR, HttpStatus.INTERNAL_SERVER_ERROR],
};

export default prismaErrors;
