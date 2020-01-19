import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { ReactComponent as HDBIcon } from '../assets/images/hdb-icon.svg'

function Navbar() {
	return (
		<nav className="nav">
			<Link to="/" className="logo-wrapper">
				<HDBIcon className="logo" />
				<strong>Hearthstone Deck Builder</strong>
			</Link>
			<ul>
				<li>
					<Link to="/demo">Demo</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/register">Register</Link>
				</li>
				<li>
					<Link to="/card/23">View Card</Link>
				</li>
				<li>
					<Link to="/deck/42">View Deck</Link>
				</li>
				<li>
					<Link to="/decks/create">Create Deck</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
