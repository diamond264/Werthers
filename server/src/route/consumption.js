import express from 'express';
import { Consumption, User } from '../model';

const router = express.Router();

router.get('/consumption', function(req, res){
		console.log("request to /api/consumption/all");
		Consumption.find(function(err, consumptions){
			if (err) return res.status(500).send({error: 'database failure'});
			return res.json(consumptions);
		})
	})

router.get('/:email/consumption', function(req, res){
		console.log("request to /api/"+req.params.email+"consumption/all");

		User.findOne({ email: req.params.email }, (err, user) => {
			if (err) return res.status(500).json({error: err});
			if (!user) return res.status(404).json({error: 'no such user exists'});
		});

		Consumption.find({ email: req.params.email }, (err, consumptions) => {
			if (err) return res.status(500).json({error: err});
			return res.json(consumptions);
		});
	})

router.post('/', function(req, res){
		console.log("request to /api/consumption/register");

		let { user_id, big_category, small_category, store, price, cache, name } = req.body;
		User.findById(user_id, (err, user) => {
			if (err) return res.status(500).send({error: 'database failure'});
			if (!user) return res.status(400).json({
                    //error: "USER_NOT_EXIST",
                    code: "1",
                    data: null
                });

         	let consumption = new Consumption({ big_category, small_category, store, price, cache, name });
         	consumption.user = user._id;
         	consumption.time = new Date();

         	consumption.save(err => {
         		if (err) return res.status(500).send({error: 'save failure'});
         		return res.json({success: true});
         	});
		});
	})

export default router;