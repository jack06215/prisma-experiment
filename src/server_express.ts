import { createServer, Server } from 'http'
import app, { startApolloServer } from './app'


async function main() {
    await startApolloServer();
    const httpServer: Server = createServer(app)
    const PORT = process.env.PORT || 3000
    httpServer.listen({ port: PORT }, (): void =>
        console.log(`\n🚀GraphQL is now running on http://localhost:${PORT}/graphql`))
}

main().catch((e) => { throw e; });