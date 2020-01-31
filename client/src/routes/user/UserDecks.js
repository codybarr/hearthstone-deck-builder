import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import UserContext from '../../context/Context'

import DeckTab from '../../components/deck/DeckTab'

import './UserDecks.css'

function UserDecks() {
	const { username } = useParams()
	const { userDecks = [] } = useContext(UserContext)
	console.log({ UserDecksView: userDecks })

	const userDecksHTML = userDecks.map(deck => {
		return <DeckTab key={deck.id} deck={deck} />
	})

	return (
		<main>
			<h1>{username}'s Decks</h1>
			<div id="userDecks">{userDecksHTML}</div>
		</main>
	)
}

export default UserDecks
