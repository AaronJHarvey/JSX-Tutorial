import './App.css';
import React from 'react';

const displayEmojiName = (event) => alert(event.target.id);

const emojis = [
	{
		emoji: '😀',
		name: 'grinning face'
	},
	{
		emoji: '🎉',
		name: 'party popper'
	},
	{
		emoji: '💃',
		name: 'woman dancing'
	}
];

function App (props) {
	const greeting = 'greeting';

	const displayAction = true;

	return (
		// In order to return multiple elements in JSX we must nest them within one singular element
		<div className='container'>
			<h1 id={greeting}>Hello, World</h1>
			{displayAction && <p>I am writing JSX</p>}

			<ul>
				{emojis.map((emoji) => (
					<li key={emoji.name}>
						<button onClick={displayEmojiName}>
							<span role='img' aria-label={emoji.name} id={emoji.name}>
								{emoji.emoji}
							</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
