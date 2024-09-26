import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());

  app.enableCors({
    origin: [
      'http://192.168.88.8:3000',
      'http://localhost:3000',
      'http://localhost:4000',
    ],
    credentials: true,
  });

  await app.listen(3500);
  Logger.log('Server works on port 3500');
}
bootstrap();
