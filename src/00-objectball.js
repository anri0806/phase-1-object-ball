function gameObject(){
  const game = {
      home:{
          teamName: "Brooklyn Nets",
          colors: ["Black", "White"],
          players: {
        "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
        "Reggie Evans":{
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
        "Brook Lopez":{
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
        },
        "Mason Plumlee":{
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
        },
        "Jason Terry":{
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
        }}
      },
      away:{
        teamName: "Charlotte Hornets",
        colors: "Turquoise, Purple",
        players: {
            "Jeff Adrien":{
                number: 3,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
              },
            "Bismak Biyombos":{
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
              },
            "DeSagna Diop":{
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon":{
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood":{
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals:22,
                blocks: 5,
                slamDunks: 12
            }}
      }
  }
   return game
}



function numPointsScored(player) {
    const game = gameObject()
    for (const gameKey in game) { //home, away
    const teamObj = game[gameKey];  
    
    for (const teamKey in teamObj) { //teamName,colors,player
        const playerObj = teamObj[teamKey];

        for (const playerKey in playerObj) { //player
          if(playerKey === player){
              return playerObj[playerKey].points
          }
        }
    }
}  
}
//numPointsScored("Brendan Haywood") => 6


function shoeSize() {
    let obj = Object.values(players)
    return obj.find(player => player.shoe)
}
//shoeSize("Brendan Haywood") => 15


function teamColors(name) {
   if(gameObject().home.teamName === name) {
       return gameObject().home.colors
   }else{
       return gameObject().away.colors
   }
}
    //teamColors("Charlotte Hornets") => Turquoise, Purple

const teamNames = () => {
    return [gameObject().home.teamName, gameObject().away.teamName]
}


const teamObject = (teamName) => {
    if(teamNames()[0] === teamName){
        return gameObject().home
    }else{
        return gameObject().away
    }
}

function playerNumbers(teamName){
    let playerNumbers = []
    const players = teamObject(teamName).players
    for(let player in players) {
        let playerNumber = players[player].number
        playerNumbers.push(playerNumber)
    }
    return playerNumbers
}
//playerNumbers("Charlotte Hornets") => [3,0,2,8,33]


const homePlayers = () => {
    return gameObject().home.players
}

const awayPlayers = () => {
    return gameObject().away.players
}

const allPlayers = () =>{
    return Object.assign({}, homePlayers(), awayPlayers())
}

const playerStats = (player) => {
    return allPlayers()[player]
 }
//playerStats("Brendan Haywood") 
//=> {
//number: 33,
//shoe: 15,
//points: 6,
//ebounds: 12,
//assists: 12,
//steals:22,
//blocks: 5,
//slamDunks: 12

const playerShoe = (player) => {
    return playerStats(player).shoe
}

const playerRebounds = (player) => {
    return playerStats(player).rebounds
}

function bigShoeRebounds() {
    const players = allPlayers()
    let largestShoe = 0
    let largestShoePlayer = ''
    for(let player in players){
        if(playerShoe(player) > largestShoe || largestShoe === 0){
            largestShoe = playerShoe(player)
            largestShoePlayer = player
        }
    }
    return playerRebounds(largestShoePlayer)
}


function mostPointsScored() {
    const players = allPlayers()
    let mostPoints = 0
    let mostScoredPlayer = ''
    for(let player in players) {
        if(playerStats(player).points > mostPoints || mostPoints === 0) {
            mostPoints = playerStats(player).points
            mostScoredPlayer = player
        }
    }
    return mostScoredPlayer
}

function winningTeam() {
    const players = allPlayers()
    let mostPoints = 0
    let mostScoredTeam = ''
    for(let player in players) {
    if(playerStats(player).points > mostPoints || mostPoints === 0){
        mostPoints = playerStats(player).points
        mostScoredTeam = teamNames(player)
    }
    }
    teams = Object.keys(mostScoredTeam)
    return mostScoredTeam[teams[0]] > mostScoredTeam[teams[1]] ? mostScoredTeam[0] : mostScoredTeam[1]
}


//function playerWithLongestName() {
//}

//function doesLongNameStealATon() {
//}
