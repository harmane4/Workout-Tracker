const Workout = require("../models/workout.js");
const router = require.Router();

// Create a new workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
      console.log("new workout", dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create.then(data);
});

// Create a new workout range
router.post("/api/workouts/range", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Update existing workout
router.put("/api/workouts/:id", (req, res) => {
  const { _id } = req.params;

  Workout.findById(_id).then(console.log);
});

// Find all workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
      console.log("all workouts", dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Find all workouts in range
router.get("/api/workouts/range", (req, res) => {});

module.exports = router;