'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//Enhanced Object Literals

//You can make computations in property names
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },

  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Old method of getting openingHours object inside restaurant object
  //openingHours: openingHours,

  // ES6 Enhanced Object literals
  openingHours,

  // You can remove the function keyword, and it will still work
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Destructuring objects in Arguments in a Function right away
  //Does not need to match the order
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${
        (this.starterMenu[starterIndex], this.mainMenu[mainIndex])
      } will be delivered to ${address} at ${time}`
    );
  },

  //Old way of implementing a function
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Maps Fundamentals

const rest = new Map();

//Add new key and value to Map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest.set(2, 'Lisbon, Portugal'));

//Can chain set method
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

//Read data from map - Data type is important
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

//Check map whether it is open or not
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//Check if key is present
console.log(rest.has('categories'));

//Delete according to key
rest.delete(2);
console.log(rest);

//Check size
console.log(rest.size);

//Clear data
// console.log(rest.clear());

//Using array as key
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);

console.log(rest.get([1, 2])); //Will not work because they point to a different memory
console.log(rest.get(arr));

//Can use DOM elements as key
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);