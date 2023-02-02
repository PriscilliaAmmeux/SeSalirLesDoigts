## Concept

"Se salir les doigts" is a personal project representing children's activities sorted by season or by theme.

## Setup & Use

Create a file .env in front and back. Use the .env.sample for to help you.

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated

### Dependencies

- "axios": Used for making HTTP requests.
- "node-sass": Used for compiling SCSS files into CSS.
- "prop-types": Used for checking the data types of React component props.
- "react": A JavaScript library for building user interfaces.
- "react-dom": Used for rendering React components into the DOM.
- "react-icons": A library of icons for use in React applications.
- "react-router-dom": Used for routing in React applications.
- "swiper": A library for creating touch-based sliders.
- "template-fullstack": A pre-built or pre-configured setup for building full-stack web applications.
- "cors": Used for handling Cross-Origin Resource Sharing (CORS) requests.
- "dotenv": Used for loading environment variables from a .env file.
- "express": A fast, minimalist web framework for Node.js.
- "mysql2": A library for performing queries and managing data in a MySQL database.
