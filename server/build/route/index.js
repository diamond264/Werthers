'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _group_edge = require('./group_edge');

var _group_edge2 = _interopRequireDefault(_group_edge);

var _consumption = require('./consumption');

var _consumption2 = _interopRequireDefault(_consumption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import FriendEdge from './friend_edge';
// import BattleEdge from './battle_edge';
var router = _express2.default.Router();

router.get('/', function (req, res) {
		console.log("request to /");
		res.render("./../view/index.html");
});

router.get('/api', function (req, res) {
		console.log("request to /api");
		res.render("api_list.html");
});

router.use('/api/user', _user2.default);
// router.use('/api/friend_edge', FriendEdge)
// router.use('/api/battle_edge', BattleEdge)
router.use('/api/group_edge', _group_edge2.default);
router.use('/api/consumption', _consumption2.default);

exports.default = router;