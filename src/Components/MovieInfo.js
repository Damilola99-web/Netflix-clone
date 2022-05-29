import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function MovieInfo({}) {
	const baseUrl = 'https://image.tmdb.org/t/p/original';
	const [ movie, setMovie ] = useState([]);
	const [ similar, setSimilar ] = useState([]);
	const [ like, setLike ] = useState(false);
	const key = '806f3f28bfc3d6b91c342386046c3688';
	const { id } = useParams();
	console.log(similar);
	useEffect(() => {
		axios
			.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
			.then((res) => setMovie(res.data));
	}, []);
	useEffect(() => {
		axios
			.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US&page=1`)
			.then((res) => setSimilar(res.data.results));
	}, []);
	return (
		<div>
			{movie && (
				<div>
					<img
						className="w-full max-h-[450px] object-cover"
						src={`${baseUrl}/${movie.backdrop_path}`}
						alt={movie.title}
					/>
					<h1 className="text-3xl md:text-5xl text-white font-bold my-8 px-4">{movie.title}</h1>
					<p className=" text-white px-4 my-4">Release Date : {movie.release_date}</p>
					<p className=" text-white px-4 mb-8 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[45%] md:text-xl">
						{movie.overview}
					</p>
				</div>
			)}

			<p className=" px-4 my-8 text-white text-2xl font-bold md:text-3xl">Similar Movies:</p>
			{/* similar container */}
			<div className=" w-full items-center justify-center flex flex-wrap my-8">
				{similar.map((movie, id) => (
					<div
						key={movie.id}
						className="w-[180px] sm:w-[220px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 "
					>
						<img
							src={`${baseUrl}/${movie.backdrop_path}`}
							alt={movie.title}
							className="rounded-md w-full h-auto block"
						/>
						<div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 flex flex-col items-center px-4 justify-center hover:opacity-100 duration-300 text-white">
							<p className=" whitespace-pre-wrap text-center text:md md:text-lg font-bold  ">
								{movie.title}
							</p>
							<p className="absolute md:top-6 md:left-6 top-4 left-4">
								{like ? <FaHeart /> : <FaRegHeart />}
							</p>
							<p className="absolute md:top-6 md:right-6 top-4 right-4">
								<Link to={`/details/${movie.id}`}>
									<p>info</p>
								</Link>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
