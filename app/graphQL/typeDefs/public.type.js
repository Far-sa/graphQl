const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLScalarType
} = require('graphql')
const { toObject, parseLiteral } = require('../utils')

exports.AnyType = new GraphQLScalarType({
  name: 'anyType',
  parseValue: toObject,
  serialize: toObject,
  parseLiteral: parseLiteral
})

exports.UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    _id: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString }
  }
})

exports.PublicCategoryType = new GraphQLObjectType({
  name: 'PublicCategoryType',
  fields: {
    _id: { type: GraphQLString },
    title: { type: GraphQLString }
  }
})

exports.ResponseType = new GraphQLObjectType({
  name: 'ResponseType',
  fields: {
    statusCode: { type: GraphQLString },
    data: { type: this.AnyType }
  }
})
