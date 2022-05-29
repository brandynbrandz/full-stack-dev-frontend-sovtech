import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient ({
    uri: 'https://3z6x3f.sse.codesandbox.io/graphql',
    cache: new InMemoryCache
})

export default client