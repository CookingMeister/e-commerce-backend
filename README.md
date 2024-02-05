# e-commerce-backend

[![badge](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/mit)

## Description

An Express.js back end for an e-commerce site using Sequelize and MySQL2 to interact with a MySQL database. Environment variables for the database connection are stored in an .env file using dotenv for added security.

## Installation

Download or clone git repository. Run `npm i` to install the app. Run `npm run schema` to create mySQL database. Run `npm run seed` to seed the db. Run `npm start` to start the application on localhost port 3000.

## Usage

Basic CRUD commands are available for this backend app. Test GET, POST, PUT and DELETE routes for `api/products, api/tags, api/categories` as well as `/:id` for each of these endpoints using Postman or Insomnia. Status codes are also returned for each of these routes.

## Demo

Links to video demos of the app can be found [here](https://drive.google.com/file/d/1y_esQCzLIP0MYfziVQNAdqI7HVvXByVg/view?usp=sharing) for installation and [here](https://drive.google.com/file/d/1HU6C5AWw85HD91a1MfhV_EJkFylIYdjV/view?usp=sharing) for usage.

## Credits

Starter source code for this ORM application was provided by edX Boot Camps and can be found [here](https://github.com/coding-boot-camp/fantastic-umbrella). The challenge was to build the back end for an e-commerce site by taking a working Express.js API and configure it to use Sequelize to interact with a MySQL database.
Class notes and exercises were referenced for Sequelize Model examples. Jest documentation was referenced for testing. W3Schools and MDN Web Docs were invaluable assets for examples and best practices for all other topics.

## Tests

Testing is done with Jest and Supertest. In the root directory run `npm test`.

## Questions

If you have any questions about this project, please contact me at [LinkedIn](https://www.linkedin.com/in/shawn-meister-bb646b29a/). More of my work can be viewed at [GitHub](https://github.com/CookingMeister).

## License

[![badge](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/mit)

This project is licensed under the MIT license.
