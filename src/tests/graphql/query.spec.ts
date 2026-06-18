import { test, expect } from '@playwright/test';
import { GraphQLClient } from '../../api/GraphqlClient';
import { UserQueries } from '../../graphQl/UserQueries';
import{ApiFactory} from '../../factory/factorymethod';  

test('Get Post Details', async ({ request }) => {

  const graphQLClient = ApiFactory.GraphQLClient(request);

  const response = await graphQLClient.executeQuery(
    UserQueries.getPost,
    {
      id: 1
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log(body.data.userone);
});