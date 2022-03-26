// enable server to link to .env enviornemental file
require('dotenv').config();

// import the necessary packages to start the server
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

//initialized express app
const app = express();

// launch the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Start on Port: ${port}`));