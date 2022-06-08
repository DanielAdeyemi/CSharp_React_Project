import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { movieDTO } from './movies/movies.model';
import MoviesList from './movies/MoviesList';

function App() {
  const inTheaters:movieDTO[] = [{
    id: 1,
    title: 'Hello',
    poster: 'https://cdn.123telugu.com/content/wp-content/uploads/2017/12/hello-review.jpg'
  },
{
    id: 2,
    title: 'Hello 2',
    poster: 'https://cdn.123telugu.com/content/wp-content/uploads/2017/12/hello-review.jpg'
  }];

  const upcomingReleases: movieDTO[] = [{id: 1,
    title: 'Hello3',
    poster: 'https://www.thestatesman.com/wp-content/uploads/2019/01/Hello2.png'}, {id: 1,
    title: 'Hello4',
    poster: 'https://www.thestatesman.com/wp-content/uploads/2019/01/Hello2.png'}]

  return (
    <>
      <h3>In Theaters: </h3>
      <MoviesList movies={inTheaters}/>
      <h3>Upcoming</h3>
      <MoviesList movies={upcomingReleases} />
    </>
  );
}

export default App;
