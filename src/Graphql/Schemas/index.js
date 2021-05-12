const typeDefs = `
    type Query {
        hello: String!
        getPosts(query: String!):  [Posts!]!
        getUser(id: ID!):  User!
    }

    type Posts {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
      author: User!
    }

    type User {
      id: ID!
      name: String!
      email: String!
      posts: [Posts!]!
    }
`;

export default typeDefs;