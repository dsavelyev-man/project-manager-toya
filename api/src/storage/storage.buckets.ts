import { Reflector } from '@nestjs/core';
import { BUCKET } from 'shared';

export const Bucket = Reflector.createDecorator<BUCKET>();
