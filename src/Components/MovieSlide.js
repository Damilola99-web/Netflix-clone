import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// icons
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export default function MovieSlide({ title, fetchUrl, rowId }) {
	const [ like, setLike ] = useState(false);
	const baseUrl = 'https://image.tmdb.org/t/p/original';
	const [ movieData, setMovieData ] = useState([]);
	const slideLeft = () => {
		var slider = document.getElementById('slider' + rowId);
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const slideRight = () => {
		var slider = document.getElementById('slider' + rowId);
		slider.scrollLeft = slider.scrollLeft + 500;
	};
	useEffect(
		() => {
			axios.get(fetchUrl).then((res) => setMovieData(res.data.results));
		},
		[ fetchUrl ]
	);
	return (
		<div className=" my-3">
			<h2 className="text-white font-bold md:text-xl text-md px-6 md:px-10 py-4">{title}</h2>
			<div className=" relative flex items-center group">
				<MdChevronLeft
					onClick={slideLeft}
					className=" bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 duration-500 group-hover:block cursor-pointer z-10 hidden"
					size={40}
				/>
				<div
					id={'slider' + rowId}
					className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
				>
					{movieData.map((movie, id) => (
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
				<MdChevronRight
					onClick={slideRight}
					className=" bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 duration-500 cursor-pointer z-10 hidden group-hover:block"
					size={40}
				/>
			</div>
		</div>
	);
}
