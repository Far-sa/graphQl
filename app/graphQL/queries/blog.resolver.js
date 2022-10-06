const { GraphQLList } = require('graphql')

const {
  VerifyAccessTokenInGraphQL
} = require('../../http/middlewares/verifyAccessToken')

const { BlogModel } = require('../../models/blogs')
const { BlogType } = require('../typeDefs/blog.type')

const BlogResolver = {
  type: new GraphQLList(BlogType),
  resolve: async (_, args, context) => {
    //console.log(context.req.headers)
    const { req } = context
    req.user = await VerifyAccessTokenInGraphQL(req)
    return await BlogModel.find({}).populate([
      { path: 'author' },
      { path: 'category' }
    ])
  }
}

module.exports = { BlogResolver }
