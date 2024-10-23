import { Injectable, OnModuleInit } from '@nestjs/common';
import * as Minio from 'minio';

@Injectable()
export class MinioService implements OnModuleInit {
  private minioClient: Minio.Client;
  private bucketName: string;

  onModuleInit() {
    const MINIO_ENDPOINT = process.env.MINIO_ENDPOINT;
    const MINIO_PORT = process.env.MINIO_PORT;
    const MINIO_USE_SSL = process.env.MINIO_USE_SSL;
    const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY;
    const MINIO_SECRET_KEY = process.env.MINIO_SECRET_KEY;
    const MINIO_BUCKET_NAME = process.env.MINIO_BUCKET_NAME;

    if (
      !MINIO_ENDPOINT ||
      !MINIO_PORT ||
      MINIO_USE_SSL === undefined ||
      !MINIO_ACCESS_KEY ||
      !MINIO_SECRET_KEY ||
      !MINIO_BUCKET_NAME
    ) {
      throw new Error('Missing MinIO configuration in environment variables');
    }

    this.minioClient = new Minio.Client({
      endPoint: MINIO_ENDPOINT,
      port: parseInt(MINIO_PORT, 10),
      useSSL: MINIO_USE_SSL === 'true',
      accessKey: MINIO_ACCESS_KEY,
      secretKey: MINIO_SECRET_KEY,
    });

    this.bucketName = MINIO_BUCKET_NAME;
  }

  async uploadFile(fileBuffer: Buffer, fileName: string): Promise<void> {
    await this.minioClient.putObject(this.bucketName, fileName, fileBuffer);
  }

  async getFileUrl(fileName: string): Promise<string> {
    return await this.minioClient.presignedGetObject(
      this.bucketName,
      fileName,
      24 * 60 * 60,
    );
  }
}
