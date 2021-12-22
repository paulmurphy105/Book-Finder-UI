
const getNextUrl = (searchParams) => {
    const genreIds = searchParams.getAll("genreIds")
    const minPages = searchParams.get("minPages")
    const maxPages = searchParams.get("maxPages")
    const minRating = searchParams.get("minRating")
    const limit = searchParams.get("limit") || 20
    const currentOffset = searchParams.get("offset")

    return `/books?
        ${genreIds ? `genreIds=${genreIds.join()}&` : ''}
        ${minPages ? `minPages=${minPages}&` : ''}
        ${maxPages ? `maxPages=${maxPages}&` : ''}
        ${minRating ? `minRating=${minRating}&` : ''}
        ${limit ? `limit=${limit}&` : ''}
        ${currentOffset ? `offset=${(Number(currentOffset) + Number(limit))}` : `offset=${limit}`}
        `
}

module.exports = {
    getNextUrl
}