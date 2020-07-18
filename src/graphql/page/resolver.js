const { Query } = require('./page.query')
const { Mutation } = require('./page.mutation')

const resolver = {
  Query,
  Mutation,
}

module.exports = {
  resolver,
}
