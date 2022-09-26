const { GraphQLList, GraphQLObjectType, GraphQLString } = require('graphql')

const AuthorType = require('./public.type')

const BlogType = new GraphQLObjectType({
  name: 'BlogType',
  fields: {
    _id: { type: GraphQLString },
    author: { type: AuthorType },
    title: { type: GraphQLString },
    short_text: { type: GraphQLString },
    text: { type: GraphQLString },
    image: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
    category: { type: GraphQLString }
  }
})

module.exports = BlogType
