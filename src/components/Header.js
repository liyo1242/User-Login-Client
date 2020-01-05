import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {

	renderLinks() {
		if (this.props.authenticated) {
			return (
				<div>
					<Link to="/signout">Sign Out</Link>
					<Link to="/feature">Feature</Link>
				</div>
			)
		} else {
			return (
				<div>
					<Link to="/signin">Sign in</Link>
					<Link to="/signup">Sign up</Link>
				</div>
			)
		}
	}

	render() {
		return (
			<div className="header">
				<Link to="/">HOME</Link>
				{this.renderLinks()}				
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Header);