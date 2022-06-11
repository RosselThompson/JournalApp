import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
	return (
		<>
			<h3 className='auth__title'>Register</h3>
			<form>
				<input
					className='auth__input'
					type='text'
					placeholder='Name'
					name='name'
				/>
				<input
					className='auth__input'
					autoComplete='off'
					type='text'
					placeholder='Email'
					name='email'
				/>
				<input
					className='auth__input'
					autoComplete='off'
					type='password'
					placeholder='Password'
					name='password'
				/>
				<input
					className='auth__input'
					autoComplete='off'
					type='password'
					placeholder='Confirm Password'
					name='confirm'
				/>

				<button
					className='btn btn-primary btn-block mb-5'
					disabled
					type='submit'
				>
					Register
				</button>
				<Link className='link' to='/auth/login'>
					Already register?
				</Link>
			</form>
		</>
	);
};
