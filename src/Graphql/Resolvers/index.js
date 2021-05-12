import MocPosts from "../../moc/Posts";
import MocUsers from "../../moc/Users";

const resolvers = {
  Query: {
    getPosts: (parent, { query }, ctx, info) =>
      MocPosts.filter((post) => post.title.includes(query)),

    getUser: (parent, { id }, ctx, info) =>
      MocUsers.find(({ id: userId }) => userId === id) || {},
  },
  Posts: {
    author: ({ author }, args, ctx, info) =>
      MocUsers.find((user) => user.id === author) || {},
  },
  User: {
    posts: ({ id }, args, ctx, info) => {
      console.log("Koca: id ", id);
      return MocPosts.filter(({ id: postId }) => id === postId);
    },
  },
};

export default resolvers;
