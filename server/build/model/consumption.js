'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var consumptionSchma = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    big_category: String,
    small_category: String,
    store: String,
    time: Date,
    price: Number,
    cache: String,
    name: String
});
exports.default = _mongoose2.default.model('consumption', consumptionSchma);