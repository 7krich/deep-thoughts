// SERVE RESPONSE FOR typDefs query
const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    }
  };
  
  module.exports = resolvers;