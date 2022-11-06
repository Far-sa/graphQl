const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} = require('graphql')
const { PublicCategoryType, UserType } = require('./public.type')

const EpisodeTypes = new GraphQLObjectType({
  name: 'EpisodeTypes',
  fields: {
    title: { type: GraphQLString },
    text: { type: GraphQLString },
    type: { type: GraphQLString },
    time: { type: GraphQLString },
    videoAddress: { type: GraphQLString },
    videoURL: { type: GraphQLString }
  }
})

const ChapterTypes = new GraphQLObjectType({
  name: 'ChapterTypes',
  fields: {
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    text: { type: GraphQLString },
    episodes: { type: new GraphQLList(EpisodeTypes) }
  }
})

const CourseType = new GraphQLObjectType({
  name: 'CourseType',
  fields: {
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    short_text: { type: GraphQLString },
    text: { type: GraphQLString },
    image: { type: GraphQLString },
    imageURL: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
    category: { type: PublicCategoryType },
    price: { type: GraphQLInt },
    discount: { type: GraphQLInt },
    status: { type: GraphQLString },
    count: { type: GraphQLInt },
    type: { type: GraphQLString },
    supplier: { type: UserType },
    teacher: { type: UserType },
    chapters: { type: new GraphQLList(ChapterTypes) }
  }
})

module.exports = { CourseType }
