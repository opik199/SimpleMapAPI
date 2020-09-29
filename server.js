const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// var corsOptions = {
  // origin: "http://localhost:8080"
// };

// app.use(cors(corsOptions));
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
  // console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Simple API" });
});

require("./app/routes/routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});