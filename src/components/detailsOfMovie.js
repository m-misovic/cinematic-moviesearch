import React from 'react';
import img from '../images/tmdb-2.png';
import { CircleProgress } from 'react-gradient-progress';
import BackBtn from './backbtn';

const DetailsOfMovie = props => {
	return (
		<div className='movie-details'>
			<BackBtn />
			<div className='movie-info'>
				<div className='movie-info-header'>
					{props.moviedetails.title} ({props.moviedetails.release_date.substring(0, 4)})
					<a
						title='IMDB'
						href={'https://www.imdb.com/title/' + props.moviedetails.imdb_id}
						target='_blank'
						rel='noopener noreferrer'>
						<i className='fab fa-imdb'></i>
					</a>
				</div>
				<div className='movie-info-body'>
					<div className='poster_div'>
						<img
							src={
								props.moviedetails.poster_path
									? 'https://image.tmdb.org/t/p/w500/' + props.moviedetails.poster_path
									: 'http://www.softtual.com/public/front/images/noposter.jpg'
							}
							alt={props.moviedetails.title}></img>
					</div>

					<div className='movie-info-part'>
						{props.moviedetails.tagline ? (
							<React.Fragment>
								<h3>Tagline</h3>
								<p>{props.moviedetails.tagline}</p>
							</React.Fragment>
						) : null}
						<h3>Overview</h3>
						<p>{props.moviedetails.overview}</p>
						<h3>User score</h3>
						<CircleProgress
							percentage={props.moviedetails.vote_average * 10}
							strokeWidth={2}
							secondaryColor='#f0f0f0'
							width={60}
							fontSize='17px'
						/>
						<img src={img} alt='tmdb'></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailsOfMovie;
