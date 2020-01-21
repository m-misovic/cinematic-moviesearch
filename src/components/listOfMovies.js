import React from 'react';
import { Link } from 'react-router-dom';

const ListOfMovies = props => {
	return props.movielist.results.length !== 0 ? (
		<div className='results_container'>
			{props.movielist.results.map(result => (
				<Link to={`/movie/${result.id}`} key={result.id} className='movie_div'>
					<img
						src={
							result.poster_path
								? 'https://image.tmdb.org/t/p/w200/' + result.poster_path
								: 'https://www.softtual.com/public/front/images/noposter.jpg'
						}
						alt={result.title}></img>
				</Link>
			))}
		</div>
	) : (
		<div className='no-result_div'>
			<div>No results found for</div>
			<div>"{props.query}"</div>
		</div>
	);
};

export default ListOfMovies;
