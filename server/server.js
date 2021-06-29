const express = require('express');
// import apollo server
const { ApolloServer } = require('apollo-server-express');

// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');

const path = require('path');
const db = require('./config/connection');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();

// create a new Apollo server and pass in schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// integrate Apollo server with the Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// check to see if the node environment is in production and serve static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// wildcard get route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
