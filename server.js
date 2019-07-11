const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8055;

app.use(cors());
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://camoren:Datelica2019@ds151007.mlab.com:51007/heroku_v040vd4w");

app.get("/heartbeat", (req, res) =>
  res.send({
    dateTime: new Date().toJSON()
  })
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
