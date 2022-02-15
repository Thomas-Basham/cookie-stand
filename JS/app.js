'use strict';
console.log('hello world');

// minMax();




let salmonCookies = document.getElementById('avg-cookies');

// let seattle = {
//   name: 'Seattle',
//   minCustomers:23,
//   maxCustomers:65,
//   avgCookiePerSale:6.3,
// };

// let tokyo = {
//   name: 'Tokyo',
//   minCustomers:3,
//   maxCustomers:24,
//   avgCookiePerSale:1.2,
// };

// let dubai = {
//   name: 'Dubai',
//   minCustomers:11,
//   maxCustomers:38,
//   avgCookiePerSale:3.7,
// };

// let paris = {
//   name: 'Paris',
//   minCustomers:20,
//   maxCustomers:38,
//   avgCookiePerSale:2.3,
// };
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm',' 2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let lima = {
  name: 'Lima',
  minCustomers:2,
  maxCustomers:16,
  avgCookiePerSale:4.6,
  cookiePerHour: hours.push[15],
  getcookiePerHour: function(){
    this.cookiePerHour = randomCookieNumber(lima.minCustomers, lima.maxCustomers);
  }
};

// lima.getCookiePerHour();
console.log(lima.avgCookiePerSale);

// function/method for generating random number of customers per hour
function randomCookieNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

randomCookieNumber();
// console.log(randomCookieNumber(1,10));


lima.render = function() {
  let h1elm = document.createElement('h1');

  salmonCookies.appendChild(h1elm);
};

lima.render();


let paraElem = document.createElement('p');
paraElem.textContent = `${lima.minCustomers} and ${lima.maxCustomers}.`;
salmonCookies.appendChild(paraElem);

let ulElem = document.createElement('ul');
salmonCookies.appendChild(ulElem);

// for(let i = 0; i < this.hours.length; i++){
//   let currentHours = this.hours[i];
//   let liElem = document.createElement('li');
//   liElem.textContent = currentHours;
//   ulElem.appendChild(liElem);
// }

// need a loop that will return 14 random numbers from randomCookieNumber Function according to it's parent object's min/max customers.
// neeed the total of those numbers added.






// seattle();
// tokyo();
// dubai ();
// paris ();
// lima ();


// ********* DOM MANIPULATION ***********


// Step 1 - JS Needs a window into the DOM - normally listed at the top of the JS page
// Step 2 - JS will create an element - document.createElement - method, string of the html element you want create
// Step 3 - Give it context if needed (optional)
// Step 4 - add it to the DOM
