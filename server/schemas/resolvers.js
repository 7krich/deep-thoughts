const { User, Thought } = require('../models');

// SERVE RESPONSE FOR typDefs query

const resolvers = {
    Query: {
            // use parent has placeholder parameter
            // access username argument from second param
        thoughts: async (parent, { username }) => {
            // user ternary operator to check if username exists
            // if it doesn't return empty obj
            const params = username ? { username } : {};
            // use find to sort through Thought model
            // then sort in descending order
            return Thought.find().sort({ createdAt: -1 })
        }
    }
};
  
  module.exports = resolvers;