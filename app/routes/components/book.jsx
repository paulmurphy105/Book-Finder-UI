import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GradeIcon from '@mui/icons-material/Grade';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Chip from '@mui/material/Chip';
import { blue, yellow } from '@mui/material/colors';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const GenreChips = ({ genreList }) => genreList.map(genre => <Chip sx={{ margin: 1 }} label={genre} size="small" />)

export default function Book({ book }) {
    const [expanded, setExpanded] = React.useState({});

    const handleExpandClick = (e, bookId) => {
        e.preventDefault();

        setExpanded({ ...expanded, [bookId]: !expanded[bookId] });
    };

    return (
        <Card key={book.bookId} sx={{ maxWidth: 400, minWidth: 200, marginBottom: '3em' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', flexWrap: 'wrap', justifyContent: 'center' }}>
                <CardHeader
                    title={book.title.length > 50 ? `${book.title.substring(0, 50)}...` : book.title}
                    subheader={book.authorlist}
                    sx={{ textAlign: 'center' }}
                />
                <CardMedia
                    component="img"
                    image={book.image_link}
                    alt={`${book.title}-card-img`}
                    sx={{ height: 250, width: 150 }}
                />
            </Box>
            <CardContent>

                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                    <GenreChips genreList={book.genrelist.split(',') || []} />
                </Box>

                <Button href="" onClick={(e) => handleExpandClick(e, book.bookId)} sx={{ textTransform: 'none' }}>
                    <Typography textAlign="left" variant="body2" color="text.secondary">
                        {`${book.description.substring(0, 180)}...`}
                    </Typography>
                </Button>
            </CardContent>
            <CardActions disableSpacing>
                <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
                    <nav aria-label="main mailbox folders">
                        <List sx={{ margainBottom: 10 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <ListItem disablePadding>
                                    <ListItem>
                                        <ListItemIcon>
                                            <GradeIcon sx={{ color: yellow[500] }} />
                                        </ListItemIcon>
                                        <ListItemText primary={`${book.rating} (${book.total_ratings})`} />
                                    </ListItem>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItem>
                                        <ListItemIcon>
                                            <MenuBookIcon sx={{ color: blue[500] }} />
                                        </ListItemIcon>
                                        <ListItemText primary={book.pages} />
                                    </ListItem>
                                </ListItem>
                            </Box >
                            <ListItem disablePadding>
                                <ExpandMore
                                    expand={expanded[book.bookId]}
                                    onClick={(e) => handleExpandClick(e, book.bookId)}
                                    aria-expanded={expanded[book.bookId]}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </ListItem>
                        </List>
                    </nav>
                </Box>
            </CardActions>
            <Collapse in={expanded[book.bookId]} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h6" textAlign="center">
                        {book.title}
                    </Typography>
                    <Typography variant="subtitle1" textAlign="center" color="darkgrey">
                        {book.authorlist}
                    </Typography>
                    <Typography variant="body2" sx={{ padding: '1em' }}>
                        {book.description}
                    </Typography>

                    <Link
                        target="_blank"
                        rel="noopener noreferer"
                        sx={{ margin: '1em', display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', verticalAlign: 'middle', padding: '5px' }}
                        href={book.link}>
                        <img src="https://s.gr-assets.com/images/icons/goodreads_icon_32x32.png" />
                        <span style={{ marginLeft: '5px' }}>View on goodreads</span>
                    </Link>
                </CardContent>
            </Collapse>
        </Card>
    )
}
