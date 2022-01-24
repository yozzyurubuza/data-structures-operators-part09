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

// Sets

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

//Sets only consider unique elements, deletes duplicate inputs
console.log(ordersSet);
console.log(new Set('Jonas'));

//Check set size
console.log(ordersSet.size);

//Check if exists
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

//Add to set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

//Delete
ordersSet.delete('Risotto');
console.log(ordersSet);

//Sets has no indexes
// console.log(ordersSet[0]);

//Removes all the data in the Set
// ordersSet.clear();

for (const order of ordersSet) console.log(order);

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

//Array to Set, set accepts all iterables (String, Array, Object, etc.)
const staffUnique = new Set(staff);
console.log(staffUnique);

//Remove duplicates from Array using Set, but still return as an array.
const staffUniqueArr = [...new Set(staff)];
console.log(staffUniqueArr);

//Will return [Set(3)], need spread to separate the set to array
const staffUniqueArr2 = [new Set(staff)];
console.log(staffUniqueArr2);

//Just to know how many unique positions
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

//Counting how many different letters in a string
console.log(new Set('jonasschmedtmann').size);
