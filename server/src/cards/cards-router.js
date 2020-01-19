const express = require('express')
const CardsService = require('./cards-service')
const cardsRouter = express.Router()

cardsRouter.route('/').get((req, res, next) => {
	console.log(req.query)
	CardsService.getAllCards(req.app.get('db'), req.query)
		.then(cards => res.json(cards))
		.catch(next)
})

cardsRouter
	.route('/:dbf_id')
	.all((req, res, next) => {
		CardsService.getById(req.app.get('db'), req.params.dbf_id)
			.then(card => {
				if (!card) {
					return res.status(404).json({
						error: { message: `Card doesn't exist` },
					})
				}
				res.card = card // save the Note for the next middleware
				next() // don't forget to call next so the next middleware happens!
			})
			.catch(next)
	})
	.get((req, res, next) => res.json(res.card))

module.exports = cardsRouter
