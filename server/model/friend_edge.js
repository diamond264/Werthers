import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const friendEdgeSchma = new Schema({
    user1: { type: Schema.Types.ObjectId, ref: 'User' },
    user2: { type: Schema.Types.ObjectId, ref: 'User' },
    status: String
});

export default mongoose.model('friend_edge', friendEdgeSchma);