const Mutation = {
  CreatePage: (...args) => {
    return {
      path: '/',
      content: 'You page content!'
    }
  },

  UpdatePage: (...args) => {
    return {
      path: '/',
      content: 'You page content!'
    }
  },
}

module.exports = {
  Mutation,
}
