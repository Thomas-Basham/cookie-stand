'use strict';
console.log(hello world);
let kittenSection = document.getElementById('kitten-profiles');

// objects/cities
let seattle {
  name: "Seattle"
  minCustomers:23
  maxCustomers:65
  avgCookiePerSale:6.3
}

let tokyo {
  name: "Tokyo"
  minCustomers:3
  maxCustomers:24
  avgCookiePerSale:1.2
}

let dubai {
  name: "Dubai"
  minCustomers:11
  maxCustomers:38
  avgCookiePerSale:3.7
}

let Paris {
  name: "Paris"
  minCustomers:20
  maxCustomers:38
  avgCookiePerSale:2.3
}

let Lima {
  name: "Lima"
  minCustomers:2
  maxCustomers:16
  avgCookiePerSale:4.6
  console.log(Lima.randomCookieNumber)
}



// function/method for generating random number of customers per hour
function randomCookieNumber(minCustomers,maxCustomers){
  return Math.floor(Math.random() * (maxCustomers- minCustomers + 1) + minCustomers);
}


// ********* DOM MANIPULATION ***********


console.log(randomcookie())


// Step 1 - JS Needs a window into the DOM - normally listed at the top of the JS page
// Step 2 - JS will create an element - document.createElement - method, string of the html element you want create
// Step 3 - Give it context if needed (optional)
// Step 4 - add it to the DOM