module.exports = class Person
{
    age = 27
    get location()
    {
        return "Uganda"
    }
    //contructor is a method that executes by default when you create object of the class
    constructor(firstName,lastName)
    {
        this.firstName = firstName
        this.lastName = lastName

    }
    fullName()
    {
        console.log(this.firstName+this.lastName)
    }
}
// let person = new Person('shan', 'Atu')
// console.log(person.location)
// console.log(person.fullName())