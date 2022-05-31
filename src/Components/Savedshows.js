import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const [username, setUsername] = useState('')
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
      setUsername(doc.data()?.username);
    });
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
      try {
        const result = movies.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedShows: result
        })
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <>
      <h2 className='text-white font-bold xl md:text-2xl p-6 capitalize'>Shows for {username}</h2>
      <div className='relative flex items-center group p-6'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute text-black opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider'}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies && movies.map((item) => (
            <div
              key={item.id}
              className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
            >
              <img
                className='w-full h-auto block rounded'
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white flex items-center justify-center px-4'>
			  <p className=" whitespace-pre-wrap text-center text:md md:text-lg font-bold  ">{item?.title.slice(0,33)}</p>
                <p onClick={()=> deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
				<p className="absolute md:top-6 md:left-6 top-4 left-4">
					<Link to={`/details/${item.id}`}>
						<p>info</p>
					</Link>
				</p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white text-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;