'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var groupEdgeSchma = new Schema({
    user1: { type: Schema.Types.ObjectId, ref: 'User' },
    user2: { type: Schema.Types.ObjectId, ref: 'User' },
    user3: { type: Schema.Types.ObjectId, ref: 'User' },
    user4: { type: Schema.Types.ObjectId, ref: 'User' },
    user5: { type: Schema.Types.ObjectId, ref: 'User' },
    user6: { type: Schema.Types.ObjectId, ref: 'User' },
    created_at: Date,
    terminate_at: Date
});
//default 값으로 널 줘야된다
exports.default = _mongoose2.default.model('GroupEdge', groupEdgeSchma);