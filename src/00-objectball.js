function gameObject() {
  return {
    home: {
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
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: "Turquoise, Purple",
      players: {
        "Jeff Adrien": {
          number: 3,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombos": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

const homePlayers = () => {
  return gameObject().home.players;
};

const awayPlayers = () => {
  return gameObject().away.players;
};

const allPlayers = () => {
  return Object.assign({}, homePlayers(), awayPlayers());
};

//(1)
function numPointsScored(playerName) {
  return allPlayers()[playerName].points;
}

console.log("The scored number is", numPointsScored("Brendan Haywood"));
//numPointsScored("Brendan Haywood") => 6

//(2)
function shoeSize(playerName) {
  return allPlayers()[playerName].shoe;
}

console.log("The size of the shoes is", shoeSize("Brendan Haywood"));
//shoeSize("Brendan Haywood") => 15

//(3)
function teamColors(name) {
  if (gameObject().home.teamName === name) {
    return gameObject().home.colors;
  } else {
    return gameObject().away.colors;
  }
}

console.log("The team color is", teamColors("Charlotte Hornets"));
//teamColors("Charlotte Hornets") => Turquoise, Purple

//(4)
const teamNames = () => {
  return [gameObject().home.teamName, gameObject().away.teamName];
};

console.log("The names of teams are", teamNames());

//(5)
const teamInfo = (teamName) => {
  if (teamNames()[0] === teamName) {
    return gameObject().home;
  } else {
    return gameObject().away;
  }
};

function playerNumbers(teamName) {
  let playerNumbers = [];
  const players = teamInfo(teamName).players;

  for (let player in players) {
    let playerNumber = players[player].number;
    playerNumbers.push(playerNumber);
  }
  return playerNumbers;
}

console.log("The jersey numbers are", playerNumbers("Charlotte Hornets"));
//playerNumbers("Charlotte Hornets") => [3,0,2,8,33]

//(6)
const playerStats = (player) => {
  return allPlayers()[player];
};
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

console.log("The stats are:", playerStats("Brendan Haywood"));

//(7)
const playerShoe = (player) => {
  return playerStats(player).shoe;
};

const playerRebounds = (player) => {
  return playerStats(player).rebounds;
};

function bigShoeRebounds() {
  const players = allPlayers();
  let largestShoe = 0;
  let largestShoePlayer = "";
  for (let player in players) {
    if (playerShoe(player) > largestShoe || largestShoe === 0) {
      largestShoe = playerShoe(player);
      largestShoePlayer = player;
      console.log("Largest shoe size player is", largestShoePlayer);
    }
  }
  return playerRebounds(largestShoePlayer);
}

console.log("Rebouds number for the largest player is", bigShoeRebounds());

//(8)
function mostPointsScored() {
  const players = allPlayers();
  let mostPoints = 0;
  let mostScoredPlayer = "";
  for (let player in players) {
    if (playerStats(player).points > mostPoints || mostPoints === 0) {
      mostPoints = playerStats(player).points;
      mostScoredPlayer = player;
    }
  }
  return mostScoredPlayer;
}

//(9)
function winningTeam() {
  const players = allPlayers();
  let mostPoints = 0;
  let mostScoredTeam = "";
  for (let player in players) {
    if (playerStats(player).points > mostPoints || mostPoints === 0) {
      mostPoints = playerStats(player).points;
      mostScoredTeam = teamNames(player);
    }
  }
  teams = Object.keys(mostScoredTeam);
  return mostScoredTeam[teams[0]] > mostScoredTeam[teams[1]]
    ? mostScoredTeam[0]
    : mostScoredTeam[1];
}

//(10) Which player has the longest name?
//Call the function playerWithLongestName.

function playerWithLongestName() {
  const players = allPlayers();
  let longestNamePlayer = "";

  for (let player in players) {
    if (player.length > longestNamePlayer.length) {
      longestNamePlayer = player;
    }
  }

  return longestNamePlayer;
}

console.log("Longest name player is", playerWithLongestName());

//(11)
function doesLongNameStealATon() {
  const players = allPlayers();
  let mostSteals = 0;
  for (let player in players) {
    if (playerStats().steals > mostSteals || mostSteals === 0) {
      mostPoints = playerStats().steals;

      if (playerWithLongestName().steals === mostSteals) {
        return true;
      } else {
        return false;
      }
    }
  }
}

console.log("Does longest name player steal the most?", doesLongNameStealATon()
);
