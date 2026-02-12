# Fetching-Dog_Data

A lightweight, API‑powered web app for browsing dog breeds, exploring breed details, and discovering fun dog facts. Built with clean modular JavaScript, accessible UI patterns, and a simple, modern layout.

## Overview
Dog Explorer fetches real data from a public dog API and displays it in an interactive interface. Users can:
- Browse a full list of dog breeds
- Click a breed to view details (image, temperament, size, etc.)
- Generate random dog facts
- Explore dog breed groups
- Enjoy a responsive, centered layout with a clean card‑based UI
This project emphasizes modular code structure, reusable components, and beginner‑friendly documentation.


## Features
### Breed Browser
- Fetches all breeds from the API
- Displays them in a scrollable, interactive list
- Clicking a breed loads detailed information and an image
  ### Breed Details
- Shows breed name, group, temperament, lifespan, and more
- Includes a dynamically fetched breed image
- Uses a clean card layout for readability
  ### Random Dog Facts
- Fetches a new fact on button click
- Designed as a reusable API module
  ### Breed Groups
- Displays all available breed groups
- Lets users explore breeds by category
- 
## Tech Stack
- HTML, CSS, JavaScript
- Modular API structure (scripts/api/)
- Fetch API for all network requests
- Responsive UI with centered layout and clean spacing


##Project Structure

    /project
    │── index.html
    │── README.md
    │── /css
    │     └── styles.css
    │── /js
    │     ├── /api
    │     |     └── breeds.js 
    │     |     └── breedDetails.js 
    │     |      └── facts.js 
    │     |     └── groups.js 
    │     ├── /ui
    │     |     └── renderBreedDetails.js
    │     |     └── renderBreed.js
    │     |     └── renderFacts.js
    │     |     └── renderGroups.js
    │     └── main.js
    

 

## How It Works
1. Fetching Breeds
The app loads all breeds on startup using a dedicated API module.
Breeds are rendered into an interactive list.
2. Viewing Breed Details
When a user clicks a breed, the app fetches additional data and displays it in a detail card.
3. Random Facts
A button triggers a fetch request to load a new dog fact.
4. Groups
The app fetches all breed groups and displays them in a simple UI section.

## Installation
- Clone the repository
- Open index.html in your browser
- No build tools or API keys required

- Open index.html in your browser
- No build tools or API keys required
