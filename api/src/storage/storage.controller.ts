import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Res,
  StreamableFile,
} from '@nestjs/common';
import { StorageService } from './storage.service';
import { ERRORS, BUCKET } from 'shared';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('storage')
@Controller('storage')
export class StorageController {
  constructor(private storageService: StorageService) {}

  @Get('images/:filename')
  async getImage(@Res() res, @Param('filename') filename: string) {
    try {
      const body = await this.storageService.getFileByFilename(
        BUCKET.images,
        filename,
      );

      return body.pipe(res);
    } catch (e) {
      res.status(HttpStatus.NOT_FOUND).json({
        message: ERRORS.NOT_FOUND,
        statusCode: HttpStatus.NOT_FOUND,
      });
    }
  }
}
