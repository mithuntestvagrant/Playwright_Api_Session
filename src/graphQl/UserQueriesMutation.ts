export const UserQueriesMutation = {

  createPost: `
    mutation ($input: CreatePostInput!) {
      createPost(input: $input) {
        id
        title
        body
      }
    }
  `
};