const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route.js');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use('/',route)
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://soumya0985:ZtoqUK1lBKP7jUtw@cluster0.lwz2n.mongodb.net/group22-database?authSource=admin&replicaSet=atlas-12u83k-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
    useNewUrlParser: true})
.then(() => console.log('MongoDb is connected'))
.catch(err => console.log('Connection error'))

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + 
    (process.env.PORT || 3000));
});