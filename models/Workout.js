const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const option = { toJSON: { virtuals: true } };
const WorkoutSchema = new Schema({
    day: {
    type: Date,
    default: Date.now,
},
exercises: [
    {
        type: {
            type: String,
            require: true,
        },
        name: {
            type: String,
            require: true,
        },
        weight: {
            type: Number,
            require: true,
        },
        reps: {
            type: Number,
            require: true,
        },
        sets: {
            type: Number,
            require: true,
        },
        duration: {
            type: Number,
            require: true,
        },
        distance: {
            type: Number,
            require: true,
        },
    },
],

},option);

WorkoutSchema.virtual("totalDuration").get(function () {
	let totalDuration = 0;
	this.exercises.forEach((exercise) => {
		totalDuration += exercise.duration;
	});

	return totalDuration;
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;