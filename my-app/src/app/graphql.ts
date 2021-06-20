import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: `${process.env.REACT_APP_API_URL}/graphql` as any,
  cache: new InMemoryCache(),
});

export default apolloClient;
