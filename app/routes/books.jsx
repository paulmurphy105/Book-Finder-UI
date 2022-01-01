import { useLoaderData, useSearchParams } from 'remix'
import * as React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Link from '@mui/material/Link'
import NavigateNext from '@mui/icons-material/NavigateNext'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import ShuffleIcon from '@mui/icons-material/Shuffle'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Search from './components/search'
import Book from './components/book'
import NoBooksFound from './components/NoBooksFound'
import { getNextUrl } from '../utils/books'

export const loader = async ({ request }) => {
  const url = new URL(request.url)
  const genreIds = url.searchParams.get('genreIds')
  const minPages = url.searchParams.get('minPages')
  const maxPages = url.searchParams.get('maxPages')
  const minRating = url.searchParams.get('minRating')
  const limit = url.searchParams.get('limit')
  const offset = url.searchParams.get('offset')
  const orderBy = url.searchParams.get('orderBy')

  let books
  if (genreIds && genreIds !== null) {
    try {
      books = await fetch(`${process.env.BACKEND_URL}books?genreIds=${genreIds}&minPages=${minPages}&maxPages=${maxPages}&minRating=${minRating}&limit=${limit}&offset=${offset}&orderBy=${orderBy}`)
        .then((response) => {
          return response.json()
        })
    } catch (error) {
      console.log('Fetch failed')
      console.error(error)
    }
  }

  const genres = require('../@data/mocks/genres.json')

  return { books, genres }
}

export function links () {
  return [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  ]
}

export default function Books () {
  const isLargerThanMobile = useMediaQuery('(min-width:600px)')
  const [searchParams] = useSearchParams()
  const data = useLoaderData()
  const searchButtonRef = React.useRef()
  const [searchBarVisible, setSearchBarVisible] = React.useState(!Array.isArray(data.books))

  const handleSearchInputChange = () => {
    setSearchBarVisible((prev) => !prev)
  }

  const isShuffling = () => searchParams && searchParams.get('orderBy') && searchParams.get('orderBy') === 'random'

  const handleScrollTop = () => {
    if (searchButtonRef.current) {
      searchButtonRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const ScrollToTopButton = () => {
    return (
      <Fab color='primary' aria-label='add' onClick={handleScrollTop} sx={{ margin: '0px', right: '20px', bottom: '20px', position: 'fixed' }}>
        <ArrowUpwardIcon />
      </Fab>
    )
  }

  const PanelButtons = () => {
    if (Array.isArray(data.books)) {
      const SearchButton = !searchBarVisible
        ? <Button sx={{ marginBottom: '1em' }} ref={searchButtonRef} variant='outlined' onClick={handleSearchInputChange} startIcon={<SearchIcon />}>Show Search Bar</Button>
        : <Button sx={{ marginBottom: '1em' }} ref={searchButtonRef} variant='outlined' onClick={handleSearchInputChange} startIcon={<CloseIcon />}>Hide Search Bar</Button>

      return (
        <>
          {SearchButton}
          {data.books.length > 0 && <SortButtons />}
        </>
      )
    }

    return null
  }

  const BottomButton = () => {
    if (isShuffling()) {
      return (
        <Box sx={{ margin: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ShuffleButton />
        </Box>
      )
    }

    if (data.books.length === 20) {
      return (
        <Box sx={{ margin: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
            href={getNextUrl(searchParams)}
          >
            <span>More</span>
            <NavigateNext />
          </Link>
        </Box>
      )
    }

    return null
  }

  const SearchResults = () => {
    if (!data.books || !Array.isArray(data.books)) {
      return null
    }

    if (data.books.length === 0) {
      return <NoBooksFound />
    }

    return (
      <>
        <BookList />
        <BottomButton />
        <ScrollToTopButton />
      </>
    )
  }

  const BookList = () => {
    // TODO: figure this out. the mobile view gets messed up when I wrap it in a box element.
    // There is likely a way to return a single component to handle both scenarios
    if (isLargerThanMobile) {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          flexDirection: isLargerThanMobile ? 'row' : 'column',
          flexWrap: 'wrap'
        }}
        >
          {data.books.map((book) => <Book key={book.bookId} book={book} />)}
        </div>
      )
    }

    return data.books.map((book) => <Book key={book.bookId} book={book} />)
  }

  const ShuffleButton = () => <Button size='small' sx={{ margin: '1em' }} disabled={false} href={getNextUrl(searchParams, 'random')} variant='contained' startIcon={<ShuffleIcon />}>Shuffle</Button>

  const SortButtons = () => {
    return (
      <Box sx={{ marginTop: '1em', marginBottom: '1em', display: 'flex', flexWrap: 'wrap', justifyContent: isLargerThanMobile ? 'center' : 'space-around', outline: '1px solid lightgray' }}>
        <Button size='small' sx={{ margin: '1em' }} disabled={!isShuffling()} href={getNextUrl(searchParams, 'highest-rated')} variant='contained' startIcon={<ArrowDownwardIcon />}>Highest Rated</Button>
        <ShuffleButton />
      </Box>
    )
  }

  return (
    <Box
      sx={{ margin: '2em', display: 'flex', flexDirection: 'column', alignItems: 'centre', alignContent: 'space-between', justifyContent: 'center' }}
    >
      <Collapse in={searchBarVisible}>
        <Search genreList={data.genres} />
      </Collapse>

      <PanelButtons />

      <main>
        <SearchResults />
      </main>
    </Box>
  )
}
