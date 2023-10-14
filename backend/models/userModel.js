const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    name: {type: String, unique: true},
    id: {type: String, unique: true},
    money: {type: Number},
    pwd: {type: String},
    age: {type: Number},
    sex: {type: String},
    experience: {type: String},
})

module.exports = model('User', UserSchema);