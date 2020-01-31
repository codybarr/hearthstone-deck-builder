import React from 'react'

import DeckCardItem from './DeckCardItem'

import styles from './DeckCardList.module.css'

function DeckCardList({ cards, total, decrementCard }) {
	const deckCardsHTML = cards.map(card => (
		<DeckCardItem
			key={card.dbf_id}
			card={card}
			decrementCard={decrementCard}
		/>
	))

	return (
		<>
			{cards.length > 0 ? (
				<div>
					<ul className={styles.deckCardList}>{deckCardsHTML}</ul>
					<p>
						<em>(click to decrement/remove)</em>
					</p>
				</div>
			) : (
				<p className={styles.noCards}>
					<em>No cards yet, add some!</em>
				</p>
			)}

			<p className={styles.totalCards}>
				<strong>Total Cards:</strong> {total} / 30
			</p>
		</>
	)
}

export default DeckCardList
