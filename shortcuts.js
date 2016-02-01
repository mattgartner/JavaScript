//Prompt
var answer = prompt('What color is the moon?');

//While Loop
while ( ) {
  // this is the loop
}

//Example: loop that runs 10 times
var counter = 1;
while ( counter <= 10 ) {
  console.log(counter);
  counter += 1;
}

//Do While Loop
do {
  // code for loop goes here
  // it runs AT least one time
} while ( )

//For Loop
for (var i = 0; i < 10; i += 1) {
   // do something in here
}

//Break a loop
while (true) {
  // this is an endless loop
  break;
  // but break, lets you "break out" of the loop
}

//Create a function
function myFunction() {
  // do a bunch of stuff here
}

//Call a Function
myFunction();

//Arrays
var scores = [100, 99, 99, 72, 60];
var names = ['Joan', 'Amit', 'Sarah', 'Ricardo', 'Piers'];
var values = [1, -100, true, false, 'JavaScript'];

//Add items to an Array
var items = ['Hat', 'Ball', 'Shoes'];
items.push('Socks','Scarf');
// items is now ['Hat', 'Ball', 'Shoes', 'Socks', 'Scarf']

//Add items to the beginning of an Array
var items = ['Hat', 'Ball', 'Shoes'];
items.unshift('Socks','Scarf');
// items is now ['Socks', 'Scarf', 'Hat', 'Ball', 'Shoes']

//Remove the first item of the array
var items = ['Hat', 'Ball', 'Shoes'];
var firstItem = items.shift();
// firstItem now holds 'Hat'
// and items is now ['Ball', 'Shoes']


//Remove the lasst item of the array
var items = ['Hat', 'Ball', 'Shoes'];
var lastItem = items.pop();
// lastItem now holds 'Shoes'
// and items is now ['Hat', 'Ball']

//For...in loop
for ( var key in object ) {
	//do something
}

//Example: Objects and for...in
var person = {
	name: 'Matt',
	country: 'US',
	age: 25,
	skills: ['JavaScript', 'HTML', 'CSS']
};

for (item in person) {
	console.log(item, ': ', person.[item]);
}