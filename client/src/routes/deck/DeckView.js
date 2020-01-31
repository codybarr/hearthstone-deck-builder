import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import UserContext from '../../context/Context'

import './DeckView.css'

function DeckView() {
	const { deck_id } = useParams()
	const [deck, setDeck] = useState({ name: '', cards: [] })
	const { userDecks = [] } = useContext(UserContext)

	console.log({ deck_id })
	console.log('deckview deck', deck)
	console.log('deckview userDecks', userDecks)

	useEffect(() => {
		// eg. fetch card based on param
		const currentDeck = userDecks.find(d => d.id === Number(deck_id))
		console.log({ currentDeck })
		setDeck(currentDeck)
	}, [userDecks, deck_id])

	const listOfCards =
		deck &&
		deck.cards.map(card => {
			return (
				<li key={card.dbf_id}>
					{card.quantity}x{' '}
					<Link to={`/card/${card.dbf_id}`}> {card.name}</Link>
				</li>
			)
		})

	return (
		<main className="view-deck">
			{deck && (
				<div className="view-deck-inner">
					<section>
						<h1>
							Name: {deck.name} | ID: {deck_id}
						</h1>
						<h2>Class: {deck.hearthstoneClass}</h2>
						<h3>Description</h3>
						<p>{deck.description}</p>
					</section>
					<section>
						<h3>Deck Stats</h3>
						<p>[ deck stats go here ]</p>
					</section>
					<section className="content">
						<h3>Deck Cards</h3>
						<ul>{listOfCards}</ul>
					</section>
				</div>
			)}
		</main>
	)
}

export default DeckView
