import express from 'express';
import user from '../model';

const router = express.Router();

router.get('/', function(req, res){
		console.log("request to /api/user");
		user.find(function(err, users){
			if (err) return res.status(500).send({error: 'database failure'});
			res.json(users);
		})
	})

router.post('/signup', function(req, res){
		console.log("request to /api/signup");

		user.findeOne({ email: req.body.email }, (err, exist) => {
			if (err) return res.status(500).send({error: 'database failure'});
			if (exist) {
				return res.status(400).json({
	                error: "ALREADY_EXIST",
	                code: "0",
	                data: null
            	});
			}
		});

		var newuser = New user;
		newuser.email = req.body.email;
		newuser.name = req.body.name;
		newuser.nickname = req.body.nickname;
	})