import { test, expect } from '@playwright/test';
import { GraphQLClient } from '../../api/GraphqlClient';
import { UserQueriesMutation } from '../../graphQl/UserQueriesMutation';

test('Create Post Mutation', async ({ request }) => {

  const graphQLClient = new GraphQLClient(request);

  const variables = {
    input: {
      title: 'Playwright GraphQL',
      body: 'Mutation Testing'
    }
  };

  const response = await graphQLClient.executeQuery(
    UserQueriesMutation.createPost,
    variables
  );

  expect(response.status()).toBe(200);

  const body = await response.json();

  console.log('Title:', body.data.createPost.title);
  console.log('Body:', body.data.createPost.body);

  expect(body.data.createPost).toBeTruthy();
});