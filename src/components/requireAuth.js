import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
	class AuthHOC extends Component {

		componentDidMount() {
			this.shouldNavAway();
		}

		componentDidUpdate() {
			this.shouldNavAway();
		}

		shouldNavAway() {
			if(!this.props.auth)
				this.props.history.push('/');
		}

		render() {
			return <ChildComponent {...this.props}/>
		}
	}

	function mapStateToProps(state) {
		return { auth: state.auth.authenticated };
	}

	return connect(mapStateToProps)(AuthHOC);
}