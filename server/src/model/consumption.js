import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const consumptionSchma = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    big_category: String,
    small_category: String,
    store: String,
    time: Date,
    price: Number,
    cache: String,
    name: String
});
export default mongoose.model('Consumption', consumptionSchma);