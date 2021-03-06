//tag selector
var allSquares = document.querySelectorAll(".grid button ")
var victoryText = document.querySelector(".victory-text")
var nextRoundBtn = document.querySelector(".next-round")
var marioVic = document.querySelector(".left-grid")
var bowserVic = document.querySelector(".right-grid")
var marioVicTextMobile = document.querySelector(".marioVictoryTextMobile")
var bowserVicTextMobile = document.querySelector(".bowserVictoryTextMobile")
var marioVictoryImageMobile = document.querySelector(".marioVictoryMobile")
var bowserVictoryImageMobile = document.querySelector(".bowserVictoryMobile")
var marioScoreMobile = document.querySelector(".marioScore")
var bowserScoreMobile = document.querySelector(".bowserScore")
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






//player info
let playerOne = {
        score: [],
        scoreboard: 0
}
let playerTwo = {
        score: [],
        scoreboard: 0

}

//another method, shorter/efficient
var winningConditions = [
    ['cell1','cell2','cell3'],
    ['cell4','cell5','cell6'],
    ['cell7','cell8','cell9'],
    ['cell1','cell4','cell7'],
    ['cell2','cell5','cell8'],
    ['cell3','cell6','cell9'],
    ['cell1','cell5','cell9'],
    ['cell3','cell5','cell7'],
]
// win conditions
var marioWinCondition = ""
var bowserWinCondition = ""
var drawCondition = 0

// player scoreboard in mobile
marioScoreMobile.textContent = playerOne.scoreboard
bowserScoreMobile.textContent = playerTwo.scoreboard

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
    conditionX()
}


function conditionX() {
    drawCondition += 1
    winningConditions.forEach(function(conditions) {
        for(var i=0; i < conditions.length; i++) {
            if(playerOne.score.includes(conditions[i])) {
                marioWinCondition += "x"
                if (marioWinCondition == "xxx"){
                    winConditions()
                    return marioWinCondition
                }
            } else if (playerTwo.score.includes(conditions[i])) {
                bowserWinCondition += "x"
                if (bowserWinCondition == "xxx"){
                    winConditions()
                    return bowserWinCondition
                }
            } 
        }  
        marioWinCondition = ""
        bowserWinCondition = ""
    })
    if (drawCondition === 9) {
        console.log("draw yes")
        winConditions()
        return true
    }
}

function winConditions() {
    console.log("working")
    if(marioWinCondition === "xxx") {
        console.log("mario yes")
        marioVic.style.visibility = "visible"
        playerOne.scoreboard = playerOne.scoreboard + 1
        marioScoreMobile.textContent = playerOne.scoreboard
        marioVicTextMobile.style.display = "flex"
        marioVictoryImageMobile.style.visibility= "visible"
        moveMario1()
        disableAll()
    } else if(bowserWinCondition === "xxx") {
        console.log("bowser yes")
        bowserVic.style.visibility = "visible"
        bowserVicTextMobile.style.visibility = "visible"
        bowserVictoryImageMobile.style.visibility = "visible"
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        bowserScoreMobile.textContent = playerTwo.scoreboard
        moveBowser1()
        disableAll()
    } else if ((playerOne.score.length + playerTwo.score.length) === 9 && marioWinCondition !== "xxx" && bowserWinCondition !== "xxx") {
        console.log("draw")
        nextRoundBtn.style.visibility = "hidden"
        diceBtn.className="dice"
        setTimeout(dice,2000)
    }
    drawCondition = 0
    marioWinCondition = ""
    bowserWinCondition = ""

    win5Times()
}
function win5Times() {
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
        moveMario.style.display= "none"
    }, 1500)
}

//when bowser wins 5 times
function bowserWin() {
    setTimeout(function(){
        bowserEnding.style.display= "inline-block";
        moveBowser.style.display= "none"
    }, 1500)
}

//moving mario
function moveMario1() {
    let test1 = playerOne.scoreboard * 9
    console.log("test", test1)
    let marginAdd = test1
    console.log("marginAdd", marginAdd)
    moveMario.style.left = marginAdd+"vw"
    moveMario.style.transition = "1.5s"
    moveMario.style.transitionTimingFunction ="steps(6,end)"
    nextRoundBtn.style.visibility = "hidden"
    if(playerOne.scoreboard !== 0){
        console.log("adsf")
        setTimeout(function(){
            nextRoundBtn.style.visibility = "visible"
        }, 1500)
    }
    win5Times()
}
//moving bowser
function moveBowser1() {
    let test1 = playerTwo.scoreboard * 9
    console.log("test", test1)
    let marginAdd = test1
    console.log("marginAdd", marginAdd)
    moveBowser.style.right = marginAdd+"vw"
    moveBowser.style.transition = "1.5s"
    moveBowser.style.transitionTimingFunction ="steps(6,end)"
    nextRoundBtn.style.visibility = "hidden"
    if(playerTwo.scoreboard !== 0){
        console.log("adsf")
        setTimeout(function(){
            nextRoundBtn.style.visibility = "visible"
        }, 1500)
    }
    win5Times()
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
        marioVicTextMobile.style.display = "none"
        bowserVicTextMobile.style.visibility = "hidden"
        marioVictoryImageMobile.style.visibility = "hidden"
        bowserVictoryImageMobile.style.visibility = "hidden"
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
        marioVicTextMobile.style.display = "none"
        bowserVicTextMobile.style.visibility = "hidden"
        marioVictoryImageMobile.style.visibility = "hidden"
        bowserVictoryImageMobile.style.visibility = "hidden"
        marioScoreMobile.textContent = playerTwo.scoreboard
        bowserScoreMobile.textContent = playerTwo.scoreboard
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
        marioScoreMobile.textContent = playerOne.scoreboard
        marioPlusOne()
    } else if(diceRandom === 1) {
        playerTwo.scoreboard = playerTwo.scoreboard + 1
        bowserScoreMobile.textContent = playerTwo.scoreboard
        bowserPlusOne()
    } else if(diceRandom === 2 && playerOne.scoreboard > 0) {
        playerOne.scoreboard = playerOne.scoreboard - 1
        marioScoreMobile.textContent = playerOne.scoreboard
        marioMinusOne()
    } else if(diceRandom === 3 && playerTwo.scoreboard > 0) {
        playerTwo.scoreboard = playerTwo.scoreboard - 1
        bowserScoreMobile.textContent = playerTwo.scoreboard
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