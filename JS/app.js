'use strict';
console.log('hello world');



let cookieSales = document.getElementById('cookieSales'); //window to table in sales.html




let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',' 2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; // hours of operation (14 hr slots) used in LocationData()

let storeLocation = []; // seattle, tokyo, dubai, paris, lima
// console.log(storeLocation);

function LocationData(name, avgCookiePerSale, minCust, maxCust, customersPerHour, cookiesPerHour, totalCookies){
  this.name = name;
  this.avgCookiePerSale = avgCookiePerSale;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  storeLocation.push(this);
}
LocationData.prototype.calcCustomers = function() { // calculates and pushes this.customersPerHour // random cookie sales per hour within scope of min/max avg customers per hour
  for (let i = 0; i < hours.length; i++) {
    this.customersPerHour.push(randomCustNumber(this.minCust, this.maxCust));
    // console. log('customers per hour' + this.customersPerHour);

  }
};
LocationData.prototype.calcCookies = function(){ // calculates and pushes this.cookiesPerHour // cookies sold each hour defined by multiplying avg cookie per sale * randomly-generated customers per hour
  this.calcCustomers();
  for (let i = 0; i < hours.length; i++){
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale));
    this.totalCookies += (this.cookiesPerHour[i]);
    // console.log('cookies per hour ' + this.cookiesPerHour);
    // console.log('total cookies: ' + this.totalCookies);


  }
};

new LocationData('Seattle',6.3,23,65);
new LocationData('Tokyo',1.2,3,24);
new LocationData('Dubai',3.7,11,38);
new LocationData('Paris',2.3,20,38);
new LocationData('Lima',4.6,2,16);

// renders table

let table = document.getElementById('cookieSales');
LocationData.prototype.render = function() {

  let trElem = document.createElement('tr'); // renders city name on first row
  let tdCityName = document.createElement('td');
  tdCityName.textContent = this.name;
  trElem.appendChild(tdCityName);
  table.appendChild(trElem);

  for(let i = 0; i < this.cookiesPerHour.length; i++){ // renders cookies per hour for each row per storeLocation[]
    let tdElem = document.createElement('td');
    tdElem.textContent = this.cookiesPerHour[i];
    trElem.appendChild(tdElem);
  }

  let tdCookieTotal = document.createElement('td'); // renders total on last row
  tdCookieTotal.textContent = this.totalCookies;
  trElem.appendChild(tdCookieTotal);

};


let theadHours = document.createElement('thead'); // renders header    place header and footer outside of render function
let thead = document.createElement('tr');

let tdBlank = document.createElement('td'); // renders blank td before hours td
tdBlank.textContent = '';
theadHours.appendChild(tdBlank);

for(let i = 0; i < hours.length; i++){ // renders header by using store hours of operation defined up top
  let tdHours = document.createElement('td');
  tdHours.textContent = hours[i];
  table.appendChild(thead);
  theadHours.appendChild(tdHours);
  table.appendChild(theadHours);
}

let tdTotals = document.createElement('td'); // renders total td after hours td
tdTotals.textContent = 'Total sold per day';
theadHours.appendChild(tdTotals);



// helper function to instatiate cookiesPerHour and totalCookies per storeLocation[]

function renderAllLocations() {
  for(let i = 0; i<storeLocation.length; i++){
    let currentLocationData = storeLocation[i];
    currentLocationData.calcCustomers();
    currentLocationData.calcCookies();
    currentLocationData.render();
  }
}
renderAllLocations();
// console.log(renderAllLocations);

// form on sales page

let storeFormNew = document.getElementById('store-form-new');

function handleSubmit(Event){
  Event.preventDefault();
  console.log('submit', submit);
  let cookiesPerDaySold = +Event.target.cookiesPerDaySold


  

}

storeFormNew.addEventListener()




// Helper function/method for generating random number of customers per hour

function randomCustNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(`random number gerenator is working: ${randomCustNumber(1,10)}`);
















// NOTES






//   name: 'Lima',
//   avgCookiePerSale:4.6,
//   minCust: 2,
//   maxCust: 16,
//   customersPerHour: [],
//   cookiesPerHour: [],
//   totalCookies: 0,

//   calcCustomers: function() { // calculates and pushes this.customersPerHour // random cookie sales per hour within scope of min/max avg customers per hour
//     for (let i = 0; i < hours.length; i++) {
//       this.customersPerHour.push(randomCustNumber(this.minCust, this.maxCust));
//       console. log('customers per hour' + this.customersPerHour);
//     }
//   },

//   calcCookies: function(){ // calculates and pushes this.cookiesPerHour // cookies sold each hour defined by multiplying avg cookie per sale * randomly-generated customers per hour
//     this.calcCustomers();
//     for (let i = 0; i < hours.length; i++){
//       this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale));
//       this.totalCookies += (this.cookiesPerHour[i]);
//       console.log('cookies per hour ' + this.cookiesPerHour);
//       console.log(this.totalCookies);
//     }
//   },
// };











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














// NOTES

// need a loop that will return 14 random numbers from randomCookieNumber Function according to it's parent object's min/max customers.
// neeed the total of those numbers added.

// ********* DOM MANIPULATION ***********

// Step 1 - JS Needs a window into the DOM - normally listed at the top of the JS page
// Step 2 - JS will create an element - document.createElement - method, string of the html element you want create
// Step 3 - Give it context if needed (optional)
// Step 4 - add it to the DOM
