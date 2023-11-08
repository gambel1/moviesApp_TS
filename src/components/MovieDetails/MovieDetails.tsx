import {
  ListButton,
  ListWrapDiv,
  ListH2,
  ListLi,
  ListTitleGenreH4,
  ListTitleGenreP,
  ListDescriptionDiv,
  ListTitleDescriptionH4,
  ListDescriptionTitleP,
  ListRatingBoxUl,
  ListRatingBoxLi,
  ListRatingBoxSecondaryLi,
  ListRatingTitleH4,
  ListRatingP,
  AdditionalListH3,
  AdditionalListLi,
  ListLink,
} from './MovieDetails.styled';

import { useLocation, useNavigate } from 'react-router-dom';
import { Typography } from 'antd';

interface IMovieDetailsProps {
  title: string;
  genres: { name: string; id: number }[];
  description: string;
  poster: string;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
}

const { Text } = Typography;

export default function MovieDetails({
  movieInfo
}: {
  movieInfo: IMovieDetailsProps;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const subLocation = location.state?.from;
  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

  const {
    title,
    genres,
    description,
    poster,
    releaseDate,
    voteAverage,
    voteCount,
  } = movieInfo;

  const back = () => navigate(location?.state?.from ?? '/');

  return (
    <div>
      <ListButton onClick={back}>Go back</ListButton>

      <ListWrapDiv>
        <img src={`${imgBaseUrl}${poster}`} alt={title} />
        <div>
          <div>
            <ListH2>{title}</ListH2>
            <Text keyboard>{releaseDate}</Text>
          </div>
          <ul>
            <ListLi>
              <ListTitleGenreH4>Genre:</ListTitleGenreH4>
              {genres &&
                genres.map(({ name, id }) => (
                  <ListTitleGenreP key={id}>{name}</ListTitleGenreP>
                ))}
            </ListLi>
          </ul>
          <ListDescriptionDiv>
            <ListTitleDescriptionH4>Descriptions:</ListTitleDescriptionH4>
            <ListDescriptionTitleP> {description}</ListDescriptionTitleP>
          </ListDescriptionDiv>
          <ListRatingBoxUl>
            <ListRatingBoxLi>
              <ListRatingTitleH4>Vote average:</ListRatingTitleH4>
              <ListRatingP>{voteAverage}</ListRatingP>
            </ListRatingBoxLi>
            <ListRatingBoxSecondaryLi>
              <ListRatingTitleH4>Vote count:</ListRatingTitleH4>
              <ListRatingP>{voteCount}</ListRatingP>
            </ListRatingBoxSecondaryLi>
          </ListRatingBoxUl>

          <div>
            <AdditionalListH3>Additional Information</AdditionalListH3>
            <ul>
              <AdditionalListLi>
                <ListLink to="cast" state={{ from: subLocation }}>
                  Cast
                </ListLink>
              </AdditionalListLi>
              <li>
                <ListLink to="reviews" state={{ from: subLocation }}>
                  Reviews
                </ListLink>
              </li>
            </ul>
          </div>
        </div>
      </ListWrapDiv>
    </div>
  );
}
