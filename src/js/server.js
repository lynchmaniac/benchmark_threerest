"use strict"
import express from "express";
var bodyParser = require('body-parser');
import Service from "./service";
import Method from "./methods/method";
import * as serviceLoader from"./service-loader";
import serviceArtistes from"./routes/artistes";

// Database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk(process.argv[2]);

//var artistes = require('./routes/artistes');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Make our db accessible to our router
app.use(function(req,res,next){
     req.db = db;
     next();
});


//app.use('/artistes', artistes);







serviceLoader.loadService(app, new serviceArtistes());

app.listen(3000, () => {console.log("Express start...");});
