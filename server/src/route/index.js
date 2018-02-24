import express from 'express';
import user from './user';
import friend_edge from './friend_edge';
import battle_edge from './battle_edge';
import group_edge from './group_edge';
import consumption from './consumption';

const router = express.Router();

router.use('/user', user);
router.use('/friend_edge', friend_edge)
router.use('/battle_edge', battle_edge)
router.use('/group_edge', group_edge)
router.use('/consumption', consumption)

export default router;
