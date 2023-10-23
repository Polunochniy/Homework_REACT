import { ApolloClient, InMemoryCache } from "@apollo/client";

const GQL_SERVER_URL = 'http://shop-roles.node.ed.asmer.org.ua/graphql';

export const client = new ApolloClient({
    uri: GQL_SERVER_URL,
    cache: new InMemoryCache(),
});
