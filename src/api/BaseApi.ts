import { APIRequestContext, APIResponse } from '@playwright/test';
import { Config } from '../utils/Config';

export class BaseApi {
  request: APIRequestContext;
  baseURL: string;

  constructor(request: APIRequestContext) {
    this.request = request;
    this.baseURL = Config.baseURL;
  }

  private getFullUrl(endpoint: string): string {
    return `${this.baseURL}${endpoint}`;
  }

  get(endpoint: string, headers?: Record<string, string>): Promise<APIResponse> {
    return this.request.get(this.getFullUrl(endpoint), { headers });
  }

  post(endpoint: string, data?: any, headers?: Record<string, string>): Promise<APIResponse> {
    return this.request.post(this.getFullUrl(endpoint), {
      data,
      headers
    });
  }

  put(endpoint: string, data?: any, headers?: Record<string, string>): Promise<APIResponse> {
    return this.request.put(this.getFullUrl(endpoint), {
      data,
      headers
    });
  }

  delete(endpoint: string, headers?: Record<string, string>): Promise<APIResponse> {
    return this.request.delete(this.getFullUrl(endpoint), {
      headers
    });
  }
}