import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Movie = ({movie, id}) => {
    const [ like, setLike ] = useState(false);
    const baseUrl = 'https://image.tmdb.org/t/p/original';
	return (
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
				<p className=" whitespace-pre-wrap text-center text:md md:text-lg font-bold  ">{movie.title}</p>
				<p className="absolute md:top-6 md:left-6 top-4 left-4">{like ? <FaHeart /> : <FaRegHeart />}</p>
				<p className="absolute md:top-6 md:right-6 top-4 right-4">
					<Link to={`/details/${movie.id}`}>
						<p>info</p>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Movie;
