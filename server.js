let express = require('express');
let express_graphql = require('express-graphql');
let {buildSchema} = require('graphql');

//Graphql schema
let schema = buildSchema(`
    type Query {
        message: String
    }
`)
