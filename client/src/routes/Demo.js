import React from 'react'
import { Link } from 'react-router-dom'
import userDecksScreenshot from '../assets/images/screenshots/user-decks.png'
import cardViewScreenshot from '../assets/images/screenshots/card-view.png'
import deckViewScreenshot from '../assets/images/screenshots/deck-view.png'
import createDeckScreenshot from '../assets/images/screenshots/create-deck.png'

function Demo() {
	return (
		<main>
			<h1>Demo Page</h1>
			<section className="content">
				<h2>
					<Link to="/user/codybarr/decks">View User Decks</Link>
				</h2>
				<div className="flex">
					<p>
						When logged in you can view your decks on this page.
						Clicking an individual deck will bring you to the
						corresponding deck view page.
					</p>
					<img
						src={userDecksScreenshot}
						alt="user decks screenshot"
						width="500"
					/>
				</div>
			</section>
			<section className="content">
				<h2>
					<Link to="/card/8">View Card</Link>
				</h2>
				<div className="flex">
					<img
						src={cardViewScreenshot}
						alt="card view screenshot"
						width="500"
					/>
					<p>
						You can view individual cards by clicking their
						corresponding links in the deck view pages.
					</p>
				</div>
			</section>
			<section className="content">
				<h2>
					<Link to="/deck/2">View Deck</Link>
				</h2>
				<div className="flex">
					<p>
						You can view individual decks by clicking them on the
						User Decks page.
					</p>
					<img
						src={deckViewScreenshot}
						alt="deck view screenshot"
						width="500"
					/>
				</div>
			</section>
			<section className="content">
				<h2>
					<Link to="/decks/create">Create Deck</Link>
				</h2>
				<div className="flex">
					<img
						src={createDeckScreenshot}
						alt="create deck screenshot"
						width="500"
					/>
					<p>
						Lastly you can also create your own decks. You'll need
						to add some cards, pick a class, deck name, and
						description. After creating a new deck you'll be brought
						to the User Decks page, where you can select your newly
						created deck to view it's information.
					</p>
				</div>
			</section>
		</main>
	)
}

export default Demo
