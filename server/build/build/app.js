'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer = require('multer');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
  console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/Werthers');

var Users = require('./model/user');
var Consumptions = require('./model/consumption');
var FriendEdges = require('./model/friend_edge');
var GroupEdges = require('./model/group_edge');
var BattleEdges = require('./model/battle_edge');

var router = require('./route')(app, Users, Consumptions, FriendEdges, GroupEdges, BattleEdges);

var server = app.listen(port, function () {
  console.log("Express server has started on port " + port);
});