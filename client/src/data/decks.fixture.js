import cards from './cards.fixture'

const deck_cards = cards.map(card => {
	return {
		dbf_id: card.dbf_id,
		quantity: 1,
		name: card.name,
		rarity: card.rarity,
	}
})

const decks = [
	{
		id: 1,
		name: 'Ungoro Masters',
		hearthstoneClass: 'WARRIOR',
		description:
			'Aliquip nulla irure veniam minim aliquip reprehenderit fugiat fugiat qui excepteur aute dolor pariatur aliqua. Id mollit dolor et mollit amet quis. Excepteur consectetur mollit nisi dolore sit enim aute aliquip voluptate. In esse irure tempor sunt dolor enim id in ex.',
		cards: deck_cards,
	},
	{
		id: 2,
		name: 'Spell Slinger',
		hearthstoneClass: 'PRIEST',
		description:
			'Ad proident aliqua exercitation duis nulla sunt sunt incididunt amet cillum culpa deserunt qui. Proident irure cillum aute amet esse ut nisi consectetur. Esse ut id deserunt est deserunt ad dolor veniam cupidatat dolore consectetur mollit. Velit officia duis cillum ullamco minim eu officia nisi occaecat. Nostrud culpa nulla veniam eu consectetur laborum qui aliqua sit adipisicing est aliqua. Eiusmod proident veniam esse aute.',
		cards: deck_cards,
	},
	{
		id: 3,
		name: 'THIS DECK HAS A REALLY LONG NAME',
		hearthstoneClass: 'HUNTER',
		description:
			'Non ex dolor minim laboris nisi excepteur esse sint velit nostrud aliquip voluptate. Aliquip ex irure sint duis aute. Ullamco anim enim tempor incididunt est nostrud ipsum exercitation. Dolore excepteur veniam consectetur deserunt irure. Et veniam anim est commodo exercitation nulla veniam mollit aute ut do ad laboris. Ad voluptate amet Lorem cupidatat aliqua cillum exercitation veniam reprehenderit exercitation est nulla. Officia ut magna occaecat ea pariatur veniam incididunt mollit nulla aliquip magna esse.',
		cards: deck_cards,
	},
	{
		id: 4,
		name: 'Scared yet?',
		hearthstoneClass: 'WARLOCK',
		description:
			'Minim Lorem deserunt quis occaecat proident aliqua sint ipsum est et exercitation est. Deserunt ex duis in voluptate amet eiusmod officia eu incididunt ea. Consequat minim anim quis fugiat eiusmod irure laborum cupidatat sunt reprehenderit duis est reprehenderit do. Est exercitation cillum tempor dolore Lorem velit culpa.',
		cards: deck_cards,
	},
	{
		id: 5,
		name: 'Take that!',
		hearthstoneClass: 'ROGUE',
		description:
			'Pariatur tempor reprehenderit nulla ullamco. Occaecat veniam cupidatat ea sit aliquip commodo duis sunt irure laborum amet elit pariatur ipsum. Est dolor excepteur nulla commodo non elit consequat sit enim cillum duis do. Voluptate excepteur do cillum eu eiusmod elit enim elit nisi excepteur quis. Sint voluptate laborum cillum esse voluptate mollit ut incididunt eiusmod cillum minim elit nisi et. Laborum pariatur duis esse tempor ut aute dolore minim mollit laboris.',
		cards: deck_cards,
	},
]

// module.exports = decks
export default decks
