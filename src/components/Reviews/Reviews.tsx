import {
  ListReviewsUl,
  ListReviewsAuthorH4,
  ListReviewsDescriptionP,
  NotFoundReviewsH2,
} from './Reviews.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from '../../api/fetchApi';

interface Reviews {
  id: string;
  author: string;
  text: string;
}

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState<Reviews[] | null>(null);

  useEffect(() => {
    if (movieId) {
      fetchMoviesReviews(movieId).then(({ results }) => {
        const reviewsArr: Reviews[] = results.map(
          ({ id, author, content }) => ({
            id,
            author,
            text: content,
          }),
        );

        setReviews(reviewsArr);
      });
    }
  }, [movieId]);

  return reviews && reviews.length > 0 ? (
    <div>
      <ListReviewsUl>
        {reviews.map(({ id, author, text }) => {
          return (
            <li key={id}>
              <ListReviewsAuthorH4>{author}</ListReviewsAuthorH4>
              <ListReviewsDescriptionP>{text}</ListReviewsDescriptionP>
            </li>
          );
        })}
      </ListReviewsUl>
    </div>
  ) : (
    <div>
      <NotFoundReviewsH2>
        We don't have any reviews for this movie.
      </NotFoundReviewsH2>
    </div>
  );
}
