'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],

  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #2

//Loop over game score and print each name with goal number
for (const [goalNum, goalName] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(goalNum) + 1}: ${goalName}`);
}

//Calculate average odds

for (const average of Object.values(game.odds)) {
  console.log(`Average: ${average / 3}`);
}

//Print 3 odds in nice formatted way

//Hard-coded
console.log(`Odds of Victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odds of Draw: ${game.odds.x}`);
console.log(`Odds of Victory ${game.team2}: ${game.odds.team2}`);

//Using loop
for (const [team, odds] of Object.entries(game.odds)) {
  const victory = (game[team] && 'victory') || game[team] || 'draw:';
  const teamName = (game[team] && game[team] + ': ') || '';
  const stringTeam = teamName || '';
  console.log(`Odds of ${victory} ${stringTeam}${odds}`);
}

//Create a new object from object game.scored

let scorer = {};

for (const name of Object.values(game.scored)) {
  scorer[name] = scorer[name] + 1 || 1;
}

console.log(scorer);

//Jonas Schmedtmann implementation

/*
//1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

//2.
const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd;
  average /= odds.length;
  console.log(average);
}

//3.

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw:' : `victory ${game[team]}:`;
  console.log(`Odd of ${teamStr} ${odd} `);
}

//4. Bonus
const scorers = {};

for (const player of game.scored){
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

*/
