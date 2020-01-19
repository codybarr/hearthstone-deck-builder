import React from 'react'
import { cards as card_data } from '../../data/cards.fixtures'
// import _ from 'lodash'

import './DeckCreate.css'

export default class DeckCreate extends React.Component {
	state = {
		cardSearchQuery: '',
		filteredCards: [],
		deckClass: '',
		deckName: '',
		deckDescription: '',
		deckCards: [],
	}

	componentDidMount() {
		this.setState({ filteredCards: card_data })
	}

	incrementCard(e, card) {
		console.log(`You clicked on ${card.name}`)
		const currentDeckCards = [...this.state.deckCards]
		const existsIndex = currentDeckCards.findIndex(
			dc => dc.dbf_id === card.dbf_id
		)
		const exists = existsIndex >= 0

		if (exists) {
			// check if > 1, if so don't increment, warn
			if (currentDeckCards[existsIndex].quantity > 1) {
				alert(
					`You can't add anymore of: ${currentDeckCards[existsIndex].name}`
				)
			} else if (currentDeckCards[existsIndex].rarity === 'LEGENDARY') {
				alert('You can only have one of each legendary.')
			} else {
				currentDeckCards[existsIndex].quantity++
				this.setState({ deckCards: [...currentDeckCards] })
			}
		} else {
			// add
			this.setState({
				deckCards: [
					...currentDeckCards,
					{
						dbf_id: card.dbf_id,
						quantity: 1,
						name: card.name,
						rarity: card.rarity,
					},
				],
			})
		}
	}

	decrementCard(e, card) {
		console.log(`You clicked on ${card.name}`)
		const currentDeckCards = [...this.state.deckCards]
		const indexOfCardToDecrement = currentDeckCards.findIndex(dc => {
			return dc.dbf_id === card.dbf_id
		})

		if (card.quantity === 2) {
			// decrement quantity
			currentDeckCards[indexOfCardToDecrement].quantity--
		} else {
			// remove the card from the array of current deck cards!
			currentDeckCards.splice(indexOfCardToDecrement, 1) // !
		}

		this.setState({
			deckCards: [...currentDeckCards],
		})
	}

	createDeck = e => {
		e.preventDefault()
		console.log('deck create form submitted')

		/* VALIDATION */
		// if sum of all cards is > 30
	}

	render() {
		const filteredCardHtml = this.state.filteredCards
			.filter(card => {
				return card.name
					.toLowerCase()
					.includes(this.state.cardSearchQuery.toLowerCase())
			})
			.map(card => {
				return (
					<img
						key={card.dbf_id}
						role="button"
						width="150"
						alt={`${card.name}`}
						src={`https://s3.wasabisys.com/hearthstone/${card.dbf_id}.png`}
						onClick={e => this.incrementCard(e, card)}
					/>
				)
			})

		const _formRadios = [
			'Mage',
			'Warrior',
			'Shaman',
			'Warlock',
			'Priest',
			'Druid',
			'Rogue',
			'Hunter',
			'Paladin',
		].map(hClass => {
			return (
				<div key={hClass}>
					<input
						type="radio"
						name="deckClass"
						aria-label={hClass}
						value={hClass.toUpperCase()}
						id={`deckClass-${hClass.toLowerCase()}`}
						defaultChecked={hClass === 'Mage'}
						onChange={e =>
							this.setState({ deckClass: e.target.value })
						}
					/>
					<label htmlFor={`deckClass-${hClass.toLowerCase()}`}>
						{hClass}
					</label>
				</div>
			)
		})

		const deckCardsHTML = this.state.deckCards.map(dc => {
			return (
				<li key={dc.dbf_id}>
					<button onClick={e => this.decrementCard(e, dc)}>
						{dc.quantity}x {dc.name}
					</button>
				</li>
			)
		})

		const totalCards = this.state.deckCards.reduce((prev, curr) => {
			return (prev += curr.quantity)
		}, 0)

		return (
			<main className="create-deck">
				<div className="inner">
					<section>
						<h1>Create Deck</h1>
						<h2>Find Cards</h2>
						<form
							id="cardSearch"
							onSubmit={e => e.preventDefault()}
						>
							<input
								name="cardQuery"
								aria-label="Search for card"
								type="text"
								placeholder="Search for card"
								value={this.state.cardSearchQuery}
								onChange={e =>
									this.setState({
										cardSearchQuery: e.target.value,
									})
								}
							/>
							<div id="cardSearchResults">{filteredCardHtml}</div>
						</form>
					</section>

					<section>
						<h2>Deck Info</h2>
						<form
							id="createDeck"
							onSubmit={e => this.createDeck(e)}
						>
							<fieldset>
								<legend>Deck Class</legend>
								<div className="deckClass-radios">
									{_formRadios}
								</div>
							</fieldset>
							<div>
								<input
									name="deckName"
									aria-label="Deck Name"
									type="text"
									placeholder="Deck Name"
									value={this.state.deckName}
									onChange={e =>
										this.setState({
											deckName: e.target.value,
										})
									}
								/>
							</div>
							<div>
								<textarea
									name="deckDescription"
									aria-label="Deck Description"
									placeholder="Deck Description"
									value={this.state.deckDescription}
									onChange={e =>
										this.setState({
											deckDescription: e.target.value,
										})
									}
								></textarea>
							</div>
							<h3>Deck Cards</h3>
							{this.state.deckCards.length > 0 && deckCardsHTML}
							{this.state.deckCards.length === 0 && (
								<p>No cards yet.</p>
							)}
							<p>
								<strong>Total Cards:</strong> {totalCards} / 30
							</p>
							<div>
								<input type="submit" value="Create Deck" />
							</div>
						</form>
					</section>
				</div>
			</main>
		)
	}
}
