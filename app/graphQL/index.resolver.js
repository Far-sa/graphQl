const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    blogs: {
      type: new GraphQLList(
        new GraphQLObjectType({
          name: 'blogsType',
          fields: {
            id: { type: GraphQLInt },
            title: { type: GraphQLString },
            body: { type: GraphQLString },
            image: { type: GraphQLString }
          }
        })
      ),
      resolve: () => {
        return [
          {
            id: 1,
            title: 'title',
            body: 'Some info about ',
            image: 'index.jpg'
          }
        ]
      }
    }
  }
})

const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {}
})

const graphqlSchema = new GraphQLSchema({
  query: RootQuery
  //mutation: RootMutation
})

module.exports = graphqlSchema
