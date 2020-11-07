const data = require('./data');
const { mongoURI } = data;

const mongoose = require('mongoose');
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const compareAndSaveResults = (dataObj) => {
  
};

module.exports = compareAndSaveResults;
