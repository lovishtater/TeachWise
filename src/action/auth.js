import { SIGNUP } from './action.types';

export const signup =
	({ name, email, password }) =>
	async (dispatch) => {
		try {
			console.log('data', name);
			// const response = await fetch('/api/signup', data);
			dispatch({
				type: SIGNUP,
				payload: name,
			});
		} catch (error) {
			console.log(error);
		}
	};
