import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// requests

import requests from '../Request';

const baseUrl = 'https://image.tmdb.org/t/p/original';

const breakSrting = (str, num) => {
	if (str.length > num) {
		return str.slice(0, num) + '...';
	}
	else {
		return str;
	}
};

const Main = () => {
	const [ movies, setMovies ] = useState([]);
	const movie = movies[Math.floor(Math.random() * movies.length)];

	useEffect(() => {
		axios.get(requests.requestPopular).then((res) => setMovies(res.data.results));
	}, []);
	console.log(movie);
	return (
		<div className="w-full h-[550px] text-white">
			{movie && (
				<div className="w-full h-full">
					<div className=" absolute w-full h-[550px] bg-gradient-to-r from-black" />
					{movie && (
						<img
							className="w-full h-full object-cover"
							src={`${baseUrl}/${movie.backdrop_path}`}
							alt={movie.title}
						/>
					)}
					<div className="w-full absolute top-[20%] p-6 md:p-10">
						<h1 className="text-3xl md:text-5xl font-bold">{movie.title}</h1>
						<div className="my-5">
							<button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 rounded-sm">
								Play
							</button>
							<Link to={`/details/${movie.id}`}>
								<button className="border bg-black text-white border-gray-300 py-2 px-5 ml-4 rounded-sm">
									More info
								</button>
							</Link>
						</div>
						<p className="text-gray-400 text-md">Released: {movie.release_date}</p>
						<p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mt-2">
							{breakSrting(movie.overview, 150)}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Main;
