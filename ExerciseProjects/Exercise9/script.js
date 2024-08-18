random = Math.random()
console.log(random)


let a = prompt(`Enter Number:`)
let c = prompt(`Enter Operation:`)
let b = prompt(`Enter Number:`)


let obj = {
    "+": "/",
    "-": "*",
    "*": "+",
    "/": "**",
    "**": "/",
}


if (random > 0.5) {
    // This is Right

    console.log(`The Answer will be Right!`)

    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    console.log(`The answer is: ${a} ${c} ${b}`)
}

else {
    // This is Wrong
    c = obj[c]
    
    console.log(`The Answer will be Wrong!`)
    
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    console.log(`The answer is: ${a} ${c} ${b}`)
}