var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Mongo connection successful')
    })
    .catch((err) => {
        console.log(err);
        console.log('Mongo connection error');
    })

app.listen(process.env.EXPRESS_PORT, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`server is running on port ${process.env.EXPRESS_PORT}`);
})
module.exports = app;