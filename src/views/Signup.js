import React, { useState } from 'react';
import { signup } from '../action/auth';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

const Signup = () => {
	const [name, setName] = useState('manish');
	const [email, setEmail] = useState('mam@gmail.com ');
	const [password, setPassword] = useState('ljseh');

	const handleSubmit = (e) => {
		// e.preventDefault();
		console.log('signup');
		signup({ name, email, password });
	};

	return (
		<button
			onClick={() => {
				handleSubmit();
			}}>
			Signup
		</button>
	);
};

const mapDispatchToProps = {
	signup: (data) => signup(data),
};

Signup.propTypes = {
	signup: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Signup);
// export default connect(null, mapDispatchToProps)(Add);
