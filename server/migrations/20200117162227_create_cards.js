exports.up = function(knex) {
	// create table 'users' with a primary key using 'increments()'
	return knex.schema.createTable('cards', function(t) {
		// "table"
		t.integer('dbf_id').primary()
		t.integer('attack')
		t.string('card_class')
		t.integer('cost')
		t.string('faction')
		t.integer('health')
		t.string('id').notNullable()
		t.string('name').notNullable()
		t.string('rarity')
		t.string('set').notNullable()
		t.string('type').notNullable()
		t.string('artist')
		t.specificType('mechanics', 'TEXT[]')
		t.boolean('collectible')
		t.string('flavor')
		t.string('play_requirements')
		t.string('card_text')
		t.string('race')
		t.boolean('elite')
		t.specificType('entourage', 'TEXT[]')
		t.string('targeting_arrow_text')
		t.integer('durability')
		t.integer('overload')
		t.integer('spell_damage')
		t.string('collection_text')
		t.integer('armor')
		t.integer('puzzle_type')
		t.boolean('hide_stats')
		t.string('how_to_earn')
		t.string('how_to_earn_golden')
		t.string('multi_class_group')
		t.string('quest_reward')
		t.specificType('referenced_tags', 'TEXT[]')
		t.specificType('hearthstone_classes', 'TEXT[]')
	})
}

exports.down = function(knex) {
	// DROP TABLE IF EXISTS cards;
	return knex.schema.dropTableIfExists('cards')
}

// By default, each migration is run inside a transaction.
// exports.config = { transaction: false };

// DROP TYPE IF EXISTS hearthstone_class;
// CREATE TYPE hearthstone_class AS ENUM (
// 	'MAGE',
// 	'WARRIOR',
// 	'HUNTER',
// 	'WARLOCK',
// 	'SHAMAN',
// 	'ROGUE',
// 	'PALADIN',
// 	'PRIEST',
// 	'DRUID'
// );

// DROP TYPE IF EXISTS hearthstone_set;
// CREATE TYPE hearthstone_set AS ENUM (
// 	'BOOMSDAY',
// 	'BRM',
// 	'CORE',
// 	'DALARAN',
// 	'DRAGONS',
// 	'EXPERT1',
// 	'GANGS',
// 	'GILNEAS',
// 	'GVG',
// 	'HERO_SKINS',
// 	'HOF',
// 	'ICECROWN',
// 	'KARA',
// 	'LOE',
// 	'LOOTAPALOOZA',
// 	'NAXX',
// 	'OG',
// 	'TGT',
// 	'TROLL',
// 	'ULDUM',
// 	'UNGORO'
// );

// DROP TYPE IF EXISTS hearthstone_rarity;
// CREATE TYPE hearthstone_rarity AS ENUM (
// 	'COMMON',
// 	'RARE',
// 	'EPIC',
// 	'LEGENDARY'
// );
