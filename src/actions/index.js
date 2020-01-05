import { AUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';
/*export const signup = ({ email, password }) => {
	// because redux-thunk middleware so we can return different value type from action creator
	return function(dispatch) { // automatically called with dispatch function

	}
	// return {
	// 	type: AUTH_USER,
	// 	payload: '101223145'
	// }
}*/

export const signup = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post('http://localhost:8080/signup', formProps);
		dispatch({ type: AUTH_USER, payload: response.data.token });
		localStorage.setItem('token', response.data.token);
		callback();
	} catch (e) {
		dispatch({ type: AUTH_ERROR, payload: 'Email is in use' })
	}
};


export const signin = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post('http://localhost:8080/signin', formProps);
		dispatch({ type: AUTH_USER, payload: response.data.token });
		localStorage.setItem('token', response.data.token);
		callback();
	} catch (e) {
		dispatch({ type: AUTH_ERROR, payload: 'Email / Password is Invalid' })
	}
};

export const signout = () => {
	localStorage.removeItem('token');

	return {
		type: AUTH_USER,
		payload: ''
	}
}