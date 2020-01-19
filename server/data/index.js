/* Placeholder file for playing with the card data in Node */

const card_data = require('./cards.collectible.json')

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
		text = null,
		race = null,
		elite = null,
		durability = null,
		overload = null,
		armor = null,
		mechanics = null,
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
		text,
		race,
		elite,
		durability,
		overload,
		armor,
		mechanics,
		dbf_id: card.dbfId, // required, not null
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
		// referencedTags: referenced_tags
		// entourage: [String]
		// classes: [String]
	}
}

let firstTenCards = card_data.slice(0, 30).map(cardMapper)
// .map(card => card.mechanics)

firstTenCards.forEach(card => console.log(card))
