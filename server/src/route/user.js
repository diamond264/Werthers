import express from 'express';
import { User } from '../model';

const router = express.Router();

router.post('/signup', (req, res) => {
    let { email, name, nickname, age, gender, budget, job, password } = req.body;
    User.findOne({ email: req.body.email }, (err, exist) => {
        if (err) throw err;
        if (exist) {
        	console.log(req.body.email);
            return res.status(400).json({
                error: "ALREADY_EXIST",
                code: "0",
                data: null
            });
        };

        let user = new User({ email, name, nickname, age, gender,budget, job, password });
        user.save((err) => {
            if (err) throw err;
            console.log(user.email);
            return res.json({ 
                code: "success", 
                data: null,
                error: null
            });
        });
    });
});

router.post('/signin', (req, res) => {
    let { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.status(400).json({
                //error: "LOGIN_FAILED",
                code: "0",
                data: null
            });
        };
        if (!user.validateHash(password)) {
            return res.status(400).json({
                //error: "LOGIN_FAILED",
                code: "0",
                data: null
            });
        };
        req.session.userInfo = {
            _id: user._id,
            email: user.email
        };
        return res.json({ 
            code: "success",
            data: null,
        });
    });
});

router.get('/all', function(req, res){
  console.log("request to /api/user");
  User.find(function(err, users){
    if (err) return res.status(500).send({error: 'database failure'});
    return res.json(users);
  });
});

router.get('/:email', function(req, res){
  console.log("request to /api/user");
  User.findOne({ email: req.params.email }, function(err, users){
    if (err) return res.status(500).send({error: 'database failure'});
    return res.json(users);
  });
});


export default router;