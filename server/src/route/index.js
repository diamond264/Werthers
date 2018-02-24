import express from 'express';
import user from './user';
import friend_edge from './friend_edge';
import battle_edge from './battle_edge';
import group_edge from './group_edge';
import consumption from './consumption';

const router = express.Router();

router.get('/', function(req, res){
		console.log("request to /");
		res.render("index.html");
	})

router.get('/api', function(req, res){
		console.log("request to /api");
		res.render("api_list.html");
	})

router.use('/api/user', user);
router.use('/api/friend_edge', friend_edge)
router.use('/api/battle_edge', battle_edge)
router.use('/api/group_edge', group_edge)
router.use('/api/consumption', consumption)

export default router;
