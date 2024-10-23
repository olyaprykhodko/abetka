import {
  Controller,
  Post,
  Get,
  Param,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { Express } from 'express';

@Controller('users')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('profile-picture')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const fileName = await this.filesService.uploadFile(
      file.buffer,
      file.originalname,
    );
    return { fileName };
  }

  @Get('profile-picture')
  async testProfilePicture() {
    const result = await this.filesService.test();
    return result;
  }

  @Get('profile-picture/:fileName')
  async getFileUrl(@Param('fileName') fileName: string) {
    const url = await this.filesService.getFileUrl(fileName);
    return { url };
  }
}
