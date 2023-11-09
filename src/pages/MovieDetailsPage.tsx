import MovieDetails from '../components/MovieDetails/MovieDetails';
import { fetchMoviesDetail } from '../api/fetchApi';

import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Routes, Route } from 'react-router-dom';

const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reevaluation/Reevaluation'));

interface MovieDetailsPage {
  title: string;
  genres: { name: string; id: number }[];
  description: string;
  poster: string;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
}

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState<MovieDetailsPage | null>(null);

  useEffect(() => {
    if (movieId) {
      fetchMoviesDetail(movieId).then(
        ({
          original_title,
          genres,
          overview,
          poster_path,
          release_date,
          vote_average,
          vote_count,
        }) => {
          const movieInfo: MovieDetailsPage = {
            title: original_title,
            genres: genres,
            description: overview,
            poster: poster_path,
            releaseDate: release_date,
            voteAverage: vote_average,
            voteCount: vote_count,
          };

          return setMovieInfo(movieInfo);
        },
      );
    }
  }, [movieId]);

  return (
    <>
      {movieInfo && <MovieDetails movieInfo={movieInfo} />}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
}
