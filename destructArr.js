'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
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
};

//Retrieving Array in a classic way
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//New way to retrieve - Destructuring
const [x, y, z] = arr;
console.log(x, y, z);

//Can retrieve array even if not complete, just 1st and 2nd element
//Just leave a space in between to retrieve other array place
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Usual way of Switching without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); //Switched

//New Switching
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

//Destructuring Nested Arrays
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default Values - Assigning Default values will prevent getting undefined from smaller array.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
