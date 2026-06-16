export const UserQueries = {

  getPost: `
    query ($id: ID!) {
      userone: post(id: $id) {
        title
        body
      }
    }
  `
};