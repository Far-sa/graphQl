const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {}
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {}
})

const graphqlSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})

module.exports = graphqlSchema
