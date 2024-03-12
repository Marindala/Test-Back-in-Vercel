const express = require("express");
require("dotenv").config();
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json())


const { PORT } = process.env;

app.listen(PORT, () => {
  console.log("%s listening at", PORT); // eslint-disable-line no-console
});
