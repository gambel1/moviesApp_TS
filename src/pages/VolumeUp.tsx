import { useState, useEffect } from 'react';
import TrendingList from '../components/TrendingList/TrendingList';
import { fetchTrendMovies } from '../api/fetchApi';
import { ITrendingListProps } from '../components/TrendingList/TrendingList';

interface HomePage {
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export default function VolumeUp() {
  const [movies, setMovies] = useState<ITrendingListProps[] | null>(null);

  useEffect(() => {
    fetchTrendMovies().then(({ results }: { results: HomePage[] }) => {
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
  }, []);

  return (
    movies && (
      <div>
        <TrendingList movies={movies} />
      </div>
    )
  );
}
