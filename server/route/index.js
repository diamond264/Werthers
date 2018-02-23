import express from 'express';

const router = express.Router();

router.use('/user', user);
router.use('/friend_edge', friend_edge)
router.use('/battle_edge', battle_edge)
router.use('/group_edge', group_edge)
router.use('/consumption', consumption)

export default router;
