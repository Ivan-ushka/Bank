const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    name: {type: String},
    id: {type: Number, unique: true},
    money: {type: Number},
    age: {type: Number},
    sex: {type: Number},
    experience: {type: Number},
})

module.exports = model('User', UserSchema);