import { fetchMoviesByName } from '../api/fetchApi';
import SearchBar from '../components/SearchForm/SearchForm';
import MoviesCard from '../components/TrendingList/TrendingList';
import { ITrendingListProps } from '../components/TrendingList/TrendingList';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Movies {
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export default function Projects() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') ?? '';

  const [movies, setMovies] = useState<ITrendingListProps[] | null>(null);

  useEffect(() => {
    if (query !== '') {
      fetchMoviesByName(query).then(({ results }: { results: Movies[] }) => {
        const moviesArr: ITrendingListProps[] = results.map(
          ({ id, original_title, poster_path, vote_average, vote_count }) => ({
            id,
            title: original_title,
            poster: poster_path,
            voteAverage: vote_average,
            voteCount: vote_count,
          }),
        );

        setMovies(moviesArr);
      });
    }
  }, [query]);

  return (
    <>
      <SearchBar />
      {movies && (
        <div>
          <MoviesCard movies={movies} />
        </div>
      )}
    </>
  );
}
