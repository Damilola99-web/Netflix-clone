const key = '806f3f28bfc3d6b91c342386046c3688';

const requests = {
	requestPopular    : `
    https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
	requestTopRated   : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
	requestTrending   : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
	requestNowPlaying : `
	https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
	requestUpcoming   : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
};

export default requests;
