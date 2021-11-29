import { SIGNUP } from './action.types';

export const signup = (data) => async (dispatch) => {
	try {
		console.log('data', data);
		// const response = await fetch('/api/signup', data);
		dispatch({
			type: SIGNUP,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};
