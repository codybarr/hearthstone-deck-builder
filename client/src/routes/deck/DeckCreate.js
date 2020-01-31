import React from 'react'
import { withRouter } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import DeckCardList from '../../components/deck-create/DeckCardList'
import UserContext from '../../context/Context'

import './DeckCreate.css'
import card_data from '../../data/cards.fixture'

// imports all images in a directory
function importAll(r) {
	let images = {}
	r.keys().forEach((item, index) => {
		images[item.replace('./', '')] = r(item)
	})
	return images
}

const HERO_PORTRAITS = importAll(
	require.context('../../assets/images/heroes/', false, /\.(png|jpe?g|svg)$/)
)

class DeckCreate extends React.Component {
	static contextType = UserContext

	state = {
		cardSearchQuery: '',
		filteredCards: [],
		// classSelected: false,
		classSelected: true, // testing
		// deckClass: '',
		deckClass: 'PRIEST', // testing
		deckName: '',
		deckDescription: '',
		deckCards: [],
		totalCards: 0,
	}

	componentDidMount() {
		this.setState({ filteredCards: card_data })
	}

	selectClass(e) {
		e.preventDefault()

		this.setState({ classSelected: true }, () => {
			this.notify({
				type: toast.TYPE.SUCCESS,
				message: `🚀 You selected the following class: ${this.state.deckClass}`,
			})
		})
	}

	updateTotalCards() {
		const newTotalCards = this.state.deckCards.reduce((prev, curr) => {
			return (prev += curr.quantity)
		}, 0)
		console.log('total updated: ', newTotalCards)
		this.setState({ totalCards: newTotalCards })
	}

	handleCardButtonKeyPress(e, card) {
		if (e.key === 'Enter') {
			this.incrementCard(card)
		}
	}

	incrementCard(card) {
		console.log(`You clicked on ${card.name}`)
		const currentDeckCards = [...this.state.deckCards]
		const existsIndex = currentDeckCards.findIndex(
			dc => dc.dbf_id === card.dbf_id
		)
		const exists = existsIndex >= 0

		if (exists) {
			// check if > 1, if so don't increment, warn
			if (currentDeckCards[existsIndex].quantity > 1) {
				this.notify({
					type: toast.TYPE.ERROR,
					message: `🙅🏼‍♂️ You can't add anymore of: ${currentDeckCards[existsIndex].name}`,
				})
			}
			// also check if legendary, if it exists then the quantity is one, so don't increment, warn
			else if (currentDeckCards[existsIndex].rarity === 'LEGENDARY') {
				this.notify({
					type: toast.TYPE.ERROR,
					message: `🙅🏼‍♂️ 'You can only have one of each legendary.'`,
				})
			}
			// else increment
			else {
				currentDeckCards[existsIndex].quantity++
				this.setState({ deckCards: [...currentDeckCards] }, () =>
					this.updateTotalCards()
				)
			}
		} else {
			// add
			this.setState(
				{
					deckCards: [
						...currentDeckCards,
						{
							id: card.id,
							dbf_id: card.dbf_id,
							quantity: 1,
							name: card.name,
							rarity: card.rarity,
						},
					],
				},
				() => this.updateTotalCards()
			)
		}
	}

	decrementCard = (e, card) => {
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

		this.setState(
			{
				deckCards: [...currentDeckCards],
			},
			() => this.updateTotalCards()
		)
	}

	createDeck = e => {
		e.preventDefault()
		const { history, match } = this.props
		console.log({ history, match })
		const { deckClass, deckName, deckDescription, deckCards } = this.state
		const newDeck = {
			hearthstoneClass: deckClass,
			name: deckName,
			description: deckDescription,
			cards: deckCards,
		}

		/* VALIDATION - TODO */
		// if sum of all cards is > 30

		if (this.state.totalCards === 0) {
			this.notify({
				type: toast.TYPE.INFO,
				message: `You need to add at least one card!`,
			})
			return
		}

		console.log('deck create form submitted', newDeck)
		this.context.addUserDeck(newDeck)
		this.props.history.push(`/user/${this.context.user.username}/decks`)
	}

	notify = ({ type, message }) =>
		toast(message, {
			type,
			position: toast.POSITION.BOTTOM_RIGHT,
		})

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
						tabIndex="0"
						aria-pressed="false"
						className="card__result"
						alt={`${card.name}`}
						src={`https://s3.wasabisys.com/hearthstone/${card.dbf_id}.png`}
						onClick={() => this.incrementCard(card)}
						onKeyPress={e => this.handleCardButtonKeyPress(e, card)}
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
					<label>
						<input
							type="radio"
							name="deckClass"
							aria-label={hClass}
							value={hClass.toUpperCase()}
							id={`deckClass-${hClass.toLowerCase()}`}
							onChange={e =>
								this.setState({ deckClass: e.target.value })
							}
							required
						/>
						<motion.img
							src={HERO_PORTRAITS[hClass.toUpperCase() + '.jpg']}
							alt={hClass}
							width="125"
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 1.3 }}
						/>
					</label>
				</div>
			)
		})

		return (
			<main className="create-deck">
				<h1>Create Deck</h1>

				{!this.state.classSelected && (
					<section className="select-class">
						<h2>Step 1. Select a Class</h2>
						<form
							id="selectClass"
							onSubmit={e => this.selectClass(e)}
						>
							<fieldset>
								<legend>Deck Class</legend>
								<div className="deckClass-radios">
									{_formRadios}
								</div>
							</fieldset>
							<motion.button
								type="submit"
								className="success"
								whileTap={{ scale: 1.3 }}
							>
								Select Class
							</motion.button>
						</form>
					</section>
				)}
				{this.state.classSelected && (
					<div className="inner">
						<section className="no-padding">
							<h2>Find Cards</h2>
							<form id="cardSearch" onSubmit={this.createDeck}>
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
								<div id="cardSearchResults">
									{filteredCardHtml}
								</div>
							</form>
						</section>

						<section>
							<h2>Deck Info</h2>
							<img
								className="class-portrait"
								src={
									HERO_PORTRAITS[
										this.state.deckClass.toUpperCase() +
											'.jpg'
									]
								}
								alt={this.state.deckClass}
								width="125"
							/>
							<form
								id="createDeck"
								onSubmit={e => this.createDeck(e)}
							>
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
										required
										aria-required="true"
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
										required
										aria-required="true"
									></textarea>
								</div>
								<DeckCardList
									cards={this.state.deckCards}
									total={this.state.totalCards}
									decrementCard={this.decrementCard}
								/>
								<div>
									<input type="submit" value="Create Deck" />
								</div>
							</form>
						</section>
					</div>
				)}
				<ToastContainer autoclose={5000} />
			</main>
		)
	}
}

export default withRouter(DeckCreate)
