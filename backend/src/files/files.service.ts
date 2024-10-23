import { Injectable } from '@nestjs/common';
import { MinioService } from 'src/minio/minio.service';

@Injectable()
export class FilesService {
  constructor(private readonly minioService: MinioService) {}

  async uploadFile(fileBuffer: Buffer, originalName: string): Promise<string> {
    const fileName = `profile-${Date.now()}-${originalName}`;
    await this.minioService.uploadFile(fileBuffer, fileName);
    console.log(`Your file is ${fileName} received`);
    return fileName;
  }

  async getFileUrl(fileName: string): Promise<string> {
    return this.minioService.getFileUrl(fileName);
  }

  async test(): Promise<string> {
    return 'Test profile picture route is working';
  }
}
