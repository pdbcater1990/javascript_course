///////////////////////////////////////
// Lecture: Hoisting
calulateAge(1990);
function calulateAge(year) {
  console.log(2018 - year);
}


// retirement(1990);

var retirement = function(year) {
  console.log(65 - (2017 - year));
}



// variables
console.log(age);
var age = 27;
console.log(age);

function foo() {
  var age = 70;
  console.log(age);
}

foo();
///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
