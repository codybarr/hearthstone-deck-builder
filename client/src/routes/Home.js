import React from 'react'
import { Link } from 'react-router-dom'

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
				<p className="content">
					Hi there, thanks for visiting my site. If you'd like to
					learn how to use the app, please{' '}
					<Link to="/demo">visit the demo</Link>
				</p>
			</header>
			<section className="content">
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
