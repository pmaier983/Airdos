import { server } from './lambda'

const graphqlHandler = server.createHandler({
  cors: {
    origin: 'https://airdos.net/',
    credentials: false,
    allowedHeaders: [
      'Content-Type',
      'Origin',
      'Accept',
      'token',
    ],
  },
})

export { graphqlHandler }
