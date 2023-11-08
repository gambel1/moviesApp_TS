import axios from 'axios';

interface ActorCast {
  id: number;
  name: string;
  profile_path: string;
}

interface FetchMoviesCast {
  cast: ActorCast[];
}

interface ActorReview {
  id: string;
  author: string;
  content: string;
}

interface FetchMoviesReviews {
  results: ActorReview[];
}

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '3ed700b5d7b679b57b749969c057aea5';

export const fetchTrendMovies = async () => {
  return await axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(response => response.data);
};

export const fetchMoviesByName = async (name: string) => {
  return await axios
    .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${name}`)
    .then(response => response.data);
};

export const fetchMoviesDetail = async (id: string) => {
  return await axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

export const fetchMoviesCast = async (id: string): Promise<FetchMoviesCast> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`,
    );
    return response.data as FetchMoviesCast;
  } catch (error) {
    throw new Error('Failed to retrieve data');
  }
};

export const fetchMoviesReviews = async (
  id: string,
): Promise<FetchMoviesReviews> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`,
    );
    return response.data as FetchMoviesReviews;
  } catch (error) {
    throw new Error('Failed to retrieve data');
  }
};
