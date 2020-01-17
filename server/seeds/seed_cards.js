const card_data = require('../data/cards.collectible.json')

function cardMapper(card) {
	const {
		id, // required, not null
		name, // required, not null
		set, // required, not null
		type, // required, not null
		attack = null,
		cost = null,
		faction = null,
		health = null,
		rarity = null,
		artist = null,
		collectible = null,
		flavor = null,
		race = null,
		elite = null,
		durability = null,
		overload = null,
		armor = null,
		mechanics = null,
		entourage = null,
	} = card

	return {
		attack,
		cost,
		faction,
		health,
		id,
		name,
		rarity,
		set,
		type,
		artist,
		collectible,
		flavor,
		race,
		elite,
		durability,
		overload,
		armor,
		mechanics,
		entourage,
		dbf_id: card.dbfId, // required, not null
		card_text: card.text,
		card_class: card.cardClass || null,
		play_requirements: card.playRequirements || null,
		targeting_arrow_text: card.targetingArrowText || null,
		spell_damage: card.spellDamage || null,
		collection_text: card.collectionText || null,
		puzzle_type: card.puzzleType || null,
		hide_stats: card.hideStats || null,
		how_to_earn: card.howToEarn || null,
		how_to_earn_golden: card.howToEarnGolden || null,
		multi_class_group: card.multiClassGroup || null,
		quest_reward: card.questReward || null,
		referenced_tags: card.referencedTags || null,
		hearthstone_classes: card.classes || null,
		// classes: [String]
	}
}

exports.seed = function(knex) {
	// apparently there's a limit on how many entries can be seeded in one shot?
	const first1000Cards = card_data.slice(0, 1000).map(cardMapper)
	const second1000Cards = card_data.slice(1000, 2500).map(cardMapper)

	// Deletes ALL existing entries
	return knex('cards')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('cards').insert(first1000Cards)
		})
		.then(function() {
			return knex('cards').insert(second1000Cards)
		})
}
