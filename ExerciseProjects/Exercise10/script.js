// These Are Names

let Adjectives = {
    "1": "Crazy",
    "2": "Amazing",
    "3": "Fire",
}

let Shop_Name = {
    "1": "Engine",
    "2": "Foods",
    "3": "Garments",
}

let Another_Word = {
    "1": "Bros",
    "2": "Limited",
    "3": "Hub",
}

// This is Confirm

alert(`Generating Names.......`)


// These are Generates

for(let i = 0; i <= 0; i--) {
    // First Name
    let rand = Math.floor(Math.random() * 3) + 1
    let a = Adjectives[rand]

    // Second Name
    rand = Math.floor(Math.random() * 3) + 1
    let b = Shop_Name[rand]
    
    // Third Name
    rand = Math.floor(Math.random() * 3) + 1
    let c = Another_Word[rand]

    // Confirm Name
    let conf = confirm(`Your Name, ${a} ${b} ${c}. You Liked It??`)
    if(conf) {
        break;
    }
}
