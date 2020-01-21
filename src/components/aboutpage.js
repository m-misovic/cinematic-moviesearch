import React from 'react';
import './aboutpage.css';
import BackBtn from './backbtn';

const AboutPage = () => {
	return (
		<div className='about_page'>
			<BackBtn />
			<div className='info-div'>
				<div className='explanation-div'>
					<p>
						A small Movie Search project built with Redux and React. As a data source I used Movie
						Database (TMDb) API.
					</p>
					<br></br>
					<p></p>
				</div>
				<div className='social-media_div'>
					<a
						href='https://github.com/m-misovic'
						target='_blank'
						rel='noopener noreferrer'
						title='GitHub'>
						<i className='fab fa-github'></i>
					</a>
					<a
						href='https://www.facebook.com/miljan.misovic'
						target='_blank'
						rel='noopener noreferrer'
						title='Facebook'>
						<i className='fab fa-facebook-square'></i>
					</a>
					<a
						href='https://www.instagram.com/__miljan__/'
						target='_blank'
						rel='noopener noreferrer'
						title='Instagram'>
						<i className='fab fa-instagram'></i>
					</a>
					<a
						href='mailto:mmiljan@hotmail.com'
						rel='noopener noreferrer'
						title='mmiljan@hotmail.com'>
						<i className='fas fa-envelope'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
