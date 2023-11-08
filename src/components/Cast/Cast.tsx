import { fetchMoviesCast } from '../../api/fetchApi';
import { ActorListUl, ActorListLi, ActorListTitleP } from './Cast.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';

interface Actor {
  id: number;
  name: string;
  photo: string;
}

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState<Actor[] | null>(null);

  useEffect(() => {
    if (movieId) {
      // Проверка на undefined
      fetchMoviesCast(movieId).then(data => {
        if (Array.isArray(data.cast)) {
          const actorsArr: Actor[] = data.cast.map(
            ({ id, name, profile_path }) => ({
              id,
              name,
              photo: profile_path,
            }),
          );

          setActors(actorsArr);
        }
      });
    }
  }, [movieId]);

  return (
    actors && (
      <div>
        <ActorListUl>
          {actors.map(({ id, name, photo }) => (
            <ActorListLi key={id}>
              <div>
                <img src={`${imgBaseUrl}${photo}`} alt={name} />
              </div>
              <ActorListTitleP>{name}</ActorListTitleP>
            </ActorListLi>
          ))}
        </ActorListUl>
      </div>
    )
  );
}
