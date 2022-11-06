const { GraphQLString } = require('graphql')
const createHttpError = require('http-errors')
const { StatusCodes: HttpStatus } = require('http-status-codes')

const {
  VerifyAccessTokenInGraphQL
} = require('../../http/middlewares/verifyAccessToken')
const { BlogModel } = require('../../models/blogs')

const { ResponseType } = require('../typeDefs/public.type')

const CreateCommentForBlogs = {
  type: ResponseType,
  args: {
    comment: { type: GraphQLString },
    blogId: { type: GraphQLString },
    parent: { type: GraphQLString }
  },
  resolve: async (_, args, context) => {
    const { req } = context
    const user = await VerifyAccessTokenInGraphQL(req)
    //req.user = user
    const { comment, blogId, parent } = args
    await existedBlog(blogId)
    await BlogModel.updateOne(
      { _id: blogId },
      {
        $push: {
          comments: {
            comment,
            user: user.id,
            show: false,
            openToComment: !parent
          }
        }
      }
    )
    return {
      statusCode: HttpStatus.CREATED,
      data: {
        message: 'Comment has been registered successfully'
      }
    }
  }
}

async function existedBlog (id) {
  const blog = await BlogModel.findById(id)
  if (!blog) throw createHttpError.NotFound('Blog not Found')
  return blog
}

module.exports = {
  CreateCommentForBlogs
}
