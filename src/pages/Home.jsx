import React from 'react';
import Main from '../Components/Main';
import MovieSlide from '../Components/MovieSlide';
import requests from '../Request';
export default function Home() {
  return (
    <div>
      <Main />
      <MovieSlide rowId='1' title='Up Coming'  fetchUrl={requests.requestUpcoming}/>
      <MovieSlide rowId='2' title='Popular'  fetchUrl={requests.requestPopular}/>
      <MovieSlide rowId='3' title='Trending'  fetchUrl={requests.requestTrending}/>
      <MovieSlide rowId='4' title='Top Rated'  fetchUrl={requests.requestTopRated}/>
      <MovieSlide rowId='5' title='Nowplaying'  fetchUrl={requests.requestNowPlaying}/>
    </div>
  );
}
