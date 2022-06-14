const flag = true

if(!flag)
{
console.log("condition satisfied")
}
else
{
    console.log(flag)
    console.log("condition not satisfied")
}
let i = 0
while(i>10)
{
i++
console.log(i)
}

do
{
i++
}while(i>10);
console.log(i)

console.log("**************")

for(let k=0;k<=10;k++)
{
    if(k%2 == 0 && k%5 == 0)
    console.log(k)
}

let required = true
while(required)
{
    console.log(required)
    required= false
}
    
var marks = Array(6)
var marks = new Array(20,20,35,12,37,100)

var marks = [20,20,35,12,37,100]
subMarks = marks.slice(2,5)
console.log(subMarks)
console.log(marks[2])
marks[3] = 14
console.log(marks)
console.log(marks.length)
marks.push = 65
console.log(marks)
marks.pop()
marks.unshift(12)
console.log(marks)
console.log(marks.indexOf(37))
// is 120 in the array
console.log(marks.includes(120))
var sum = 0
for(let i=0;i<marks.length;i++)
{
//    console.log(marks[i])
   sum = sum + marks[i]
}
console.log(sum)
// reduce, filter, map
// reduce
let total = marks.reduce((sum,totalMarks)=>sum + totalMarks,0)
console.log(total)

var scores = [12,13,14,16]
var evenScore = []
for(let i=0;i<scores.length;i++)
{
   if(scores[i] %2 ==0)
   {
    // push   
    evenScore.push(scores[i])
   }
}
console.log(evenScore)
// filter
let newFilterEvenScores = scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)
// map from one value to a new value
let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)
let totalMapped =mappedArray.reduce((sum,totalScore)=>sum+totalScore,0)
console.log(totalMapped)

var scores1 = [12,13,14,16]
let value = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,totalScore)=>sum+totalScore,0)
console.log(value)

// sorting
let fruits = ["banana", "mango","pome","apple"]

console.log(fruits.sort()) 
// ascending
console.log(fruits.reverse())
// descending

var scores2 = [12,03,19,16,14]
scores2.sort(function(a,b){
    return a-b
})
console.log(scores2.sort((a,b)=>a-b))
console.log(scores2.reverse((a,b)=>b-a))

