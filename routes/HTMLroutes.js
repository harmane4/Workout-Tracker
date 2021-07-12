const path = require("path");

//HTML ROUTES
module.exports = function (app) {
  // Workout
  app.get("/exercise", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
  );

  // Homepage
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/index.html"))
  );

  // Stats
  app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/stats.html"))
  );
};
