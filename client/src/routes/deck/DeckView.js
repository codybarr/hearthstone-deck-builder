import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { cards as card_data } from '../../data/cards.fixtures'

const cards = card_data.map(c => {
	return {
		...c,
		quantity: c.rarity === 'LEGENDARY' ? 1 : 2,
	}
})

const deck_data = {
	name: 'Into the Abyss',
	description: 'This will be my super **awesome** deck description ;)',
	hearthstone_class: 'SHAMAN',
	cards,
}

function DeckView() {
	let { deck_id } = useParams()
	const [deck, setDeck] = useState({ cards: [] })

	useEffect(() => {
		// eg. fetch card based on param
		setDeck(deck_data)
		console.log(deck)
	}, [deck])

	const listOfCards = deck.cards.map(card => {
		return (
			<li>
				{card.quantity}x{' '}
				<Link to={`/card/${card.dbf_id}`}> {card.name}</Link>
			</li>
		)
	})

	return (
		<main className="view-deck">
			<div className="view-deck-inner">
				<section>
					<h1>
						Deck View Page: {deck.name} | {deck_id}
					</h1>
					<h2>{deck.hearthstone_class}</h2>
					<h3>Description</h3>
					<>{deck.description}</>
				</section>
				<section>
					<h3>Deck Stats</h3>
					<p>[ deck stats go here ]</p>
				</section>
				<section>
					<h3>Deck Cards</h3>
					<ul>{listOfCards}</ul>
				</section>
			</div>
		</main>
	)
}

export default DeckView
