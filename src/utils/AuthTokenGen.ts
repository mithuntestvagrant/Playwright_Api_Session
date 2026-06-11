import { APIRequestContext } from '@playwright/test';
import { Config } from './Config';

export class AuthTokenGen {

  static async generateToken(request: APIRequestContext): Promise<string> {
    
    const response = await request.post(`${Config.baseURL}/auth`, {
      data: {
        username: Config.username,
        password: Config.password
      }
    });

    if (response.status() !== 200) {
      throw new Error(`Token generation failed. Status: ${response.status()}`);
    }

    const body = await response.json();
    
    console.log('🔐 Token Generated:', body.token);

    return body.token;
  }
}