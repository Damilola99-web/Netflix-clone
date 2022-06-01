import axios from 'axios';
import Movie from '../Components/Movie';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {
	const key = '806f3f28bfc3d6b91c342386046c3688';
	const { query } = useParams();
	const [ results, setresults ] = useState([]);
	const [ isloading, setIsLoading ] = useState(false);
	useEffect(() => {
		setIsLoading(true);
		axios
			.get(
				`https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${query}&language=en-US&page=1&include_adult=false`
			)
			.then((res) => setresults(res.data.results));
	}, []);
	return (
		<div className=" top-20 absolute">
			<p className="ml-6 md:ml-12 my-8 text-white text-2xl font-bold md:text-3xl">
				Search results including: {query}
			</p>
			<p className="ml-6 md:ml-12 my-8 text-white text-lg md:text-xl">Please be patient while loading movies...</p>
			<div className=" w-full items-center justify-center flex flex-wrap my-8">
				{results && results.map((movie, id) => <Movie movie={movie} id={id} />)}
			</div>
		</div>
	);
};

export default Search;
