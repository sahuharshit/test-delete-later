
const multiply = require('./abc')
function add(a, b) {
    return a + b
}

function subtractFn(a, b) {
    return a - b
}
const arr = [1,2,4,3,4,5,1,0,0,45,99,10]
arr.sort((a,b) => a - b)
// arr.indexOf()
console.log('arr is', arr.length)


var xyz = add(1, 2)
var multiplyResult = multiply(2, 3)
console.log('multiply results are', multiplyResult)
console.log('',xyz)
