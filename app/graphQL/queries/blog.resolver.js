const { GraphQLList, GraphQLString } = require('graphql')

const {
  VerifyAccessTokenInGraphQL
} = require('../../http/middlewares/verifyAccessToken')

const { BlogModel } = require('../../models/blogs')
const { BlogType } = require('../typeDefs/blog.type')

const BlogResolver = {
  type: new GraphQLList(BlogType),
  args: {
    category: { type: GraphQLString }
  },
  resolve: async (_, args, context) => {
    const { category } = args
    const findQuery = category ? { category } : {}
    //console.log(context.req.headers)
    const { req } = context
    req.user = await VerifyAccessTokenInGraphQL(req)
    return await BlogModel.find(findQuery).populate([
      { path: 'author' },
      { path: 'category' }
    ])
  }
}

module.exports = { BlogResolver }
