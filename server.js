const express = require("express");

const mongoose = require("mongoose");
const path = require("path");


const PORT = process.env.PORT || 3000;

const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});



app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});

// routes
app.use(require("./routes/apiRoutes.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

