import 'reflect-metadata'
import { GraphQLServer, Options } from 'graphql-yoga'

import './setup-di'

import { setupSchema } from './setup-schema'

async function bootstrap() {

  const schema = await setupSchema()

  const server = new GraphQLServer({ schema })

  const serverOptions: Options = {
    port: 4000,
    endpoint: '/graphql',
    playground: '/playground',
  }

  server.start(serverOptions, ({ port, playground }) => {
    console.log(
      `Server is running, GraphQL Playground available at http://localhost:${port}${playground}`,
    )
  })
}

bootstrap()
