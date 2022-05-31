import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// icons
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movie from './Movie';

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
						<Movie movie={movie} id={id} />
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
