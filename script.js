var kitten = document.getElementById("kitten")
var score = 0
window.addEventListener("keydown", function(e){
    switch(e.key) {
        case("ArrowRight"):
            kitten.style.left = `${kitten.offsetLeft + 10}px`
        break;
        case("ArrowLeft"):
            kitten.style.left = `${kitten.offsetLeft - 10}px`
        break;
        case("ArrowUp"):
            kitten.style.top = `${kitten.offsetTop - 10}px`
        break;
        case("ArrowDown"):
            kitten.style.top = `${kitten.offsetTop + 10}px`
        break;
    }
    if(isCollide()) {
        score++
        appearRandom()
        updateScore()
    }
})

setInterval(appearRandom, 4000)
appearRandom()

function updateScore() {
    document.getElementById("score").innerHTML = score
}
function appearRandom() {
    var wool = document.getElementById("wool")
    var leftPercentage = `${Math.random() * 100}%`
    var topPercentage = `${Math.random() * 100}%`

    wool.style.left = leftPercentage
    wool.style.top = topPercentage

    if(isCollide()) {
        appearRandom()
    }
}

function isCollide() {

    var a = {
        y: 100 - wool.offsetTop - wool.height, 
        x: wool.offsetLeft,
        height: wool.height,
        width: wool.width
    }
    var b = {
        y: 100 - kitten.offsetTop - kitten.height, 
        x: kitten.offsetLeft,
        height: kitten.height,
        width: kitten.width
    }

    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}