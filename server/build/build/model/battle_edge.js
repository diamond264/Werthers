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

var battleEdgeSchma = new Schema({
    user1: { type: Schema.Types.ObjectId, ref: 'User' },
    user2: { type: Schema.Types.ObjectId, ref: 'User' },
    created_at: Date,
    terminate_at: Date
});
exports.default = _mongoose2.default.model('battle_edge', battleEdgeSchma);