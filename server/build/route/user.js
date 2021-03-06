'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _model = require('../model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/signup', function (req, res) {
    var _req$body = req.body,
        email = _req$body.email,
        name = _req$body.name,
        nickname = _req$body.nickname,
        age = _req$body.age,
        gender = _req$body.gender,
        budget = _req$body.budget,
        job = _req$body.job,
        password = _req$body.password;

    _model.User.findOne({ email: req.body.email }, function (err, exist) {
        if (err) throw err;
        if (exist) {
            console.log(req.body.email);
            return res.status(400).json({
                error: "ALREADY_EXIST",
                code: "0",
                data: null
            });
        };

        var user = new _model.User({ email: email, name: name, nickname: nickname, age: age, gender: gender, budget: budget, job: job, password: password });
        user.save(function (err) {
            if (err) throw err;
            console.log(user.email);
            return res.json({
                code: "success",
                data: null,
                error: null
            });
        });
    });
});

router.post('/signin', function (req, res) {
    var _req$body2 = req.body,
        email = _req$body2.email,
        password = _req$body2.password;

    _model.User.findOne({ email: email }, function (err, user) {
        if (err) throw err;
        if (!user) {
            return res.status(400).json({
                //error: "LOGIN_FAILED",
                code: "0",
                data: null
            });
        };
        if (!user.validateHash(password)) {
            return res.status(400).json({
                //error: "LOGIN_FAILED",
                code: "0",
                data: null
            });
        };
        req.session.userInfo = {
            _id: user._id,
            email: user.email
        };
        return res.json({
            code: "success",
            data: null
        });
    });
});

router.get('/all', function (req, res) {
    console.log("request to /api/user");
    _model.User.find(function (err, users) {
        if (err) return res.status(500).send({ error: 'database failure' });
        return res.json(users);
    });
});

router.get('/:email', function (req, res) {
    console.log("request to /api/user");
    _model.User.findOne({ email: req.params.email }, function (err, users) {
        if (err) return res.status(500).send({ error: 'database failure' });
        return res.json(users);
    });
});

exports.default = router;