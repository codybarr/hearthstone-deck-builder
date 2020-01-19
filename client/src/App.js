import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './routes/Home'
import Demo from './routes/Demo'
import Login from './routes/Login'
import Register from './routes/Register'
import CardView from './routes/CardView'
import DeckCreate from './routes/deck/DeckCreate'
import DeckView from './routes/deck/DeckView'
import NoMatch from './routes/NoMatch'

import './App.css'

function App() {
	return (
		<>
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
		</>
	)
}

export default App
