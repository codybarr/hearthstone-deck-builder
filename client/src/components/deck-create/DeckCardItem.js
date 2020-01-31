import React from 'react'
import styles from './DeckCardItem.module.css'

function DeckCardItem({ card, decrementCard }) {
	const backgroundImage = `linear-gradient(to right, black 0%, black 30%, transparent 100%), url(https://s3.wasabisys.com/hearthstone/tiles/${card.id}.png)`
	return (
		<li>
			<button
				className={styles.deckCardItem}
				onClick={e => decrementCard(e, card)}
			>
				<span className={styles.cardQuantity}>{card.quantity}</span>
				<span className={styles.cardName}>
					{card.name.toUpperCase()}
				</span>
				<span
					className={styles.cardTile}
					style={{ backgroundImage }}
				></span>
			</button>
		</li>
	)
}

export default DeckCardItem
