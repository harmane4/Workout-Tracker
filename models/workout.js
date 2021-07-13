const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a workout type",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a workout name",
      },
      duration: {
        type: Number,
        required: "Enter workout duration",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

// View the combined weight of multiple exercises from the past seven workouts on the stats page.

// https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/
// $addFields appends new fields to existing documents

// https://docs.mongodb.com/manual/reference/operator/aggregation/sum/

// Calculates and returns the sum of numeric values. $sum ignores non-numeric values.

// https://mongoosejs.com/docs/api.html#aggregate_Aggregate

// View the total duration of each workout from the past seven workouts on the stats page.

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
