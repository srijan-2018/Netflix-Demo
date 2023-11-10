import React, { useState } from 'react';
import Header from './Header';

const SignIn = () => {
	const [isSignInForm, setIsSignInForm] = useState();

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div>
			<Header />
			<div className='absolute'>
				<img
					src='https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg'
					alt='logo'
				/>
			</div>
			<form className='absolute p-12 bg-black w-3/12 my-48 mx-auto right-0 left-0 rounded-lg bg-opacity-80 text-white'>
				<h1 className='font-bold font-3xl py-4 '>
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</h1>
				<input
					type='email'
					placeholder='Email Address'
					className='py-2 px-2 my-2 w-full bg-gray-700'
				/>
				{!isSignInForm && (
					<input
						type='text'
						placeholder='Enter Full Name'
						className='py-2 px-2  my-2 w-full bg-gray-700'
					/>
				)}
				<input
					type='password'
					placeholder='Password'
					className='py-2 px-2  my-2 w-full bg-gray-700'
				/>
				<button className='p-3 my-6 bg-red-700 w-full rounded-md'>
					{isSignInForm ? 'Sign In' : 'Sign Up'}
				</button>
				<p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
					{isSignInForm
						? 'Hew to Netflix? Sign Up Now'
						: 'Already regidtered? Sign In Now'}
				</p>
			</form>
		</div>
	);
};

export default SignIn;
