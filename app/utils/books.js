
const getNextUrl = (searchParams, orderMode) => {
  const genreIds = searchParams.getAll('genreIds')
  const minPages = searchParams.get('minPages')
  const maxPages = searchParams.get('maxPages')
  const minRating = searchParams.get('minRating')
  const limit = searchParams.get('limit') || 20
  const currentOffset = searchParams.get('offset')
  const orderBy = orderMode && orderMode === 'random' ? 'random' : 'rating'

  const getOffset = () => {
    if (['random', 'highest-rated'].includes(orderMode)) return ''

    return currentOffset ? `offset=${(Number(currentOffset) + Number(limit))}` : `offset=${limit + 1}`
  }

  return `/books?
        ${genreIds ? `genreIds=${genreIds.join()}&` : ''}
        ${minPages ? `minPages=${minPages}&` : ''}
        ${maxPages ? `maxPages=${maxPages}&` : ''}
        ${minRating ? `minRating=${minRating}&` : ''}
        ${orderBy ? `orderBy=${orderBy}&` : ''}
        ${limit ? `limit=${limit}&` : ''}
        ${getOffset()}
        `.replace(/\s+/g, '')
}

module.exports = {
  getNextUrl
}
