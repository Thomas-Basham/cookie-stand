'use strict';
console.log('hello world');


let storeLocation = []; // seattle, tokyo, dubai, paris, lima

let cookieSales = document.getElementById('cookieSales'); //window to sales.html
// let custAnHour = document.getElementById('cust-an-hour');


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',' 2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];




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
    console. log('customers per hour' + this.customersPerHour);
  }
} ;

LocationData.prototype.calcCookies = function(){ // calculates and pushes this.cookiesPerHour // cookies sold each hour defined by multiplying avg cookie per sale * randomly-generated customers per hour
  this.calcCustomers();
  for (let i = 0; i < hours.length; i++){
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale));
    this.totalCookies += (this.cookiesPerHour[i]);
    console.log('cookies per hour ' + this.cookiesPerHour);
    console.log(this.totalCookies);

  }
};


LocationData.prototype.render = function() {

  // renders name
  let h2Elem = document.createElement('h2');
  h2Elem.textContent = this.name;
  cookieSales.appendChild(h2Elem);



  // renders table
  let table = document.createElement('table');
  cookieSales.appendChild('table');

  let row1 = document.createElement('tr');
  table.appendChild(row1);

  let th1Elem = document.createElement('th');
  th1Elem.textContent = ('customers Per Hour');
  row1.appendChild(th1Elem);

  let th2Elem = document.createElement('th');
  th2Elem.textContent = ('cookies sold per hour');
  row1.appendChild(th2Elem);

  let th3Elem = document.createElement('th');
  th3Elem.textContent = 'total cookies sold';
  row1.appendChild(th3Elem);


  let row2 = document.createElement('tr');
  table.appendChild(row2);

  let td1Elem = document.createElement(td1Elem);
  td1Elem.textContent = this.customersPerHour;
  row2.appendChild(td1Elem);

};



//renders avgCookiePerSale


//renders minCust

//renders maxCust

//renders customersPerHour

//renders cookiesPerHour

//renders totalCookies

// for(let i = 0; i < this.cookiesPerHour.length; i++){   // list cookies per hour
//   let currentCookiesPerHour = this.cookiesPerHour[i];
//   let liElem = document.createElement('li');
//   liElem.textContent = currentCookiesPerHour;
//   ulElem.appendChild(liElem);
// }
// };

// LocationData.prototype.render = function() {

//   let ulElem = document.createElement('ul');     // list customers per hour
//   custAnHour.appendChild(ulElem);
//   for(let i = 0; i < this.customersPerHour.length; i++){
//     let currentCustomersPerHour = this.customersPerHour[i];
//     let liElem = document.createElement('li');
//     liElem.textContent = currentCustomersPerHour;
//     ulElem.appendChild(liElem);
//   }
// };


// new LocationData('Seattle',4.6,2,16);
// new LocationData('Tokyo',4.6,2,16);
// new LocationData('Dubai',4.6,2,16);
// new LocationData('Paris',4.6,2,16);
new LocationData('Lima',4.6,2,16);

console.log(LocationData);



function renderAllLocations() {
  for(let i = 0; i<storeLocation.length; i++){
    let currentLocationData = storeLocation[i];
    currentLocationData.calcCustomers();
    currentLocationData.calcCookies();
    // currentLocationData.render();
  }
}

renderAllLocations();

console.log(storeLocation);







// function/method for generating random number of customers per hour
function randomCustNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(`random number gerenator is working: ${randomCustNumber(1,10)}`); // to test randomCustNumber












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
