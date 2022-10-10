import './App.css';
import React from 'react';

const displayEmojiName = (event) => alert(event.target.id);

function App () {
	const greeting = 'greeting';
	return (
		// In order to return multiple elements in JSX we must nest them within one singular element
		<div className='container'>
			<h1 id={greeting}>Hello, World</h1>
			<p>I am writing JSX</p>

			<ul>
				<li>
					<button onClick={displayEmojiName}>
						<span role='img' aria-label='grinning face' id='grinning face'>
							😀
						</span>
					</button>
				</li>

				<li>
					<button onClick={displayEmojiName}>
						<span role='img' aria-label='party popper' id='party popper'>
							🎉
						</span>
					</button>
				</li>

				<li>
					<button onClick={displayEmojiName}>
						<span role='img' aria-label='woman dancing' id='woman dancing'>
							💃
						</span>
					</button>
				</li>
			</ul>
		</div>
	);
}

export default App;
