import React from 'react';
import { Link } from 'react-router-dom';

const BackBtn = () => {
	return (
		<Link to='/' className='back_btn' title='back'>
			<i className='fas fa-chevron-left'></i>
		</Link>
	);
};
export default BackBtn;
