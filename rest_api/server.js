// will add all env variable from ".env" file to node process.env
require("dotenv").config();

// do all other stuff
const express = require("express");
const path = require("path");
const cors = require('cors');
const apiRouter = require('./app/router/API')

const server = express();

// export "assets" folder as public folder
server.use(express.static(path.resolve(__dirname, "assets")));
server.use(express.json());
server.use(cors({
  origin: '*'
}));


// API ROUTER
server.use('/api', apiRouter)

// fallback to error page
server.use("*", function (req, res) {
  res.send('not found');
});

// start server
const port = 3000;
server.listen(port, function () {
  console.log(`Server running at http://localhost:${port}`);
});
