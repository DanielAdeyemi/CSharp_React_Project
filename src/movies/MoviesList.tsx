import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";
import css from './MoviesList.module.css';

export default function MoviesList(props: moviesListProps) {
  return !props.movies ? (
      <h2>Loading...</h2>
    )
     : props.movies.length !== 0 ? (
    <div className={css.div}>
      {props.movies.map(movie => 
        <IndividualMovie {...movie} key={movie.id}/>
        )}
    </div>) : (<h2>
      There is no movies to display
    </h2>)
}

interface moviesListProps{
  movies?: movieDTO[];
}