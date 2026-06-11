import dotenv from 'dotenv';

dotenv.config();

export class Config {

  static get baseURL(): string {
    return process.env.BASE_URL || '';
  }

  static get username(): string {
    return process.env.USERNAME || '';
  }

  static get password(): string {
    return process.env.PASSWORD || '';
  }

  static get environment(): string {
    return process.env.ENV || 'qa';
  }

  static isQA(): boolean {
    return this.environment === 'qa';
  }

  static isProd(): boolean {
    return this.environment === 'prod';
  }
}