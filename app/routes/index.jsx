import * as React from 'react'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { recordVisit } from '../utils/analytics'

export function links() {
  return [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  ]
}

export const meta = () => {
  return {
    title: 'Find your next book under 100, 200, 300, 400 pages</i><br/>',
    description: 'Find the next book by specifying genre, page count, book length and rating'
  }
}

export const loader = async ({ request }) => {
  recordVisit(request) 

  return null;
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

        <Typography sx={{ marginBottom: '1em', fontSize: '2em' }} variant='h4'>This site aims to help people who perform the following searches</Typography>
 

        <Typography sx={{ marginBottom: '2em' }} variant='body2'>
          <i>Romance novels under 200 pages</i><br/>
          <i>Find me a sci-fi book that I can read in under 10 hours</i><br/>
          <i>Help me find me a nice autobiography which is less than 600 pages </i><br/>
          <i>Books under 200 pages</i><br/>
          <i>Books less than 200 pages</i><br/>
          <i>Classic books under 200 pages</i><br/>
          <i>Fiction book less than 200 pages</i><br/>
          <i>Best books under 200 pages</i><br/>
          <i>Best novels under 100 pages</i><br/>
          <i>Book club books under 200 pages</i><br/>
          <i>Good books under 200 pages</i><br/>
          <i>Best selling books under 100 pages</i><br/>
          <i>Books to read under 100 pages</i><br/>
          <i>Book 200 pages</i><br/>
          <i>Books that are 200 pages</i><br/>
          <i>A classic book with less than 200 pages</i><br/>
          <i>Under 200 page books</i><br/>
          <i>Books with less than 50 pages</i><br/>
          <i>Books that are less than 100 pages</i><br/>
          <i>Classic books over 200 pages</i><br/>
          <i>Best fiction books under 100 pages</i><br/>
          <i>Classic literature under 200 pages</i><br/>
          <i>50 classic novels under 200 pages</i><br/>
          <i>Best classic books under 200 pages</i><br/>
          <i>Non fiction books less than 200 pages</i><br/>
          <i>Science fiction books less than 200 pages</i><br/>
          <i>Fiction books under 200 pages</i><br/>
          <i>Best non fiction books under 200 pages</i><br/>
          <i>Best nonfiction books under 300 pages</i><br/>
          <i>Bonfiction books under 100 pages</i><br/>
          <i>Best books under 200 pages</i><br/>
          <i>Best novels under 200 pages</i><br/>
          <i>Best books less than 200 pages</i><br/>
          <i>Best books below 200 pages</i><br/>
          <i>Best novels under 200 pages</i><br/>
          <i>Best business books under 200 pages</i><br/>
          <i>Business books under 100 pages</i><br/>
          <i>Best contemporary novels under 200 pages</i><br/>
          <i>Best fiction books under 200 pages</i><br/>
          <i>Best fantasy books under 200 pages</i><br/>
          <i>Best sci fi books under 200 pages</i><br/>
          <i>Best horror books under 200 pages</i><br/>
          <i>Best history books under 400 pages</i><br/>
          <i>Best self help books under 400 pages</i><br/>
          <i>Best mystery books under 400 pages</i><br/>
          <i>Best nonfiction books under 400 pages</i><br/>
          <i>Best new books under 200 pages</i><br/>
          <i>Best books 200 pages</i><br/>
          <i>Best books to read under 200 pages</i><br/>
          <i>Best short books under 200 pages</i><br/>
          <i>Best selling books under 200 pages</i><br/>
          <i>Best short novels under 200 pages</i><br/>
          <i>Best short novels under 100 pages</i><br/>
          <i>Best thriller books under 200 pages</i><br/>
          <i>Best books under 100 pages</i><br/>
          <i>Best ya books under 200 pages</i><br/>
          <i>Best books under 100 pages</i><br/>
          <i>Best nonfiction books under 100 pages</i><br/>
          <i>Best business books under 300 pages</i><br/>
          <i>Best seller books under 300 pages</i><br/>
          <i>Best classic books under 300 pages</i><br/>
          <i>Classic books under 300 pages</i><br/>
          <i>Best books 200 pages</i><br/> or less
          <i>Short novels under 200 pages</i><br/>
          <i>Famous books under 200 pages</i><br/>
          <i>Good books less than 200 pages</i><br/>
          <i>Good books around 600 pages</i><br/>
          <i>Good novels under 600 pages</i><br/>
          <i>Good fiction books around 600 pages</i><br/>
          <i>Good non-fiction books under 600 pages</i><br/>
          <i>Good books for 6th graders under 600 pages</i><br/>
          <i>Good books 200 pages</i><br/> or less
          <i>Good books to read under 200 pages</i><br/>
          <i>Good books with less than 200 pages</i><br/>

        </Typography>



        <Button href='/books' variant='contained' startIcon={<SearchIcon />}> Find Your Next Book</Button>
      </main>
    </Box>
  )
}
