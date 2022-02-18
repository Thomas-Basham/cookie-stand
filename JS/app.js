'use strict';
console.log('hello world');


//window to table in sales.html
// let cookieSales = document.getElementById('cookieSales');

let table = document.getElementById('cookieSales');


//window to form on sales page STEP 1 in event handling
let storeFormNew = document.getElementById('store-form-new');


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',' 2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]; // hours of operation (14 hr slots) used in LocationData()

let storeLocation = []; // seattle, tokyo, dubai, paris, lima
// console.log(storeLocation);


function LocationData(storeName, avgCookiePerSale, minCust, maxCust){
  this.storeName = storeName;
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





LocationData.prototype.render = function() {

  let trElem = document.createElement('tr'); // renders city name on first row
  let tdCityName = document.createElement('td');
  tdCityName.textContent = this.storeName;
  trElem.appendChild(tdCityName);
  table.appendChild(trElem);

  for(let i = 0; i < this.cookiesPerHour.length; i++){ // renders cookies per hour for each row per storeLocation[]
    let tdElem = document.createElement('td');
    tdElem.textContent = this.cookiesPerHour[i];
    trElem.appendChild(tdElem);
  }

  let tdCookieTotal = document.createElement('td'); // renders total on end of row
  tdCookieTotal.textContent = this.totalCookies;
  trElem.appendChild(tdCookieTotal);

};


// renders header

let theadHours = document.createElement('thead');
let thead = document.createElement('tr');

let tdBlank = document.createElement('th'); // renders blank td before hours td
tdBlank.textContent = 'LOCATION NAME';
theadHours.appendChild(tdBlank);

for(let i = 0; i < hours.length; i++){ // renders header by using store hours of operation defined up top
  let tdHours = document.createElement('th');
  tdHours.textContent = hours[i];
  table.appendChild(thead);
  theadHours.appendChild(tdHours);
  table.appendChild(theadHours);
}
let tdBlank3 = document.createElement('th'); // renders blank td before hours td
tdBlank3.textContent = 'TOTALS';
theadHours.appendChild(tdBlank3);




// renders footer




let footGrandTotal = document.createElement('tfoot');
let footerRow = document.createElement('tr');
function grandTotal(){


  let tdBlank2 = document.createElement('tf'); // renders 'Grand Total' td before hours td
  tdBlank2.textContent = 'Grand Total';
  footGrandTotal.appendChild(tdBlank2);

  let totalCookies = 0;
  for (let i = 0; i < hours.length; i++){
    let total = 0;
    // console.log(`before loop ${total}`);
    for(let j = 0; j < storeLocation.length; j++){ // fast

      total += storeLocation[j].cookiesPerHour[i];
      // console.log(`after loop ${total}`);
      // console.log(`STORE ${storeLocation[j].storeName}`);
      // console.log(storeLocation[j].cookiesPerHour[i]);
    }
    let tdGrandTotal = document.createElement('td');
    tdGrandTotal.textContent = total;
    table.appendChild(footerRow);
    footGrandTotal.appendChild(tdGrandTotal);
    table.appendChild(footGrandTotal);
    totalCookies += total;

    console.log(total);
  }
  // let tdCookieTotal = document.createElement('td'); // renders total on end of row ???????????
  // tdCookieTotal.textContent = total;
  // footerRow.appendChild(tdCookieTotal);


}
grandTotal();


// form on sales page
// STEP 3 event handling: callback function/event handler

function handleSubmit(Event){
  Event.preventDefault();
  console.log('submit');
  let storeName = Event.target.locationName.value;
  let avgCookiePerSale = +Event.target.avgSalePerCustomer.value;
  let minCust = +Event.target.minCustomers.value;
  let maxCust = +Event.target.maxCustomers.value;
  console.log(storeName, avgCookiePerSale, minCust, maxCust);

  let newLocationData = new LocationData(storeName, avgCookiePerSale, minCust, maxCust);

  newLocationData.calcCustomers();
  newLocationData.calcCookies();
  console.log(newLocationData);
  storeLocation.push(newLocationData);

  // footerRow.innerHTML = '';

  let trElem = document.createElement('tr'); // renders new city name on first row
  let tdCityName = document.createElement('td');
  tdCityName.textContent = newLocationData.storeName;
  trElem.appendChild(tdCityName);
  table.appendChild(trElem);

  for(let i = 0; i < newLocationData.cookiesPerHour.length; i++){ // renders cookies per hour for each row for new storeLocation[]
    let tdElem = document.createElement('td');
    tdElem.textContent = newLocationData.cookiesPerHour[i];
    trElem.appendChild(tdElem);
  }

  let tdCookieTotal = document.createElement('td'); // renders new total on end of row
  tdCookieTotal.textContent = newLocationData.totalCookies;
  trElem.appendChild(tdCookieTotal);

  LocationData.render = function() {
  };



}
console.log(storeLocation);
// STEP 2: Add Event listener to our element - 2 args: type of event and callback function
storeFormNew.addEventListener('submit', handleSubmit);





// helper function to render cookiesPerHour and totalCookies per storeLocation[]

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
