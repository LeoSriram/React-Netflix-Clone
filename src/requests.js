const API_KEY = "04c4cc5987aceea1236269b22e2e55c6";

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
};

export default requests;
