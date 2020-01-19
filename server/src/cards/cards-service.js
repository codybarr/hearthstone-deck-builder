const CardsService = {
	async getAllCards(knex, { limit = 20, offset = 0 }) {
		const allCards = () => {
			return knex.from('cards')
		}
		const totalCount = await allCards().count()
		const data = await allCards()
			.select('*')
			.whereNotIn('type', ['HERO'])
			.limit(limit)
			.offset(offset)
			.orderBy('dbf_id', 'asc')

		return {
			totalCount: totalCount[0]['count'],
			limit,
			offset,
			cards: data,
		}
	},
	getById(knex, dbf_id) {
		return knex
			.from('cards')
			.select('*')
			.where('dbf_id', dbf_id)
			.first()
	},
}

module.exports = CardsService
