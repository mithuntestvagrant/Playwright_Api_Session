import { BaseApi } from './BaseApi';
import { APIRequestContext } from '@playwright/test';
import { Config } from '../utils/Config';

export class ProductApi extends BaseApi {

  constructor(request: APIRequestContext) {
    super(request);
    this.baseURL = Config.escuelaBaseURL;
  }

  private endpoints = {
    filterByTitle: (title: string) => `/products/?title=${title}`
  };

  filterByTitle(title: string) {
    return this.get(this.endpoints.filterByTitle(title));
  }
}