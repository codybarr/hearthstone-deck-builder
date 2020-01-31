import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import './Home.css'

function Home() {
	const history = useHistory()

	return (
		<>
			<header role="banner">
				<h1>Hearthstone Deck Builder!</h1>
				<p className="content">
					Welcome to the site. Let's kick things off by creating a
					deck!
				</p>
				<button
					className="primary"
					onClick={() => history.push('/decks/create')}
				>
					Create Deck!
				</button>
			</header>
			<section className="content">
				<h2>Check out the Demo</h2>
				<p>
					Visit the <Link to="/demo">demo page</Link> for a survey on
					the site's pages / features.
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
