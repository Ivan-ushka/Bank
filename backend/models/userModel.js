const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    name: {type: String},
    id: {type: String, unique: true},
    money: {type: Number},
    age: {type: Number},
    sex: {type: String},
    experience: {type: String},
})

module.exports = model('User', UserSchema);