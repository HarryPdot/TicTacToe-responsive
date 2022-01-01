//tag selector
var allSquares = document.querySelectorAll("div > button ")
var victoryText = document.querySelector(".victory-text")
var nextRoundBtn = document.querySelector(".next-round")
var marioVic = document.querySelector(".left-grid")
var bowserVic = document.querySelector(".right-grid")
var moveMario = document.querySelector(".marioStand")
var moveBowser = document.querySelector(".bowserStand")
var resetBtn = document.querySelector(".reset-Btn")
var playMusic = document.querySelector(".playSong")
var diceBtn = document.querySelector("#dice-Btn")
var diceResults = document.querySelector("#dice-result")
var marioEnding = document.querySelector("#marioWin")
var bowserEnding = document.querySelector("#bowserWin")
var musicBgm = document.querySelector(".musicPlay")
var musicPause = document.querySelector(".musicPause")
var audio = new Audio("sounds/mario-bros-theme.mp3")
//another method, shorter/efficient
// var winningConditions = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [1,4,7],
//     [2,5,8],
//     [3,6,9],
//     [1,5,9],
//     [3,5,7]
// ]

//player info
let playerOne = {
        score: [],
        scoreboard: 0
}
let playerTwo = {
        score: [],
        scoreboard: 0

}

//dice possibilities
let diceChance = ["marioPOne", "bowserPOne", "marioMOne", "bowserMOne"]
let counterTurn = 0

//functions
//taking turns/choosing their cells
function handleTurns(event) {
    clickedOn = event.target
    console.log("counterTurn", counterTurn)

    if(counterTurn % 2 ==0){
        console.log("even", counterTurn)
        console.log("clickedon", clickedOn)
        clickedOn.className = "marioImg"
        playerOne.score.push(clickedOn.id)
        clickedOn.disabled = true
    } else {
        console.log("odd", counterTurn)
        console.log("clickedon", clickedOn)
        clickedOn.className = "bowserImg"
        playerTwo.score.push(clickedOn.id)
        clickedOn.disabled = true
    }

    counterTurn = counterTurn + 1

    //win conditions
    if (playerOne.score.includes("cell1") && playerOne.score.includes("cell2") && playerOne.score.includes("cell3")) {
        console.log("Player 1 wins with cells: 1, 2, 3")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll()
    } else if (playerOne.score.includes("cell1") && playerOne.score.includes("cell4") && playerOne.score.includes("cell7")) {
        console.log("Player 1 wins with cells: 1, 4, 7")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll()
    } else if (playerOne.score.includes("cell1") && playerOne.score.includes("cell5") && playerOne.score.includes("cell9")) {
        console.log("Player 1 wins with cells: 1, 5, 9")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll()
    } else if (playerOne.score.includes("cell2") && playerOne.score.includes("cell5") && playerOne.score.includes("cell8")) {
        console.log("Player 1 wins with cells: 2, 5, 8")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll()
    } else if (playerOne.score.includes("cell3") && playerOne.score.includes("cell5") && playerOne.score.includes("cell7")) {
        console.log("Player 1 wins with cells: 3, 5, 7")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll()
    } else if (playerOne.score.includes("cell3") && playerOne.score.includes("cell6") && playerOne.score.includes("cell9")) {
        console.log("Player 1 wins with cells: 3, 6, 9")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll() 
    } else if (playerOne.score.includes("cell4") && playerOne.score.includes("cell5") && playerOne.score.includes("cell6")) {
        console.log("Player 1 wins with cells: 4, 5, 6")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll()
    } else if (playerOne.score.includes("cell7") && playerOne.score.includes("cell8") && playerOne.score.includes("cell9")) {
        console.log("Player 1 wins with cells: 7, 8, 9")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        moveMario1()
        disableAll()
    } else if (playerTwo.score.includes("cell1") && playerTwo.score.includes("cell2") && playerTwo.score.includes("cell3")) {
        console.log("Player 2 wins with cells: 1, 2, 3")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell1") && playerTwo.score.includes("cell4") && playerTwo.score.includes("cell7")) {
        console.log("Player 2 wins with cells: 1, 4, 7")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell1") && playerTwo.score.includes("cell5") && playerTwo.score.includes("cell9")) {
        console.log("Player 2 wins with cells: 1, 5, 9")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell2") && playerTwo.score.includes("cell5") && playerTwo.score.includes("cell8")) {
        console.log("Player 2 wins with cells: 2, 5, 8")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell3") && playerTwo.score.includes("cell5") && playerTwo.score.includes("cell7")) {
        console.log("Player 2 wins with cells: 3, 5, 7")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell3") && playerTwo.score.includes("cell6") && playerTwo.score.includes("cell9")) {
        console.log("Player 2 wins with cells: 3, 6, 9")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell4") && playerTwo.score.includes("cell5") && playerTwo.score.includes("cell6")) {
        console.log("Player 2 wins with cells: 4, 5, 6")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if (playerTwo.score.includes("cell7") && playerTwo.score.includes("cell8") && playerTwo.score.includes("cell9")) {
        console.log("Player 2 wins with cells: 7, 8, 9")
        bowserVic.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        moveBowser1()
        disableAll()
    } else if ((playerOne.score.length + playerTwo.score.length) == 9) {
        console.log("draw")
        nextRoundBtn.style.visibility = "hidden"
        diceBtn.className="dice"
        setTimeout(dice,2000)
    }

    console.log("scoreboard",playerOne.scoreboard)

    //when a player gets 5 wins
    if(playerOne.scoreboard === 5) {
        setTimeout(function(){
            resetBtn.style.display = "inline-block"
            nextRoundBtn.style.display = "none"
        }, 1500)
        marioWin()
    } else if(playerTwo.scoreboard === 5){
        setTimeout(function(){
            resetBtn.style.display = "inline-block"
            nextRoundBtn.style.display = "none"
        }, 1500)
        bowserWin()
    }
}

//when mario wins 5 times
function marioWin() {
    setTimeout(function(){
        marioEnding.style.display= "inline-block";
        moveMario.style.display="none"
    }, 1500)
}

//when bowser wins 5 times
function bowserWin() {
    setTimeout(function(){
        bowserEnding.style.display= "inline-block";
        moveBowser.style.display="none"
    }, 1500)
}

//moving mario
function moveMario1() {
    let test1 = playerOne.scoreboard * 172
    console.log("test", test1)
    let marginAdd = test1
    console.log("marginAdd", marginAdd)
    moveMario.style.marginLeft = marginAdd+"px"
    moveMario.style.transition = "1.5s"
    moveMario.style.transitionTimingFunction ="steps(6,end)"
    nextRoundBtn.style.visibility = "hidden"
    if(playerOne.scoreboard !== 0){
        console.log("adsf")
        setTimeout(function(){
            nextRoundBtn.style.visibility = "visible"
        }, 1500)
    }
}
//moving bowser
function moveBowser1() {
    let test1 = 800 - (playerTwo.scoreboard * 160)
    console.log("test", test1)
    let marginAdd = test1
    console.log("marginAdd", marginAdd)
    moveBowser.style.marginLeft = marginAdd+"px"
    moveBowser.style.transition = "1.5s"
    moveBowser.style.transitionTimingFunction ="steps(6,end)"
    nextRoundBtn.style.visibility = "hidden"
    if(playerTwo.scoreboard !== 0){
        console.log("adsf")
        setTimeout(function(){
            nextRoundBtn.style.visibility = "visible"
        }, 1500)
    }
}
//disabling the cells
function disableAll() {
    let i = 0
    while(i < allSquares.length) {
        allSquares[i].disabled = true;
        i++;
    }
    // nextRoundBtn.style.visibility = "visible"
}

//reset the grid, onto the next round
function handleNextRound() {
    for(let i=0; i < allSquares.length; i++) {
        allSquares[i].style.backgroundColor = "";
        allSquares[i].disabled = false;
        allSquares[i].className=""
        playerOne.score.pop()
        playerTwo.score.pop()
        counterTurn = 0
        marioVic.style.visibility = "hidden"
        bowserVic.style.visibility = "hidden"
        nextRoundBtn.style.visibility = "hidden"
    }
    console.log("resetting to factory")
}

//reset to factory
function handleReset () {
    for(let i=0; i < allSquares.length; i++) {
        allSquares[i].style.backgroundColor = "";
        allSquares[i].disabled = false;
        allSquares[i].className=""
        playerOne.score.pop()
        playerTwo.score.pop()
        counterTurn = 0
        marioVic.style.visibility = "hidden"
        bowserVic.style.visibility = "hidden"
        playerOne.scoreboard = 0
        playerTwo.scoreboard = 0
        resetBtn.style.display= "none"
        nextRoundBtn.style.display = "inline-block"
        nextRoundBtn.style.visibility = "hidden"
        moveMario.style.display = "inline-block"
        moveBowser.style.display = "inline-block"
        bowserEnding.style.display = "none"
        marioEnding.style.display = "none"
        moveBowser1()
        moveMario1()
    }
}

//dice when it is a tie
function dice() {
    let diceRandom = Math.floor(Math.random() * 4)
    console.log("dice", diceRandom)
    console.log(diceChance[diceRandom])
    diceBtn.className = ""
    if(diceRandom === 0){
        playerOne.scoreboard = playerOne.scoreboard + 1
        marioPlusOne()
    } else if(diceRandom === 1) {
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        bowserPlusOne()
    } else if(diceRandom === 2 && playerOne.scoreboard > 0) {
        playerOne.scoreboard = playerOne.scoreboard - 1
        marioMinusOne()
    } else if(diceRandom === 3 && playerTwo.scoreboard > 0) {
        playerTwo.scoreboard = playerTwo.scoreboard - 1
        bowserMinusOne()
    }  else if(diceRandom === 2 && playerOne.scoreboard === 0) {
        nextRoundBtn.style.visibility = "visible"
        marioMinusOne()
    }  else if(diceRandom === 3 && playerTwo.scoreboard === 0) {
        nextRoundBtn.style.visibility = "visible"
        bowserMinusOne()
    }
    console.log("dice scoreboard", playerOne.scoreboard)
    moveMario1()
    moveBowser1()
}
//possible outcomes from dice
function marioPlusOne() {
    diceResults.className ="marioPlusOne"
    setTimeout(turnoffResult, 4000)
    nextRoundBtn.style.visibility = "hidden"
}

function bowserPlusOne() {
    diceResults.className ="bowserPlusOne"
    setTimeout(turnoffResult, 4000)
    nextRoundBtn.style.visibility = "hidden"
}

function marioMinusOne() {
    diceResults.className ="marioMinusOne"
    setTimeout(turnoffResult, 4000)
    nextRoundBtn.style.visibility = "hidden"
}

function bowserMinusOne() {
    diceResults.className ="bowserMinusOne"
    setTimeout(turnoffResult, 4000)
    nextRoundBtn.style.visibility = "hidden"
}

function turnoffResult() {
    diceResults.className = ""
    setTimeout(function(){
        nextRoundBtn.style.visibility = "visible"
    },10)

}

//playing the music
function playBgm() {
    audio.play()
}

function pauseBgm() {
    audio.pause()
}


//callbacks
allSquares.forEach(function(square) {
    square.addEventListener("click", handleTurns)
})

nextRoundBtn.addEventListener("click", handleNextRound)
resetBtn.addEventListener("click", handleReset)
musicBgm.addEventListener("click", playBgm)
musicPause.addEventListener("click", pauseBgm)