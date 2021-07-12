const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((res) => console.log(`"MONGO": ${res.connection.host}`));

// routes
require("./routes/api.js")(app);
require("./routes/HTMLroutes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
