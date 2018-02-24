'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
    name: String,
    nickname: String,
    email: String,
    password: String,
    hash: String,
    ranking: Number,
    level: Number,
    exp: Number,
    gold: Number,
    consumption: Number,
    age: Date,
    gender: String,
    budget: Number,
    job: String,
    win: Number,
    tie: Number,
    lose: Number,
    group_message: String,
    battle_message: String,
    group_status: String,
    battle_status: String
});

userSchema.methods.generateHash = function (password) {
    return _bcryptjs2.default.hashSync(password, 10);
};

userSchema.methods.validateHash = function (password) {
    return _bcryptjs2.default.compareSync(password, this.password);
};

exports.default = _mongoose2.default.model('User', userSchema);