const graphqlSchema = require('../graphQL/index.resolver')

exports.graphqlConfig = (req, res) => {
  return {
    schema: graphqlSchema,
    graphiql: true,
    context: { req, res }
  }
}
