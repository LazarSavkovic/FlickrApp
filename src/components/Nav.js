import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from './SearchForm';

const Nav = props => {
	const apiKey = process.env.REACT_APP_API_KEY;
	return (
	
  <header>
  	{ (props.location.pathname.startsWith('/search') )
  		? <SearchForm props={props} apiKey={apiKey} />
  		: <br /> }
	<nav className="main-nav">
	  <ul>
		<li><NavLink to='/search'>Search</NavLink></li>
		<li><NavLink to='/cats'>Cats</NavLink></li>
		<li><NavLink to='/dogs'>Dogs</NavLink></li>
		<li><NavLink to='/birds'>Birds</NavLink></li>
	  </ul>
    </nav>
  </header>
)};
export default Nav;
