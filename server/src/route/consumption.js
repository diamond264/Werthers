import express from 'express';
import { Consumption, User } from '../model';

const router = express.Router();

router.get('/all', function(req, res){
		console.log("request to /api/consumption/all");
		Consumption.find(function(err, consumptions){
			if (err) return res.status(500).send({error: 'database failure'});
			return res.json(consumptions);
		})
	})

router.get('/:email', function(req, res){
		console.log("request to /api/consumption"+req.params.email);

		User.findOne({ email: req.params.email }, (err, user) => {
			if (err) return res.status(500).json({error: err});
			if (!user) return res.status(404).json({error: 'no such user exists'});
		});

		Consumption.find({ email: req.params.email }, (err, consumptions) => {
			if (err) return res.status(500).json({error: err});
			return res.json(consumptions);
		});
	})

router.get('/:email/from/:start/to/:end', function(req, res){
		console.log("request to /api/"+req.params.email+req.params.start+req.params.end);

		let start_year = parseInt(req.params.start.substring(0,4))
		let start_month = parseInt(req.params.start.substring(4,6))
		let start_date = parseInt(req.params.start.substring(6,8))
		let start_day = new Date(start_year, start_month, start_date)

		let end_year = parseInt(req.params.end.substring(0,4))
		let end_month = parseInt(req.params.end.substring(4,6))
		let end_date = parseInt(req.params.end.substring(6,8))
		let end_day = new Date(end_year, end_month, end_date)

		User.findOne({email: req.body.email }, (err, user) => {
			if (err) return res.status(500).json({error: err});
			if (!user) return res.status(404).json({error: 'no such user exists'});
		});

		Consumption.find({ email: req.params.email, time: {$gte: start_day, $lt: end_day} }, (err, consumptions) => {
			if (err) return res.status(500).json({error: err});
			return res.json(consumptions);
		});
	})

router.post('/', function(req, res){
		console.log("request to /api/consumption");

		let { email, big_category, small_category, store, price, cash, name } = req.body;
		User.findOne({ email: req.body.email }, (err, user) => {
			if (err) return res.status(500).send({error: 'database failure'});
			if (!user) return res.status(400).json({
                    //error: "USER_NOT_EXIST",
                    code: "1",
                    data: null
                });

         	let consumption = new Consumption({ big_category, small_category, store, price, cash, name, email });
         	consumption.time = new Date();

         	consumption.save(err => {
         		if (err) return res.status(500).send({error: 'save failure'});
         		return res.json({success: true});
         	});
		});
	})

export default router;