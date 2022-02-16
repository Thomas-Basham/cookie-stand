'use strict';
console.log('hello world');

// function/method for generating random number of customers per hour
function randomCustNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(`random number gerenator is working: ${randomCustNumber(1,10)}`); // to test randomCustNumber



let salesnumbers = document.getElementById('salesnumbers');

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

// const paris = {
//   name: 'Paris',
//   minCusts:20,
//   maxCust:38,
//   avgCookiePerSale:2.3,
// };


function locationData(name, avgCookiePerSale, minCust, maxCust, customersPerHour, cookiesPerHour, totalCookies){
  this.name = name;
  this.avgCookiePerSale = avgCookiePerSale;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.customersPerHour = customersPerHour;
  this.cookiesPerHour = cookiesPerHour;
  this.totalCookies = totalCookies;
}
// console.log(locationData);


const lima = {
  name: 'Lima',
  avgCookiePerSale:4.6,
  minCust: 2,
  maxCust: 16,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookies: 0,

  calcCustomers: function() { // calculates and pushes this.customersPerHour // random cookie sales per hour within scope of min/max avg customers per hour
    for (let i = 0; i < hours.length; i++) {
      this.customersPerHour.push(randomCustNumber(this.minCust, this.maxCust));
      console. log('customers per hour' + this.customersPerHour);
    }
  },

  calcCookies: function(){ // calculates and pushes this.cookiesPerHour // cookies sold each hour defined by multiplying avg cookie per sale * randomly-generated customers per hour
    this.calcCustomers();
    for (let i = 0; i < hours.length; i++){
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale));
      this.totalCookies += (this.cookiesPerHour[i]);
      console.log('cookies per hour ' + this.cookiesPerHour);
      console.log(this.totalCookies);
    }
  },
};

// seattle.calcCustomers();
// tokyo.calcCustomers();
// dubai.calcCustomers();
// paris.calcCustomers();
lima.calcCustomers();

// seattle.calcCookies();
// tokyo.calcCookies();
// dubai.calcCookies();
// paris.calcCookies();
lima.calcCookies();


console.log(lima.cookiesPerHour);


lima.render = function() {
  let h2Elm = document.createElement('h2');
  h2Elm.textContent = this.name;
  salesnumbers.appendChild(h2Elm);

  let ulElem = document.createElement('ul');
  salesnumbers.appendChild(ulElem);

  for(let i = 0; i < this.customersPerHour.length; i++){
    let currentCustomersPerHour = this.customersPerHour[i];
    let liElem = document.createElement('li');
    liElem.textContent = currentCustomersPerHour;
    ulElem.appendChild(liElem);
  }
};

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();


let locations = [lima]; // seattle, tokyo, dbuai, paris,

function renderAllLocations() {
  for(let i = 0; i<locations.length; i++){
    let currentlocations = locations[i];
    currentlocations.render();
  }
}

renderAllLocations();

















// NOTES

// need a loop that will return 14 random numbers from randomCookieNumber Function according to it's parent object's min/max customers.
// neeed the total of those numbers added.

// ********* DOM MANIPULATION ***********

// Step 1 - JS Needs a window into the DOM - normally listed at the top of the JS page
// Step 2 - JS will create an element - document.createElement - method, string of the html element you want create
// Step 3 - Give it context if needed (optional)
// Step 4 - add it to the DOM

