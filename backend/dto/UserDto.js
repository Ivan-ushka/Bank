module.exports = class UserDto{
    name;
    age;
    sex;
    money;
    experience;
    id;

    constructor(model){
        this.money = model.money;
        this.experience = model.experience;
        this.name = model.name;
        this.age = model.age;
        this.id = model._id;
        this.sex =  model.sex
    }
}