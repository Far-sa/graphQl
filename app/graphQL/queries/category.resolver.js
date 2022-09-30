const { GraphQLList, GraphQLString } = require('graphql')
const { CategoryModel } = require('../../models/categories')
const { CategoryType } = require('../typeDefs/category.type')

const CategoryResolver = {
  type: new GraphQLList(CategoryType),
  resolve: async () => {
    const categories = await CategoryModel.find({ parent: undefined })
    return categories
  }
}

const CategoryChildResolver = {
  type: new GraphQLList(CategoryType),
  args: {
    parent: { type: GraphQLString }
    //authorizationToken : { type: GraphQLString }
  },
  resolve: async (_, args) => {
    //console.log(args)
    const { parent } = args
    const category = await CategoryModel.find({ parent })
    return category
  }
}

module.exports = { CategoryResolver, CategoryChildResolver }
