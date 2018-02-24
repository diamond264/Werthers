import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const groupEdgeSchma = new Schema({
    user1: { type: Schema.Types.ObjectId, ref: 'User' },
    user2: { type: Schema.Types.ObjectId, ref: 'User' },
    user3: { type: Schema.Types.ObjectId, ref: 'User' },
    user4: { type: Schema.Types.ObjectId, ref: 'User' },
    user5: { type: Schema.Types.ObjectId, ref: 'User' },
    user6: { type: Schema.Types.ObjectId, ref: 'User' },
    created_at: Date,
    terminate_at: Date,
});
//default 값으로 널 줘야된다
export default mongoose.model('group_edge', groupEdgeSchma);