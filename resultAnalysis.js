const data = require('./data');
const { mongoURI } = data;

const mongoose = require('mongoose');
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const compareAndSaveResults = (dataObj) => {
  try {
    const Exercises = require('./models/Exercises');
    Exercises.find({}, function (err, exerciseList) {
      return exerciseList;
    })
      .then((returnedExerciseList) => {
        if (!returnedExerciseList.length) {
          console.log(`A new data was created:\n${JSON.stringify(dataObj)} `);
          const newExercise = Exercises(dataObj);
          return newExercise.save().catch((err) => console.log(err));
        }

        const { exerciseList, amount } = dataObj;

        const dbAmount = returnedExerciseList[0].amount;
        const dbID = returnedExerciseList[0]._id;
        const dbExercises = returnedExerciseList[0].exerciseList;

        let catchDifference = false;

        if (dbAmount !== amount) {
          catchDifference = true;
        } else {
          dbExercises.forEach((exercise, i) => {
            if (exercise !== exerciseList[i]) catchDifference = true;
          });
        }

        if (catchDifference) {
          console.log('A new evidence was found, updating database...');
          mongoose.set('useFindAndModify', false);
          return Exercises.findOneAndUpdate({ _id: dbID }, dataObj);
        }
        console.log('File is equal to page, no news to report');
      })
      .then(() => mongoose.disconnect());
  } catch (err) {
    console.error(err);
  }
};

module.exports = compareAndSaveResults;
