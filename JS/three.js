// block of code
// var - Global level/functional
//let - global/block level{} 
// const - can't be re-initialized

function add(a,b)
{
    return a+b
}
console.log(add(2,3))

let sumOfIntegers = function(c,d)
{
    return c+d
}
console.log(sumOfIntegers(2,3))

let sumOfNumbers = (c,d)=>c+d
console.log(sumOfNumbers(2,3))

