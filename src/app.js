var express = require('express');
var app = express();

app.listen(process.env.EXPRESS_PORT, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`server is running on port ${process.env.EXPRESS_PORT}`);
  })
  module.exports = app;