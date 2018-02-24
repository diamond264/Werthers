'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _route = require('./route');

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 3000;
var devport = 4000;

var db = _mongoose2.default.connection;
db.on('error', console.error);
db.once('open', function () {
  console.log("Connected to mongod server");
});

_mongoose2.default.connect('mongodb://localhost/Werthers');

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/api', _route2.default);

if (process.env.NODE_ENV == 'development') {
  console.log('Server is running on development mode');
}

var server = app.listen(port, function () {
  console.log("Express server has started on port " + port);
});