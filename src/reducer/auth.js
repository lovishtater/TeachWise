import { SIGNUP } from '../action/action.types';

const initialState = [];

export default (state = initialState, action) => {
	switch (action.type) {
		case SIGNUP:
			return [...state, action.payload];

		default:
			return state;
	}
};
