import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

export default function NoBooksFound() {
    return (
        <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: '2em' }}>
            <Typography variant="h6" color="text.secondary" >No results found :( </Typography>
            <img style={{ width: '200px', height: '200px' }} src="https://cdn-icons.flaticon.com/png/512/5326/premium/5326093.png?token=exp=1640746979~hmac=3c300ac1b4dfe2b9ba9836ec20e63eb8" alt="no books found logo" />
        </Box>
    )

}