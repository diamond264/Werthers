let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let multer = require('multer')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;


app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

let db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/Werthers');

let Users = require('./model/user');
let Consumptions = require('./model/consumption')
let FriendEdges = require('./model/friend_edge')
let GroupEdges= require('./model/group_edge')
let BattleEdges = require('./model/battle_edge')

let router = require('./route')(app, Users, Consumptions, FriendEdges, GroupEdges, BattleEdges)

let server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});