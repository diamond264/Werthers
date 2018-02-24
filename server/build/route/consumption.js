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
	console.log("request to /api/consumption/all");
	_model.Consumption.find(function (err, consumptions) {
		if (err) return res.status(500).send({ error: 'database failure' });
		return res.json(consumptions);
	});
});

router.get('/:email', function (req, res) {
	console.log("request to /api/consumption" + req.params.email);

	_model.User.findOne({ email: req.params.email }, function (err, user) {
		if (err) return res.status(500).json({ error: err });
		if (!user) return res.status(404).json({ error: 'no such user exists' });
	});

	_model.Consumption.find({ email: req.params.email }, function (err, consumptions) {
		if (err) return res.status(500).json({ error: err });
		return res.json(consumptions);
	});
});

router.get('/:email/from/:start/to/:end', function (req, res) {
	console.log("request to /api/" + req.params.email + req.params.start + req.params.end);

	var start_year = parseInt(req.params.start.substring(0, 4));
	var start_month = parseInt(req.params.start.substring(4, 6));
	var start_date = parseInt(req.params.start.substring(6, 8));
	var start_day = new Date(start_year, start_month, start_date);

	var end_year = parseInt(req.params.end.substring(0, 4));
	var end_month = parseInt(req.params.end.substring(4, 6));
	var end_date = parseInt(req.params.end.substring(6, 8));
	var end_day = new Date(end_year, end_month, end_date);

	console.log(start_day);

	_model.User.findOne({ email: req.body.email }, function (err, user) {
		if (err) return res.status(500).json({ error: err });
		if (!user) return res.status(404).json({ error: 'no such user exists' });
	});

	_model.Consumption.find({ email: req.params.email, time: { $gte: start_day, $lt: end_day } }, function (err, consumptions) {
		if (err) return res.status(500).json({ error: err });
		return res.json(consumptions);
	});
});

router.post('/', function (req, res) {
	console.log("request to /api/consumption");

	var _req$body = req.body,
	    email = _req$body.email,
	    big_category = _req$body.big_category,
	    small_category = _req$body.small_category,
	    store = _req$body.store,
	    price = _req$body.price,
	    cache = _req$body.cache,
	    name = _req$body.name;

	_model.User.findOne({ email: req.body.email }, function (err, user) {
		if (err) return res.status(500).send({ error: 'database failure' });
		if (!user) return res.status(400).json({
			//error: "USER_NOT_EXIST",
			code: "1",
			data: null
		});

		var consumption = new _model.Consumption({ big_category: big_category, small_category: small_category, store: store, price: price, cache: cache, name: name, email: email });
		consumption.time = new Date();

		consumption.save(function (err) {
			if (err) return res.status(500).send({ error: 'save failure' });
			return res.json({ success: true });
		});
	});
});

exports.default = router;