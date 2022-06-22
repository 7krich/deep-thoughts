// TYPE DEFINITIONS

// import gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
// define query
const typeDefs = gql` 
    type Query {
        helloWorld: String
    }
`;

// export the typeDefs
module.exports = typeDefs;