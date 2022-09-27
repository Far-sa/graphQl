const { GraphQLObjectType, GraphQLString } = require('graphql')

const categoryType = new GraphQLObjectType({
  name: 'categoryType',
  fields: {
    _id: { type: GraphQLString },
    title: { type: GraphQLString }
    //children: { type: GraphQLString }
  }
})

module.exports = { categoryType }
