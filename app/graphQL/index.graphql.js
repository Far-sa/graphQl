const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const { BlogResolver } = require('./queries/blog.resolver')
const {
  CategoryResolver,
  CategoryChildResolver
} = require('./queries/category.resolver')
const { CourseResolver } = require('./queries/course.resolver')
const { ProductResolver } = require('./queries/product.resolver')
const { CreateCommentForBlogs } = require('./queries/comment.resolver')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    blogs: BlogResolver,
    products: ProductResolver,
    categories: CategoryResolver,
    childOfCategory: CategoryChildResolver,
    courses: CourseResolver
  }
})

// GUD
const RootMutation = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    CreateCommentForBlogs
  }
})

const graphqlSchema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})

module.exports = graphqlSchema
