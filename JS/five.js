const Person = require("./four")

class Pet extends Person
{
//extends keyword is used in inheritance

    get location ()
    {
        return "Bluecross"
    }
    constructor(firstName,lastName)
    {
        //call parent class contructor
        super(firstName,lastName)
    }
}
let pet = new Pet("san","sam")
console.log(pet.fullName())