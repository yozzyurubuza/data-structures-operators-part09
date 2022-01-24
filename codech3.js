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

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow Card'],
  [69, 'Red Card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow Card'],
]);

// Coding Challenge #3

//1. Create an Array of events with no duplicates
let events = new Set();

for (const [key, value] of gameEvents) {
  events.add(value);
}
events = [...events];
console.log(events);

//2. Remove Yellow Card from minute 64
gameEvents.delete(64);
console.log(gameEvents);

//3. Compute and log the following string: "An event happened, on average, every 9 minutes"

let totalTime = 0,
  size = 0;

for (const [key, values] of gameEvents) {
  if (totalTime + key <= 90) {
    totalTime = key - totalTime;
    size++;
  }
}

const average = totalTime / size;

console.log(`An event happened, on average, every ${average} minutes`);

//4. Loop over gameEvents, marking whether it's in the first half or second half.

for (const [key, values] of gameEvents) {
  const message = key > 45 && key <= 90 ? 'SECOND HALF' : 'FIRST HALF';

  console.log(`[${message}] ${key}: ${values}`);
}

//Jonas Schmedtmann Implementation
/*

// 1.

const events = [...new Set(gameEvents.values())];

// 2.
gameEvents.delete(64);

//3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);

//Exact
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

*/
