'use strict';
console.log('hello world');

// function/method for generating random number of customers per hour
function randomCustNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(`random number gerenator is working: ${randomCustNumber(1,10)}`); // to test randomCustNumber



let cookieSales = document.getElementById('cookie-sales');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',' 2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// const seattle = {
//   name: 'Seattle',
//   minCust:23,
//   maxCust:65,
//   avgCookiePerSale:6.3,
// };

// const tokyo = {
//   name: 'Tokyo',
//   minCust:3,
//   maxCust:24,
//   avgCookiePerSale:1.2,
// };

// const dubai = {
//   name: 'Dubai',
//   minCust:11,
//   maxCust:38,
//   avgCookiePerSale:3.7,
// };

const paris = {
  name: 'Paris',
  minCusts:20,
  maxCust:38,
  avgCookiePerSale:2.3,
  calcCustomers: function() {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push (randomCustNumber(this.minCust, this.maxCust));
      console. log(this.customersPerHour);
    }
  },

  calcCookies: function(){
    this.calcCustomers();
    for (let i = 0; i < hours.length; i++){
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale));
      this.totalCookies += (this.cookiesPerHour[i]);
      console.log(this.cookiesPerHour);
    }
  }

};



const lima = {
  name: 'Lima',
  avgCookiePerSale:4.6,
  minCust: 2,
  maxCust: 16,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  calcCustomers: function() {
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push (randomCustNumber(this.minCust, this.maxCust));
      console. log(this.customersPerHour);
    }
  },

  calcCookies: function(){
    this.calcCustomers();
    for (let i = 0; i < hours.length; i++){
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale));
      this.totalCookies += (this.cookiesPerHour[i]);
      console.log(this.cookiesPerHour);
    }
  }
};

// seattle.calcCustomers();
// tokyo.calcCustomers();
// dubai.calcCustomers();
paris.calcCustomers();
lima.calcCustomers();

// seattle.calcCookies();
// tokyo.calcCookies();
// dubai.calcCookies();
paris.calcCookies();
lima.calcCookies();

console.log(lima.cookiesPerHour);


lima.render = function() {
  let h1elm = document.createElement('h1');

  cookieSales.appendChild(h1elm);
};

// seattle.render();
// tokyo.render();
// dubai.render();
paris.render();
lima.render();















// NOTES

// need a loop that will return 14 random numbers from randomCookieNumber Function according to it's parent object's min/max customers.
// neeed the total of those numbers added.

// ********* DOM MANIPULATION ***********

// Step 1 - JS Needs a window into the DOM - normally listed at the top of the JS page
// Step 2 - JS will create an element - document.createElement - method, string of the html element you want create
// Step 3 - Give it context if needed (optional)
// Step 4 - add it to the DOM

