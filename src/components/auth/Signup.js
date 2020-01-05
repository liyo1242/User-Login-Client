import React, { Component } from 'react';
import  { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './Auth.css';

class Signup extends Component {

	onSubmit = (formProps) => {
		this.props.signup(formProps, () => {
			this.props.history.push('/feature');
		});
	};

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<fieldset className="inputBox">					
					<Field name="email" type="text" component="input" autoComplete="none"/>
					<label>Email</label>
				</fieldset>
				<fieldset className="inputBox">					
					<Field name="password" type="password" component="input" autoComplete="none"/>
					<label>Password</label>
				</fieldset>
				<button className="submitBtn">Sign up!</button>
				<div>{this.props.errorMessage}</div>
			</form>
		)
	}
}

function MapStateToProps(state) {
	return { errorMessage: state.auth.errorMessage}
}

export default compose(
	connect(MapStateToProps, actions),
	reduxForm({ form: 'signup' })
)(Signup);