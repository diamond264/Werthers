'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var groupEdgeSchma = new Schema({
   size: Number,
   user1: String,
   user2: String,
   user3: String,
   user4: String,
   user5: String,
   user6: String,
   rank1: String,
   rank2: String,
   rank3: String,
   rank4: String,
   rank5: String,
   rank6: String,
   created_at: Date,
   terminate_at: Date
});
//default 값으로 널 줘야된다
exports.default = _mongoose2.default.model('GroupEdge', groupEdgeSchma);