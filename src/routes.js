import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/homepage';
import MoviePage from './components/moviepage';
import AboutPage from './components/aboutpage';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' exact component={HomePage} />
			<Route path='/movie/:id' exact component={MoviePage} />
			<Route path='/about' exact component={AboutPage} />
		</Switch>
	);
};

export default Routes;
