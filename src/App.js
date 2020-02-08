import React from 'react';
import Container from './Container'

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container />
    </ApolloProvider>
  );
}

export default App;
