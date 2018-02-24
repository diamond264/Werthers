import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const consumptionSchma = new Schema({
    email: String,
    big_category: String,
    small_category: String,
    store: String,
    time: Date,
    price: Number,
    cash: String,
    name: String
});
export default mongoose.model('Consumption', consumptionSchma);