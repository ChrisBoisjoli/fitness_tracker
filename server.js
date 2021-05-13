const express = require("express");
const mongoose = require("mongoose");
const logger = require('morgan');

const app = express();

// setting up PORT
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

// Express Body Parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup Public Folder
app.use(express.static("public"));

// Require Routes
// app.use(require("./routes/htmlRoutes"));
// app.use(require("./routes/apiRoutes"));

// Connect to Mongodb
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitnesstracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// Listener
app.listen(PORT, () => {
    console.log("App running on port 3000!");
});