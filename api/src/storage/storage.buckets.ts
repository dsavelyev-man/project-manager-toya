import { Reflector } from '@nestjs/core';
import { BUCKET } from 'database';

export const Bucket = Reflector.createDecorator<BUCKET>();
