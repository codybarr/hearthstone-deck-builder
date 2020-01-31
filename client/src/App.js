import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './routes/Home'
import Demo from './routes/Demo'
import Login from './routes/Login'
import Register from './routes/Register'
import UserDecks from './routes/user/UserDecks'
import CardView from './routes/CardView'
import DeckCreate from './routes/deck/DeckCreate'
import DeckView from './routes/deck/DeckView'
import NoMatch from './routes/NoMatch'

import UserContext from './context/Context'
import './App.css'
import decks from './data/decks.fixture'
import user from './data/user.fixture'

export default class App extends React.Component {
	state = {
		userDecks: [],
		user: {},
	}

	addUserDeck = deck => {
		const id = this.state.userDecks.length + 1

		const updatedUserDecks = [
			...this.state.userDecks,
			{
				id,
				...deck,
			},
		]
		this.setState({ userDecks: updatedUserDecks })
	}

	componentDidMount() {
		console.log('app.js mounted')
		// fetch user decks
		this.setState({ userDecks: decks, addUserDeck: this.addUserDeck })
		this.setState({ user })
	}

	render() {
		return (
			<>
				<UserContext.Provider value={this.state}>
					<Router>
						<Navbar />
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/demo">
								<Demo />
							</Route>
							<Route exact path="/login">
								<Login />
							</Route>
							<Route exact path="/register">
								<Register />
							</Route>
							<Route exact path="/user/:username/decks">
								<UserDecks />
							</Route>
							<Route exact path="/card/:card_id">
								<CardView />
							</Route>
							<Route exact path="/decks/create">
								<DeckCreate />
							</Route>
							<Route exact path="/deck/:deck_id">
								<DeckView />
							</Route>
							<Route path="*">
								<NoMatch />
							</Route>
						</Switch>
					</Router>
					<Footer />
				</UserContext.Provider>
			</>
		)
	}
}
