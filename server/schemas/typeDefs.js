// TYPE DEFINITIONS

// import gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
// define query
//return Thought data
const typeDefs = gql` 
    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCounter: Int
        reactions: [Reaction]
    }
    type Reaction {
        _id: ID
        reactionBody: String
        createdAt: String
        username: String
    }
    type Query {
        thoughts(username: String): [Thought]
    }
`;

// export the typeDefs
module.exports = typeDefs;