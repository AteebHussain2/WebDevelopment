// let num = prompt(`Enter number to find its Factorial:`)
let a = 5

function factorial(num){
    console.log(`This is with using reduce() Method....`)
    let arr = Array.from(Array(num+1).keys())
    let c = arr.slice(1,).reduce((a, b)=> a*b )
    return c
}


function factFor(num) {
    console.log(`This is without using reduce() Method....`)
    var fact = 1
    for (let i = 1; i <= num; i++) {
        fact *= i
    }
    return fact
}

console.log(factorial(a))
console.log(factFor(a))