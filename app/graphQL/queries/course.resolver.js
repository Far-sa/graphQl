const { GraphQLList, GraphQLString } = require('graphql')
const { CourseType } = require('../typeDefs/course.type')

const { CourseModel } = require('../../models/course')

const CourseResolver = {
  type: new GraphQLList(CourseType),
  args: {
    category: { type: GraphQLString }
  },
  resolve: async () => {
    const { category } = args
    const findQuery = category ? { category } : {}
    return await CourseModel.find(findQuery).populate([
      { path: 'teacher' },
      { path: 'category' }
    ])
  }
}

module.exports = {
  CourseResolver
}
