import { Resolvers } from './generated/graphql';

export const resolvers: Resolvers = {
    Query: {
        helloworld: () => "Hello GraphQL in TypeScript",
    }
}
