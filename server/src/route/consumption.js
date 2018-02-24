import express from 'express';
import { Consumption } from '../model';

const router = express.Router();

router.get('/consumption', function(req, res){
		console.log("request to /api/consumption/all");
		Consumption.find(function(err, consumptions){
			if (err) return res.status(500).send({error: 'database failure'});
			res.json(consumptions);
		})
	})

router.post('/register', function(req, res){
		console.log("request to /api/consumption/register");

		Consumption.find(function(err, consumptions){
			if (err) return res.status(500).send({error: 'database failure'});
		})

		var newuser = New user;
		newuser.email = req.body.email;
		newuser.name = req.body.name;
		newuser.nickname = req.body.nickname;
	})