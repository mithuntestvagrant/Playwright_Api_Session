import { APIRequestContext } from '@playwright/test';

export class GraphQLClient {

  private endpoint = 'https://graphqlzero.almansi.me/api';

  constructor(private request: APIRequestContext) {}

  async executeQuery(query: string, variables?: object) {
    return await this.request.post(this.endpoint, {
      data: {
        query,
        variables
      }
    });
  }
}