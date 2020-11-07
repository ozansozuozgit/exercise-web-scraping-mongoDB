require('dotenv').config();

const pageURL = 'https://www.bodybuilding.com/exercises/finder';

const mongoURI = process.env.MONGOURI;

module.exports = { pageURL, mongoURI };
