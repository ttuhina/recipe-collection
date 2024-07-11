# Recipe Collection API

This project is a Recipe Collection application that demonstrates a RESTful API using Node.js and Express. The application supports basic CRUD (Create, Read, Update, Delete) operations on a collection of recipes. The front-end is designed with Tailwind CSS and utilizes vanilla JavaScript to interact with the API.


Creating a recipe :

![Create recipe](https://github.com/ttuhina/recipe-collection/blob/main/screenshot/Screenshot%202024-07-11%20130207.png)


Viewing recipes :

![view recipe](https://github.com/ttuhina/recipe-collection/blob/main/screenshot/Screenshot%202024-07-11%20130438.png)


## Table of Contents

- [Features](#features)
- [Technology stack](#technology-stack)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)

## Features

- **Create:** Add new recipes to the collection.
- **Read:** View all recipes or a single recipe.
- **Update:** Modify existing recipes.
- **Delete:** Remove recipes from the collection.
- User-friendly front-end interface to interact with the API.
- Responsive design with Tailwind CSS.
- Attractive UI using food psychology principles to enhance user experience.
  

## Technology stack

### Back-end: 
Node.js, Express, body-parser, CORS

### Front-end:
HTML, CSS (Tailwind CSS), JavaScript


## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/recipe-collection-api.git
   cd recipe-collection-api
2. **Install dependencies:**
   ```bash
   npm install

3. **Start the server:**
   ```bash
   node server.js

4. **Open your browser and navigate to:** http://localhost:3000


## API Endpoints

- **GET /api/recipes**
  - Retrieve all recipes.
  - Response: JSON array of recipe objects.

- **GET /api/recipes/:id**
  - Retrieve a single recipe by ID.
  - Response: JSON object of the requested recipe.

- **POST /api/recipes**
  - Create a new recipe.
  - Request body: JSON object with `name`, `ingredients`, `instructions`, and `cuisine`.
  - Response: JSON object of the created recipe.

- **PUT /api/recipes/:id**
  - Update an existing recipe by ID.
  - Request body: JSON object with updated `name`, `ingredients`, `instructions`, and `cuisine`.
  - Response: JSON object of the updated recipe.

- **DELETE /api/recipes/:id**
  - Delete a recipe by ID.
  - Response: 204 No Content.


