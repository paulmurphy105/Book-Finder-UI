
const DEFAULT_MIN_PAGES = 300;
const DEFAULT_MAX_PAGES = 600;
const DEFAULT_MIN_READING_DURATION = 3;
const DEFAULT_MAX_READING_DURATION = 10;

const getDefaultPageCountValue = (searchParams) => {
    const minPages = searchParams.get("minPages")
    const maxPages = searchParams.get("maxPages")

    if (!minPages || !maxPages) return [DEFAULT_MIN_PAGES, DEFAULT_MAX_PAGES]

    return [minPages, maxPages]
}

const getDefaultBookDuration = (searchParams) => {
    const minPages = searchParams.get("minPages")
    const maxPages = searchParams.get("maxPages")

    if (!minPages || !maxPages) return [DEFAULT_MIN_READING_DURATION, DEFAULT_MAX_READING_DURATION]

    return [Math.floor((minPages / 40) - 50), Math.round((minPages / 40) + 50)]
}

const getDefaultMinRating = (searchParams) => {
    const minRating = searchParams.get("minRating")

    if (!minRating) return 3;

    return minRating
}

const getDefaultAutocompleteValues = (searchParams, genreList) => {
    const genreIds = searchParams.get("genreIds")
    let defaultValues = []

    if (!genreIds) return defaultValues
    
    const genreIdsArr = genreIds.split(',').map(Number);

    for (let i = 0; i < genreList.length; i += 1) {
        if (genreIdsArr.includes(genreList[i].genreId)) {
            defaultValues.push(genreList[i])
        }
    }

    return defaultValues;
}





module.exports = {
    getDefaultPageCountValue,
    getDefaultBookDuration,
    getDefaultMinRating,
    getDefaultAutocompleteValues
}