import { GraphQLServer } from "graphql-yoga";
import Schemas from "./Graphql/Schemas";
import Resolvers from "./Graphql/Resolvers";

const server = new GraphQLServer({
  typeDefs: Schemas,
  resolvers: Resolvers,
});

server.start(() => {
  console.log("Hello");
});
