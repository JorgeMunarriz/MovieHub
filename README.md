# MovieHub 🎬


Welcome to the MovieHub project, an application to keep track of the movies you are watching. This project is designed to help you learn and practice your backend development skills. Throughout the project, you will be adding functionalities and refactoring your code as you learn new concepts.

You can visit this website at : https://react-moviehub-frontend.vercel.app/


![homepage_desktop.png](client/src/assets/img/desktop_image.png)


## Responsive design

### Mobile Version
![Responsive_design.png](client/src/assets/img/Responsive_design.png)


### Pc Version

![desktop_mac_image.png](client/src/assets/img/desktop_mac_image.png)

## Project Description

MovieHub is an application that allows you to manage a list of movies. Each movie in the application has a name, a image, a score, and a genre. You will be able to perform CRUD (Create, Read, Update, Delete) operations on these movies.

The frontend of the application is built with React + Vite + Typescript. 
You can show it at https://github.com/JorgeMunarriz/MovieHub

In the user interface, you will be able to view all added movies in a list. Each movie will be displayed with its name, poster, score, and genre. There will be an option to add new movies through a modal or a new page, where you can enter the movie's name, upload a poster image, assign a score, and select a genre. You will also have the option to update the data of existing movies or remove them from the list.

- The Backend of the application is built with Node + Mongoose + typescript + MongoDB + Prisma + PostgreSQL + Cloudinary. 

Although the frontend of the application is important for user interaction, the main focus of this project is the backend. As you progress through the project, you will learn and apply different backend technologies and concepts, including Node.js, Express, MongoDB, Prisma, PostgreSQL, Auth0, and Cloudinary. You will learn how these technologies work together to support the functionalities of the application and provide a smooth user experience.

`#react` `#express` `#vite` `#node` `#typescript` `#postgres` `#prisma` `#cloudinary` `lazy-loading` `skeleton` `styled-components` `#backend` `#assembler-institute-of-technology` `#master-in-software-engineering` `#jorgemunarrizdev.com` 

## Requirements

- Install Node.js and npm on your local machine, and Code Editor like Visual Code .
1. **NODE**: https://nodejs.org/es/download
2. **NPM**:  https://www.npmjs.com/package/npm
3. **Visual Code**: https://code.visualstudio.com/download

- Have basic knowledge of JavaScript and TypeScript.
- Familiarity with the MVC design pattern.
- Basic knowledge of MongoDB and Mongoose.
- Familiarity with Prisma.
- Basic knowledge of MongoDB.
- Familiarity with Prisma.
- Basic knowledge of PostgreSQL and MongoDB.
- Understanding of one-to-many and many-to-many relationships.
- Familiarity with Auth0.
- Basic knowledge of Express middleware.
- Familiarity with Cloudinary.
- Basic knowledge of file handling in Node.js.


## Installation

To get the MovieHub project up and running on your local machine, follow these steps:

Clone the repository from GitHub:


```bash
git clone https://github.com/JorgeMunarriz/MovieHub.git
```

```bash
cd MovieHub
```
```bash
cd client 
```
Install the project dependencies:

```bash
npm install
```
or 
```bash
npm i
```
or 
```bash
pnpm install
```
or 
```bash
yarn install
```

and you must be install the backend dependencies: 

```bash
cd server
```
```bash
npm install
```
or 
```bash
npm i
```

## Setting up Environment Variables

Both the client and server applications of Moviehub rely on environment variables stored in .env files for configuration. Before you start using the app, make sure to create a .env file in the root directory of each component (client and server) and provide the necessary values.

### Client Environment Variables

In the client directory, create a .env file with the following variables:

```bash
VITE_API=YourLocalHostPort
VITE_AUTH0_DOMAIN=yourDomainAuth0.com
VITE_AUTH_CLIENT_ID=YourClientID
VITE_AUTH0_CLIENT_SECRET=YourClientSecretAuth0
VITE_AUTH_AUDIENCE=YourAudienceAuth0
```

Replace the placeholder values with your specific configuration details.

### Server Environment Variables

In the server directory, create a .env file with the following variables:

```bash
PORT=YourPORT
MONGO_DB_URI=mongodb+srv://yourcluster@dbcluster.yourIdCluster.mongodb.net/yourDatabase
MONGO_CLUSTER_URI=mongodb+srv://yourcluster@dbcluster.yourIdCluster.mongodb.net/yourDatabase
DATABASE_URI=postgresql://postgres:yourPasswordPGAdmin@localhost:5432/yourDatabase?schema=public
DATA_SOURCE=mongodb??or/postgresql
APP_ORIGIN=http://yourLocalHost
AUTH0_AUDIENCE=http://yourLocalHost
AUTH0_ISSUER=https://yourAuth0Issuer.us.auth0.com/
CLOUDINARY_NAME=yourCloudinaryName
CLOUDINARY_API_KEY=yourCloudinaryApiKey
CLOUDINARY_API_SECRET=yourCloudinaryApiSecret
```

Again, ensure that you replace the placeholder values with your specific configuration details.

These environment variables are crucial for the proper functioning of the Moviehub app. Make sure to keep your actual sensitive information secure and never share it in your code repository. Users who clone your repository will need to create their own .env files with their unique values for the app to work correctly.

## How to use




```bash
npm run test
```

test: This script is used to run automated tests. In this case, it seems that no specific tests have been specified, and instead, it displays an error message and exits the process with an exit code of 1. You can add your automated tests here if you have any.

```bash
npm run commit
```
commit: This script adds all changes in the current directory to the staging area of Git and makes a commit. You can use this command to quickly commit all the changes you made. For example, you would run npm run commit to stage and commit the changes.

```bash
npm run dev
```
dev: This script is for local development. It uses nodemon to watch the .ts files in the src folder and restarts the server whenever it detects changes. ts-node executes the index.ts file, which means your application runs in development mode with TypeScript. To run this script, simply type npm run dev in your terminal.

```bash
npm run build
```

build: This script is responsible for compiling your TypeScript code into JavaScript. It uses rimraf to delete the dist folder (if it exists) and then uses tsc (TypeScript Compiler) to compile the TypeScript files in the src folder and generate the dist folder with the compiled JavaScript files. You can execute this script using npm run build.

```bash
npm run start
```

start: This script first runs the npm run build command, which compiles the TypeScript files into JavaScript in the dist folder. Then, it executes the index.js file located in the dist folder using node. In short, this script starts your application in production mode. To run this script, simply type npm start in your terminal.

Remember that to be able to run these scripts, you need to be in the directory of your project and have Node.js installed. Then, simply type the corresponding command in your terminal to execute each script according to your needs. For example, npm run dev for development mode or npm start for production mode.

## Dependencies

The MovieHub project utilizes several libraries and technologies. Below are the main dependencies used in the project:


### Frontend Dependencies:

React: A popular JavaScript library for building user interfaces.
Vite: Vite is a development environment for modern web applications based on JavaScript and TypeScript. It stands out for its speed and efficiency in the process of development and construction of frontend projects.
Auth0 React SDK: An SDK that integrates Auth0 authentication into the React application.
React Router: A library for handling routing within the React application.


### Backend Dependencies:

Express: A fast and minimal web application framework for Node.js.
Prisma: An ORM used for database access and migration.
Auth0 Express Middleware: Middleware for Express to handle Auth0 authentication.
Cloudinary: A cloud-based service for storing and transforming media content.


#### Database:

MongoDB: A NoSQL database used to store movie data (prior to PostgreSQL migration).
PostgreSql: a 
#### Dev Dependencies:

TypeScript: A typed superset of JavaScript used to add type safety.
Nodemon: A utility that automatically restarts the Node.js server on file changes (for development).
ESLint: A tool for identifying and reporting on patterns found in JavaScript code.
Prettier: A code formatter used to enforce code style consistency.

## Social Media 


You can find me on LinkedIn, Facebook, and view my other projects on GitHub using the following links:

1. **LinkedIn**: https://www.linkedin.com/in/jorgemunarrizguti%C3%A9rrezsolana/
2. **Facebook**: https://www.facebook.com/profile.php?id=100010085599620
3. **GitHub**: https://github.com/JorgeMunarriz


## Support Resources


- [Prisma](https://www.prisma.io/)
- [MongoDB](https://www.mongodb.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Cloudinary](https://cloudinary.com/)
- [express-fileupload](https://www.npmjs.com/package/express-fileupload)
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Auth0](https://auth0.com/)
- [express-oauth2-jwt-bearer](https://www.npmjs.com/package/express-oauth2-jwt-bearer)
- [Auth0 React SDK](https://auth0.com/docs/quickstart/spa/react)
- [react-content-loader](https://www.npmjs.com/package/react-content-loader)



### LightHouse test

![Test_Lighthouse.png](client/src/assets/img/Test_Lighthouse.png)


Remember, the goal of this project is to learn and practice. Don't hesitate to ask for help if you get stuck.
Good luck!