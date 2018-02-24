'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Schema = _mongoose2.default.Schema;

var friendEdgeSchma = new Schema({
    user1: { type: Schema.Types.ObjectId, ref: 'User' },
    user2: { type: Schema.Types.ObjectId, ref: 'User' },
    status: String
});

exports.default = _mongoose2.default.model('friend_edge', friendEdgeSchma);