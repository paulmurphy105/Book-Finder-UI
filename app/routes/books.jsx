import { useLoaderData, useSearchParams } from "remix";
import * as React from 'react';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Link from '@mui/material/Link';
import NavigateNext from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Search from './components/search'
import Book from './components/book'
import { getNextUrl } from '../utils/books'

export let loader = async ({ request }) => {
	let url = new URL(request.url);
	let genreIds = url.searchParams.get("genreIds");
	let minPages = url.searchParams.get("minPages");
	let maxPages = url.searchParams.get("maxPages");
	let minRating = url.searchParams.get("minRating");
	let limit = url.searchParams.get("limit");
	let offset = url.searchParams.get("offset");

	let books
	if (genreIds && genreIds !== null) {
		try {
			books = await fetch(`${process.env.BACKEND_URL}books?genreIds=${genreIds}&minPages=${minPages}&maxPages=${maxPages}&minRating=${minRating}&limit=${limit}&offset=${offset}`)
			.then((response) => {
				return response.json();
			})
		} catch (error) {
			console.log('Fetch failed')
			console.error(error)
		}


	}
				
	const genres = require('../@data/mocks/genres.json')

	return { books, genres }
};

export function links() {
	return [
		{ rel: "stylesheet", href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' },
		{ rel: "stylesheet", href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
	];
}

export let meta = () => {
	return {
		title: "Find your next book!",
		description: "Find the next book by specifying genre, page count, length and rating"
	};
};

export default function Books() {
	const [searchParams] = useSearchParams();
	const data = useLoaderData();
	const [searchBarVisible, setSearchBarVisible] = React.useState(!Array.isArray(data.books));
	const searchButtonRef = React.useRef()


	const handleSearchInputChange = () => {
		setSearchBarVisible((prev) => !prev);
	};
	
	const handleScrollTop = () => {
		if (searchButtonRef.current) {
			searchButtonRef.current.scrollIntoView({ behavior: "smooth" })
		}
	}

	const ScrollToTopButton = () => {
		if (Array.isArray(data.books)) {
			return (
				<Fab color="primary" aria-label="add" onClick={handleScrollTop} sx={{ margin: '0px', right: '20px', bottom: '20px', position: 'fixed' }}>
					<ArrowUpwardIcon />
				</Fab>	
			)
		}

		return null
	}

	const SearchButton = () => {
		if (data.books && data.books.length > 0) {
			return !searchBarVisible
				? <Button ref={searchButtonRef} variant="outlined" onClick={handleSearchInputChange} startIcon={<SearchIcon />}>Show Search Bar</Button>
				: <Button ref={searchButtonRef} variant="outlined" onClick={handleSearchInputChange} startIcon={<CloseIcon />}>Hide Search Bar</Button>
		}

		return null
	}

	const NextButton = () => {
		if (data && data.books && data.books.length > 0 && data.books.length === 20) {
			return (
				<Box sx={{ margin: 5, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Link
						sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}
						href={getNextUrl(searchParams)}>
						<span>More</span>
						<NavigateNext />
					</Link>
				</Box>
			)
		}

		return null
	}

	const BookList = () => {
		if (data.books && Array.isArray(data.books)) {
			return data.books.map((book) => <Book book={book} />)
		}
	
		return null
	}

	return (
		<Box
			sx={{ margin: '1em', display: 'flex', width: '100', flexDirection: 'column', alignItems: 'centre', alignContent: 'space-between', justifyContent: 'center' }}>
			<Collapse in={searchBarVisible}>
				<Search genreList={data.genres} />
			</Collapse>

			<SearchButton />

			<main>
				<Box sx={{ marginTop: '1em', marginBottom: '1em', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
					<BookList />
				</Box>

				<NextButton />
				<ScrollToTopButton />			
			</main>
		</Box>
	);
}
