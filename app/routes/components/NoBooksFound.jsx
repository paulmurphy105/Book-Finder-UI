import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import SearchOff from '@mui/icons-material/SearchOff'

export default function NoBooksFound () {
  return (
    <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: '2em' }}>
      <Typography variant='h6' color='text.primary'>No results found</Typography>
      <SearchOff sx={{ fontSize: 100, color: 'text.primary' }} />
    </Box>
  )
}
