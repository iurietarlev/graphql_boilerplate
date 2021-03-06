import ApolloBoost, { gql } from "apollo-boost";
const getClient = (jwt) =>
  new ApolloBoost({
    uri: "http://localhost:4000/",
    request: (op) => {
      if (jwt) {
        op.setContext({
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
      }
    },
  });

export { getClient as default };
