const { GraphQLObjectType, GraphQLString } = require('graphql')

exports.AuthorType = new GraphQLObjectType({
  name: 'AuthorType',
  fields: {
    _id: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString }
  }
})

exports.CategoryType = new GraphQLObjectType({
  name: 'CategoryType',
  fields: {
    _id: { type: GraphQLString },
    title: { type: GraphQLString }
  }
})
