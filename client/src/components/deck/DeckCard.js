import React from 'react'
import { useHistory } from 'react-router-dom'
import './DeckCard.css'

import HearthstoneClassIcon from '../icons/HearthstoneClassIcon'

function DeckCard({ deck }) {
	const history = useHistory()
	return (
		<article
			className="user-deck"
			key={deck.id}
			role="button"
			aria-pressed="false"
			onClick={() => history.push(`/deck/${deck.id}`)}
		>
			<div
				className={`deck-inner ${deck.hearthstoneClass.toLowerCase()}`}
			>
				<HearthstoneClassIcon
					hearthstoneClass={deck.hearthstoneClass}
				/>
				<h3>{deck.name}</h3>
			</div>
		</article>
	)
}

export default DeckCard
