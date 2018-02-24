'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _consumption = require('./consumption');

var _consumption2 = _interopRequireDefault(_consumption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// import FriendEdge from './friend_edge';
// import BattleEdge from './battle_edge';
// import GroupEdge from './group_edge';


router.get('/', function (req, res) {
		console.log("request to /");
		res.render("index.html");
});

router.get('/api', function (req, res) {
		console.log("request to /api");
		res.render("api_list.html");
});

router.use('/api/user', _user2.default);
// router.use('/api/friend_edge', FriendEdge)
// router.use('/api/battle_edge', BattleEdge)
// router.use('/api/group_edge', GroupEdge)
router.use('/api/consumption', _consumption2.default);

exports.default = router;