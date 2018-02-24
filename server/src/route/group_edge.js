import express from 'express';
import { GroupEdge, User } from '../model';

const router = express.Router();

router.get('/all', function(req, res){
		console.log("request to /api/group_edge/all");
		GroupEdge.find(function(err, groupedges){
			if (err) return res.status(500).send({error: 'database failure'});
			return res.json(groupedges);
		})
	})

router.get('/:email', function(req, res){
		console.log("request to /api/group_edge"+req.params.email);

		User.findOne({ email: req.params.email }, (err, user) => {
			if (err) return res.status(500).json({error: err});
			if (!user) return res.status(404).json({error: 'no such user exists'});
		});

		let email = req.params.email

		GroupEdge.find({ $or: [{user1: email}, {user2: email}, {user3: email}, {user4: email}, {user5: email}, {user6: email}] }, (err, groupedges) => {
			if (err) return res.status(500).json({error: err});
			return res.json(groupedges);
		});
	})

// router.get('/:email/from/:start/to/:end', function(req, res){
// 		console.log("request to /api/"+req.params.email+req.params.start+req.params.end);

// 		let start_year = parseInt(req.params.start.substring(0,4))
// 		let start_month = parseInt(req.params.start.substring(4,6))
// 		let start_date = parseInt(req.params.start.substring(6,8))
// 		let start_day = new Date(start_year, start_month, start_date)

// 		let end_year = parseInt(req.params.end.substring(0,4))
// 		let end_month = parseInt(req.params.end.substring(4,6))
// 		let end_date = parseInt(req.params.end.substring(6,8))
// 		let end_day = new Date(end_year, end_month, end_date)

// 		User.findOne({email: req.body.email }, (err, user) => {
// 			if (err) return res.status(500).json({error: err});
// 			if (!user) return res.status(404).json({error: 'no such user exists'});
// 		});

// 		Consumption.find({ email: req.params.email, time: {$gte: start_day, $lt: end_day} }, (err, consumptions) => {
// 			if (err) return res.status(500).json({error: err});
// 			return res.json(consumptions);
// 		});
// 	})

router.post('/', function(req, res){
		console.log("request to /api/group_edge");

		let { user1, user2, user3, user4, user5, user6, size } = req.body;
		User.findOne({ email: req.body.user1 }, (err, user) => {
			if (err) return res.status(500).send({error: 'database failure'});
			if (!user) return res.status(400).json({
                    //error: "USER_NOT_EXIST",
                    code: "1",
                    data: null
                });

         	let groupedge = new GroupEdge({ user1, user2, user3, user4, user5, user6, size });
         	groupedge.created_at = new Date();

         	groupedge.save(err => {
         		if (err) return res.status(500).send({error: 'save failure'});
         		return res.json({success: true});
         	});
		});
	})

export default router;