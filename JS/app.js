'use strict';
console.log('hello world');
let minMax = document.getElementById(minCustomers, maxCustomers);
Let 
let minCustomers = 0;
let maxCustomers = 0;
// objects/cities  seattle tokyo dubai paris lima
let seattle = {
  name: 'Seattle',
  minCustomers:23,
  maxCustomers:65,
  avgCookiePerSale:6.3,
};

let tokyo = {
  name: 'Tokyo',
  minCustomers:3,
  maxCustomers:24,
  avgCookiePerSale:1.2,
};

let dubai = {
  name: 'Dubai',
  minCustomers:11,
  maxCustomers:38,
  avgCookiePerSale:3.7,
};

let paris = {
  name: 'Paris',
  minCustomers:20,
  maxCustomers:38,
  avgCookiePerSale:2.3,
};

let lima = {
  name: 'Lima',
  minCustomers:2,
  maxCustomers:16,
  avgCookiePerSale:4.6,
};

Lima.render = function() {
  let h2elm = document.createElement('h2');
  minMax.appendChild(h2elm);
};
console.log(Lima.maxCustomers);


seattle ();
tokyo ();
dubai ();
paris ();
lima ();

// function/method for generating random number of customers per hour
function randomCookieNumber(minCustomers,maxCustomers){
  return Math.floor(Math.random() * (maxCustomers- minCustomers + 1) + minCustomers);
}
console.log(randomCookieNumber(1,10));

// ********* DOM MANIPULATION ***********


// Step 1 - JS Needs a window into the DOM - normally listed at the top of the JS page
// Step 2 - JS will create an element - document.createElement - method, string of the html element you want create
// Step 3 - Give it context if needed (optional)
// Step 4 - add it to the DOM
