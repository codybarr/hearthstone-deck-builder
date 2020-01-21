# Hearthstone Deck Builder

Visual deck builder tool for the popular digital strategy card game Hearthstone! The App will have authentication, allow you to both build and share your decks with others, implement commenting, up/downvoting, display deck stats, deck and card search, etc.

## Tech Used

Full Stack JavaScript app (built with React, Node/Express, and Postgres).

## Development

**Client**

`cd client && yarn start`

**Server**

`cd server && yarn dev`

## Deployment

**Client**

`cd client && yarn deploy`

## Project History

**Milestone 1 - Wireframes**

Created static HTML wireframes of the most essential pages. Deployed to Surge.

https://hdb-wireframes.surge.sh

**Milestone 2 - User Flow**

[Link to Figma File](https://www.figma.com/file/Rd83WQavll1t4gA3pUpXGJ/Hearthstone-Deck-Builder-User-Flow?node-id=26%3A207)

![Hearthstone Deck Builder - User Flow](/user-flow/User-Flow.png?raw=true)

**Milestone 3a - Static Client / Partial Server**

Got a rough draft of the static client created. Most of the pages are built and everything except for the create deck submission logic is ready.

Also built the GET endpoints for `/api/cards` and `/api/cards/:id`.

**Milestone 3b - Fully functional Static Client (minus auth)**

Finished building out the MVP features deck builder, etc. This version of the client is ready for user feedback.
