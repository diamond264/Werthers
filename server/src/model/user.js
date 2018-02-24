import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    hash: String,
    ranking: Number,
    level: Number,
    exp: Number,
    gold: Number,
    consumption: Number,
    age: Date,
    gender: String,
    budget: Number,
    job: String,
    win: Number,
    tie: Number,
    lose: Number,
    group_message: String,
    battle_message: String,
    group_status: String,
    battle_status: String
});

userSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, 10);
};
  
userSchema.methods.validateHash = function(password){
    return bcrypt.compareSync(password, this.password);
};
  
export default mongoose.model('User', userSchema);  