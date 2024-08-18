let serialnum = 1

function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewstr
    if (views >= 0 && views < 1000) {
        viewstr = views
    }
    else if (views >= 1000 && views < 1000000) {
        viewstr = views/1000 + "k"
    }
    else if (views >= 1000000 && views < 1000000000) {
        viewstr = views/1000000 + "M"
    }
    else if (views >= 1000000000) {
        viewstr = views/1000000000 + "B"
    }
    let html = 
`
<div class="card">
            <div class="serial">
                ${serialnum}
            </div>
            
            <div class="image">
                <img src= "${thumbnail}">
                <div class="capsule">
                    <p>${duration}</p>
                </div>
            </div>

            <div class="content">
                <div class="text">
                    <h1>${title}</h21>
                    <div class="text2">
                        <h5>${cName}</h5>
                        <li></li>
                        <h5>${viewstr} views</h5>
                        <li></li>
                        <h5>${monthsOld} months ago</h5>
                    </div>
                </div>
            </div>

            <div class="threedot">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
`
    serialnum += 1
    let card = document.querySelector('.container')
    card.innerHTML = card.innerHTML + html
}

for (let i = 1; i <= 131; i++) {
    createCard("Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1", "CodeWithHarry", 100000000, 1, "1:00", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
}