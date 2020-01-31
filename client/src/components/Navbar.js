import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import { ReactComponent as HDBIcon } from '../assets/images/hdb-icon.svg'

function Navbar() {
	const [isOpen, setOpen] = useState(false)
	const location = useLocation()

	useEffect(() => {
		console.log(`Location change detected, closing responsive nav`)
		setOpen(false)
	}, [location])

	const handleBurgerKeyPress = e => {
		if (e.key === 'Enter') {
			setOpen(!isOpen)
		}
	}

	const burger = (
		<div
			onClick={() => setOpen(!isOpen)}
			onKeyPress={e => handleBurgerKeyPress(e)}
			role="button"
			tabIndex="0"
			aria-label={`toggle navbar ${isOpen ? 'closed' : 'open'}`}
			className={`burger-wrapper ${isOpen ? '' : 'closed'}`}
			data-ix="burger-click"
		>
			<div className="line-1"></div>
			<div className="line-2"></div>
			<div className="line-3"></div>
		</div>
	)

	return (
		<nav className={`nav ${isOpen ? 'isOpen' : ''}`}>
			<div className="main">
				<Link to="/" className="logo-wrapper">
					<HDBIcon className="logo" />
					<strong className="">Hearthstone Deck Builder</strong>
				</Link>

				{burger}
			</div>
			<ul className="nav-items">
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
					<Link to="/user/codybarr/decks">User Decks</Link>
				</li>
				<li>
					<Link to="/card/23">View Card</Link>
				</li>
				<li>
					<Link to="/deck/2">View Deck</Link>
				</li>
				<li>
					<Link to="/decks/create">Create Deck</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
