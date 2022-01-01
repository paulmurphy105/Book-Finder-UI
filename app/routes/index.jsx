import * as React from 'react'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export function links() {
  return [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  ]
}

export const meta = () => {
  return {
    title: 'Find your next book under 100, 200, 300, 400 pages',
    description: 'Find the next book by specifying genre, page count, book length and rating'
  }
}

export default function Books() {
  const [dynamicPageCount, setDynamicPageCount] = React.useState(Math.floor(Math.random() * 10) + 1)

  return (
    <Box
      sx={{ margin: '2em', display: 'flex', alignItems: 'centre', justifyContent: 'center', textAlign: 'center', flexWrap: 'wrap' }}
    >
      <main>
        <Box sx={{ marginTop: '2em', marginBottom: '3em', width: '100%', display: 'flex', alignItems: 'centre', justifyContent: 'center' }}>
          <Typography sx={{ alignSelf: 'center', fontSize: '4em' }} variant='h1'>{`Find Your Next Book under ${dynamicPageCount}00 pages!`}</Typography>
        </Box>
        <Typography sx={{ marginBottom: '1em', fontSize: '2em' }} variant='h3'>Uncover books in your favourite genre which are less than a certain number of pages</Typography>
        <Typography sx={{ marginBottom: '2em' }} variant='body1'>
          Discover books in your favourite genre which are a suitable length. Search through 100,000 books to find a book which suits your needs - filter by rating, genre and page count.
          The underlying data comes from a Goodreads <a href='https://www.kaggle.com/mdhamani/goodreads-books-100k'>dataset</a> that I found on Kaggle. This application allows you to get at the Goodreads data in a more user-friendly way.
          As great as Goodreads is, it does not support searching by genre and page count which can make finding a good book under a specific length challenging
        </Typography>

        <Typography sx={{ marginBottom: '2em' }} variant='body2'>
          <i>Romance novels under 200 pages</i><br/>
          <i>Find me a sci-fi book that I can read in under 10 hours</i><br/>
          <i>Help me find me a nice autobiography which is less than 600 pages </i><br/>
        </Typography>



        <Button href='/books' variant='contained' startIcon={<SearchIcon />}> Find Your Next Book</Button>
      </main>
    </Box>
  )
}
