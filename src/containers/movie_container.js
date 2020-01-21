import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getMovieDetails, clearMovieDetails } from '../actions';
import { bindActionCreators } from 'redux';

import DetailsOfMovie from '../components/detailsOfMovie';
import Loader from '../components/loader';

class MovieContainer extends Component {
	componentDidMount() {
		this.props.getMovieDetails(this.props.match.params.id);
	}

	componentWillUnmount() {
		this.props.clearMovieDetails();
	}

	render() {
		return this.props.storedData.moviedetails ? (
			<DetailsOfMovie moviedetails={this.props.storedData.moviedetails} />
		) : (
			<Loader />
		);
	}
}

function mapStateToProps(state) {
	return {
		storedData: state.storedData
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getMovieDetails, clearMovieDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
