const Query = {
  Page: (...args) => {
    return {
      path: '/',
      content: 'You page content!'
    }
  }
}

module.exports = {
  Query,
}
