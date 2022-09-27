const { GraphQLList, GraphQLString } = require('graphql')
const { CategoryModel } = require('../../models/categories')
const { categoryType } = require('../typeDefs/category.type')

const CategoryResolver = {
  type: new GraphQLList(categoryType),
  resolve: async () => {
    const categories = await CategoryModel.find({ parent: undefined })
    return categories
  }
}

const CategoryChildResolver = {
  type: new GraphQLList(categoryType),
  args: {
    parent: { type: GraphQLString }
  },
  resolve: async (_, args) => {
    const { parent } = args
    const category = await CategoryModel.find({ parent })
    return category
  }
}

module.exports = { CategoryResolver, CategoryChildResolver }
