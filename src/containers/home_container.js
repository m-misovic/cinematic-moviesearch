import React, { Component } from 'react';

import { connect } from 'react-redux';
import { searchMovies, getAllMovies, storeQuery } from '../actions';
import { bindActionCreators } from 'redux';

import Search from '../components/search';
import ListOfMovies from '../components/listOfMovies';
import Loader from '../components/loader';

class HomeContainer extends Component {
	componentDidMount() {
		if (this.props.storedData.searchquery) {
			this.props.searchMovies(this.props.storedData.searchquery);
		} else {
			this.props.getAllMovies();
		}
	}

	handleSearch = e => {
		let value = e.target.value;
		this.props.storeQuery(value);
		if (value !== '') {
			this.props.searchMovies(value);
		} else {
			this.props.getAllMovies();
		}
	};

	render() {
		return (
			<div>
				<Search
					handleSearch={this.handleSearch}
					inputValue={this.props.storedData.searchquery ? this.props.storedData.searchquery : ''}
				/>
				{this.props.storedData.movielist ? (
					<ListOfMovies
						movielist={this.props.storedData.movielist}
						query={this.props.storedData.searchquery}
					/>
				) : (
					<Loader />
				)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		storedData: state.storedData
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchMovies, getAllMovies, storeQuery }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
