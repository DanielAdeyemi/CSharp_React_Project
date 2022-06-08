import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { movieDTO } from './movies/movies.model';

function App() {
  const testMovie:movieDTO = {
    id: 1,
    title: 'Hello',
    poster: 'https://cdn.123telugu.com/content/wp-content/uploads/2017/12/hello-review.jpg'
  }
  return (
    <>
      <IndividualMovie {... testMovie}/>
    </>
  );
}

export default App;
