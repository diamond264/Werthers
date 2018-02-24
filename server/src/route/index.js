import express from 'express';
import User from './user';
// import FriendEdge from './friend_edge';
// import BattleEdge from './battle_edge';
import GroupEdge from './group_edge';
import Consumption from './consumption';

const router = express.Router();

router.get('/', function(req, res){
		console.log("request to /");
		res.render("./../view/index.html");
	})

router.get('/api', function(req, res){
		console.log("request to /api");
		res.render("api_list.html");
	})

router.use('/api/user', User);
// router.use('/api/friend_edge', FriendEdge)
// router.use('/api/battle_edge', BattleEdge)
router.use('/api/group_edge', GroupEdge)
router.use('/api/consumption', Consumption)

export default router;
