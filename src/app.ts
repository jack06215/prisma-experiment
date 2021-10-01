import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
import cors from 'cors'
import { join } from 'path';
import { resolvers } from './resolver';
import { readFileSync } from 'fs';

const app = express();

export async function startApolloServer() {
    const server = new ApolloServer({
        typeDefs: readFileSync(
            join(__dirname, './graphql/schema.graphql'),
            { encoding: 'utf-8', flag: 'r' }
        ),
        resolvers,
    });
    await server.start();
    app.use(cors({ origin: "*" }));
    app.use(compression());
    server.applyMiddleware({ app, path: '/graphql' });
}

export default app
