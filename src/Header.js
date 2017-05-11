import React from 'react';
import './Header.css';

const Header = () => (
	<header>
		<div className="container">
			<a href="/" className="logo">React Demo</a>
			<a href="/home" className="nav-link">Home</a>
			<a href="/todos" className="nav-link">Todo App</a>
		</div>
	</header>
)

export default Header
