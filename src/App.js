import './App.css';
import React from 'react';

function App () {
	const greeting = 'greeting';
	return (
		// In order to return multiple elements in JSX we must nest them within one singular element
		<div className='container'>
			<h1 id={greeting}>Hello, World</h1>
			<p>I am writing JSX</p>
		</div>
	);
}

export default App;
