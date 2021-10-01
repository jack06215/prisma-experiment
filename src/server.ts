import { ApolloServer } from 'apollo-server';
import { readFileSync } from 'fs';
import { resolvers } from './resolver';
import { join } from 'path';

async function main() {
    const server = new ApolloServer({
        typeDefs: readFileSync(
            join(__dirname, './graphql/schema.graphql'),
            { encoding: 'utf-8', flag: 'r' }
        ),
        resolvers,
    });

    server.listen({ port: process.env.PORT || 4001 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
    });
}

main().catch((e) => { throw e; });
