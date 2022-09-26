const graphqlSchema = require('../graphQL/index.graphql')

exports.graphqlConfig = (req, res) => {
  return {
    schema: graphqlSchema,
    graphiql: true,
    context: { req, res }
  }
}
