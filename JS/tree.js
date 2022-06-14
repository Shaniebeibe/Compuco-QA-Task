  const Person = require('./four')
let day = 'tuesday '
let subday = day.slice(0,4)
console.log(subday)

let splitDay = day.split("s")
console.log(splitDay[1].length)
console.log(splitDay[1].trim().length)

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()

let newQuote = day+ "is funday"
console.log(newQuote)
let value = newQuote.indexOf("day",5)
console.log(value)
let count = 0
let val = newQuote.indexOf("day")
while(val!== -1)
{
    count++
    val = newQuote.indexOf("day",val+1)
}
console.log(count)

// object is collection of properties

let person = {

    firstName:'Shan',
    lastName:'atu',
    age:27,
    fullName : function()
    {
        console.log(this.firstName+''+this.lastName)
    }


}
console.log(person.lastName)
console.log(person['lastName']) //include the strings when accessing in array notation
person.gender = 'female'
console.log(person)
delete person.gender
console.log(person)
console.log('gender' in person) //boolean output
for(let key in person)
{
   console.log(person[key]) //prints all values of the JS object
}

let person2 = new Person('shan', 'Atu')
console.log(person2.fullName())