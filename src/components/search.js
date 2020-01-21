import React from 'react';
import img from '../images/tmdb.png';
import { Link } from 'react-router-dom';

const Search = props => {
	return (
		<div className='search_container'>
			<div className='search-item'>
				<h2>Movie search</h2>
			</div>
			<div className='search-item'>
				<input
					placeholder='search...'
					type='search'
					onChange={props.handleSearch}
					value={props.inputValue}
				/>
			</div>
			<div className='search-item'>
				<img src={img} alt='tmdb'></img>
			</div>
			<Link to='/about' className='about_btn'>
				<i className='fas fa-info-circle'></i>
			</Link>
		</div>
	);
};

export default Search;
