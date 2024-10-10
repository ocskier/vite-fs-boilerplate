import appDetails from "../package.json" assert { type: "json" };

const resolvers = {
  Query: {
    time: (parent, args, contextValue, info) => {
      return new Date().valueOf().toString();
    },
    version: (parent, args, contextValue, info) => {
      return `Hit API version ${appDetails.version}!`;
    },
  },
};

export default resolvers;
