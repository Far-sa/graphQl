const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql')
const { UserType, AnyType } = require('./public.type')

const ParentSCommentType = new GraphQLObjectType({
  name: 'ParentType',
  fields: {
    user: { type: UserType },
    comment: { type: GraphQLString }
  }
})

const CommentType = new GraphQLObjectType({
  name: 'CommentType',
  fields: {
    user: { type: UserType },
    comment: { type: GraphQLString },
    show: { type: GraphQLBoolean },
    openToComment: { type: GraphQLBoolean },
    parent: { type: ParentSCommentType }
  }
})


module.exports = {
  CommentType
}
