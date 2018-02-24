'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/user', user);
router.use('/friend_edge', friend_edge);
router.use('/battle_edge', battle_edge);
router.use('/group_edge', group_edge);
router.use('/consumption', consumption);

exports.default = router;