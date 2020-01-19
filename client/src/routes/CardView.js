import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { cards as all_cards } from '../data/cards.fixtures'

function Card() {
	let { card_id } = useParams()
	const [card, setCard] = useState({})

	useEffect(() => {
		// eg. fetch card based on param
		const currentCard = all_cards.find(c => c.dbf_id === Number(card_id))
		setCard(currentCard)
	}, [card_id])

	return (
		<main className="card">
			<h1>
				Card View: {card.name} | card.id: {card_id}{' '}
			</h1>
			<img
				key={card.dbf_id}
				width="200"
				alt={`${card.name}`}
				src={`https://s3.wasabisys.com/hearthstone/${card.dbf_id}.png`}
			/>
			<h2>Card Info</h2>
			<ul>
				<li>Set Name: {card.set}</li>
				<li>Card Type: {card.type}</li>
				<li>Card Text: {card.card_text}</li>
				<li>Rarity: {card.rarity}</li>
				<li>Class: {card.card_class}</li>
			</ul>
		</main>
	)
}

export default Card
