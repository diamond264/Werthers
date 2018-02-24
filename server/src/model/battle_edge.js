import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const battleEdgeSchma = new Schema({
    user1: { type: Schema.Types.ObjectId, ref: 'User' },
    user2: { type: Schema.Types.ObjectId, ref: 'User' },
    created_at: Date,
    terminate_at: Date,
});
export default mongoose.model('battle_edge', battleEdgeSchma);