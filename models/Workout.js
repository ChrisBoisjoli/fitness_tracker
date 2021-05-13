const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;