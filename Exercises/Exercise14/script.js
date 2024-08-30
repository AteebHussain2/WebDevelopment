// Initializing Hacking...
// Reading your Files...
// Password files Detected...
// Sending all passwords and personal files to server...
// Cleaning up...

const addText = async (text)=> {
    await randomDelay();
    let div = document.createElement("div")
    div.innerHTML = text
    document.body.append(div)
}

const timeout = ()=>{
        min = Math.ceil(1);
        max = Math.floor(7);
        return Math.floor(Math.random() * (max - min + 1)) + min;      
}

const randomDelay = ()=> {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve()
        }, timeout() * 1000);
    })
}

async function main() {

    let t = setInterval(() => {
        let last = document.body.lastElementChild;
        if (last.innerHTML.endsWith("...")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        }
        else {
            last.innerHTML = last.innerHTML + '.'
        }
    }, 200);

    let texts = [
        "Initialized Hacking",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ]
    
    for (const text of texts) {
        await addText(text)
    }

    await randomDelay()
    clearInterval(t)
}

main()