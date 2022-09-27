const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const { BlogResolver } = require('./queries/blog.resolver')
const {
  CategoryResolver,
  CategoryChildResolver
} = require('./queries/category.resolver')

const { ProductResolver } = require('./queries/product.resolver')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    blogs: BlogResolver,
    products: ProductResolver,
    categories: CategoryResolver,
    childOfCategory: CategoryChildResolver
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
