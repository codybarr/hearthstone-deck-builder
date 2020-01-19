import React from 'react'

function Home() {
	return (
		<>
			<header role="banner">
				<h1>
					Boom{' '}
					<span role="img" aria-label="boom emoji">
						💥
					</span>{' '}
					- Hearthstone Deck Builder!
				</h1>
				<a href="/demo">Check out the Demo</a>
			</header>
			<section>
				<h2>Create Your Own Decks</h2>
				<p>
					Use our custom designed deck builder to craft your
					hearthstone deck. You can do all sorts of things with your
					decks after they're created:
				</p>
				<ul>
					<li>Share them with your friends</li>
					<li>View Deck Statics</li>
					<li>Rate Decks</li>
				</ul>
			</section>
			<section>
				<h2>Search for and View Cards</h2>
				<p>
					Our advanced search form makes it easy to find the perfect
					card to round out that special deck you've been working on.
				</p>
			</section>
		</>
	)
}

export default Home
