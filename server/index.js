let {ApolloServer} = require('apollo-server');
let typeDefs = require('./schema/schema.js');
let resolvers = require('./resolvers/index.js');

let apolloServer = new ApolloServer({typeDefs, resolvers});
apolloServer.listen().then(({url}) => {
  console.log(`Apollo server is running at ${url}`)
})