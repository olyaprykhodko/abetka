import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Logger } from '@nestjs/common';

@Injectable()
export class HealthcheckService {
  constructor(private readonly sequelize: Sequelize) {}

  async checkDatabase(): Promise<boolean> {
    try {
      await this.sequelize.authenticate();
      return true;
    } catch (error) {
      Logger.error(error);
      return false;
    }
  }
}
