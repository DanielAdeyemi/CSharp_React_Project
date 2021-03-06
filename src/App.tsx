import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import IndividualMovie from "./movies/IndividualMovie";
import { landingPageDTO, movieDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";
import Button from "./utils/Button";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexGenres from "./genres/IndexGenres";

function App() {
	const [movies, setMovies] = useState<landingPageDTO>({});

	useEffect(() => {
		return () => {
			const timerId = setTimeout(() => {
				setMovies({
					inTheaters: [
						{
							id: 1,
							title: "Hello",
							poster:
								"https://cdn.123telugu.com/content/wp-content/uploads/2017/12/hello-review.jpg",
						},
						{
							id: 2,
							title: "Hello 2",
							poster:
								"https://cdn.123telugu.com/content/wp-content/uploads/2017/12/hello-review.jpg",
						},
					],
					upcomingReleases: [
						{
							id: 4,
							title: "Hello3",
							poster:
								"https://www.thestatesman.com/wp-content/uploads/2019/01/Hello2.png",
						},
						{
							id: 3,
							title: "Hello4",
							poster:
								"https://www.thestatesman.com/wp-content/uploads/2019/01/Hello2.png",
						},
					],
				});
			}, 1500);
		};
	}, []);

	return (
		<BrowserRouter>
			<Menu />
			<div className="container">
				<Switch>
					<Route exact path="/">
						<h3>In Theaters: </h3>
						<MoviesList movies={movies.inTheaters} />
						<h3>Upcoming</h3>
						<MoviesList movies={movies.upcomingReleases} />
					</Route>
					<Route exact path="/genres">
						<IndexGenres />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
