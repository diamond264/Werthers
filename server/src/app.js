import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import api from './route'

const app = express();
const port = 3000;
const devport = 4000;

let db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log("Connected to mongod server");
});

mongoose.connect('mongodb://localhost/Werthers');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', api)

if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
}

let server = app.listen(port, () => {
	console.log("Express server has started on port " + port);
});