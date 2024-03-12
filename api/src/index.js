const express = require("express");
require("dotenv").config();

const app = express();
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log("%s listening at", PORT); // eslint-disable-line no-console
});
