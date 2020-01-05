import React from 'react';
import Header from './Header';
import './App.css';

export default ({ children }) => {
	return (
		<div className="App">
			<Header />
			<div className="box">
				{ children }
			</div>
		</div>)
}