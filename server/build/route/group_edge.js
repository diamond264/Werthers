'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _model = require('../model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/all', function (req, res) {
	console.log("request to /api/group_edge/all");
	_model.GroupEdge.find(function (err, groupedges) {
		if (err) return res.status(500).send({ error: 'database failure' });
		return res.json(groupedges);
	});
});

router.get('/:email', function (req, res) {
	console.log("request to /api/group_edge" + req.params.email);

	_model.User.findOne({ email: req.params.email }, function (err, user) {
		if (err) return res.status(500).json({ error: err });
		if (!user) return res.status(404).json({ error: 'no such user exists' });
	});

	var email = req.params.email;

	_model.GroupEdge.find({ $or: [{ user1: email }, { user2: email }, { user3: email }, { user4: email }, { user5: email }, { user6: email }] }, function (err, groupedges) {
		if (err) return res.status(500).json({ error: err });
		return res.json(groupedges);
	});
});

// router.get('/:email/from/:start/to/:end', function(req, res){
// 		console.log("request to /api/"+req.params.email+req.params.start+req.params.end);

// 		let start_year = parseInt(req.params.start.substring(0,4))
// 		let start_month = parseInt(req.params.start.substring(4,6))
// 		let start_date = parseInt(req.params.start.substring(6,8))
// 		let start_day = new Date(start_year, start_month, start_date)

// 		let end_year = parseInt(req.params.end.substring(0,4))
// 		let end_month = parseInt(req.params.end.substring(4,6))
// 		let end_date = parseInt(req.params.end.substring(6,8))
// 		let end_day = new Date(end_year, end_month, end_date)

// 		User.findOne({email: req.body.email }, (err, user) => {
// 			if (err) return res.status(500).json({error: err});
// 			if (!user) return res.status(404).json({error: 'no such user exists'});
// 		});

// 		Consumption.find({ email: req.params.email, time: {$gte: start_day, $lt: end_day} }, (err, consumptions) => {
// 			if (err) return res.status(500).json({error: err});
// 			return res.json(consumptions);
// 		});
// 	})

router.post('/', function (req, res) {
	console.log("request to /api/group_edge");

	var _req$body = req.body,
	    user1 = _req$body.user1,
	    user2 = _req$body.user2,
	    user3 = _req$body.user3,
	    user4 = _req$body.user4,
	    user5 = _req$body.user5,
	    user6 = _req$body.user6,
	    size = _req$body.size;

	_model.User.findOne({ email: req.body.user1 }, function (err, user) {
		if (err) return res.status(500).send({ error: 'database failure' });
		if (!user) return res.status(400).json({
			//error: "USER_NOT_EXIST",
			code: "1",
			data: null
		});

		var groupedge = new _model.GroupEdge({ user1: user1, user2: user2, user3: user3, user4: user4, user5: user5, user6: user6, size: size });
		groupedge.created_at = new Date();

		groupedge.save(function (err) {
			if (err) return res.status(500).send({ error: 'save failure' });
			return res.json({ success: true });
		});
	});
});

exports.default = router;