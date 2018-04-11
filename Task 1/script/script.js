/*
// Lecture - Operators
const now = 2018;
let birthYear = now - 27;

birthYear = now - (27 *2);
console.log(birthYear);

let agePaul = 27;
let ageJohn = 27;

agePaul = (3+5)*4-6;
console.log(agePaul);

agePaul = ageJohn = 26;

*/


/*
//Lecture If else
var name = 'Paul';
var age = 27;
var isMarried = 'no';

if (isMarried === 'yes') {
  console.log(name + ' is married!');
}
else{
  console.log(name + ' will hopefully marry soon!');
}

isMarried = false;

if (isMarried === true) {
  console.log(name + ' is married!');
}
else{
  console.log(name + ' will hopefully marry soon!');
}
*/

//Lecture: Boolean logic and switch

/*
let age  = 25;

if ( age < 20) {
  console.log('John is a teen');
}
else if (age > 20 && age < 30){
  console.log('Joh is a young man');

}
else {
  console.log('John is a man');
}
var job;
job = prompt('what does john do for a job?')


switch (job) {
  case 'teacher':
    console.log('John is a teacher');
    break;
  case 'driver':
  console.log('john is a driver');
    break;
    case 'cop':
    console.log('john is a cop');
      break;
  default:
  console.log('john does something else');

}*/


//////
// lecture:function
/*
function calculateAge(yearOfBirth) {
  let age = 2018 - yearOfBirth;
  return age;
}


let agePaul = calculateAge(1990);
let ageMike = calculateAge(1950);
let ageMary = calculateAge(1920);

console.log(agePaul);
console.log(ageMike);
console.log(ageMary);

function yearsUntilRetirement (name, yearOfBirth) {
  let age = calculateAge(yearOfBirth);
  let retirement = 65 - age;
    if(retirement <= 0)
      {console.log(name + ' is already retired');}
        else{
                console.log(name + ' retires in ' + retirement);
      }
}

yearsUntilRetirement('Paul', 1920);
*/


//Lecture: arrays
/*
var paul =['paul', 'cater', 1990, 'developer', false];

paul.push('green');
paul.unshift('mr');
paul.pop();
paul.shift();

console.log(paul);

<<<<<<< HEAD
if(paul.indexOf('teacher') === -1)
{console.log('paul is a developer');}
=======
if(paul.indexOf('developer') === -1)
*/

//lecture objects
/*
var paul = {
  name:'Paul',
  lastName:'Cater',
  yearOfBirth: 1990,
  job:'developer',
  isMarried:false,
  family:['dad','sister','brother'],
  calculateAge: function() {
    return 2016 - this.yearOfBirth;
  }
};
console.log(paul);
console.log(paul.lastName);
console.log(paul['lastName']);
console.log(paul.family[1]);
paul.lastName = 'Cater_';
console.log(paul.lastName);*/
//console.log(paul.calculateAge(1980));
//console.log(paul.calculateAge());
/*
var age = paul.calculateAge();
paul.age = age;



var paul = {
  name:'Paul',
  lastName:'Cater',
  yearOfBirth: 1990,
  job:'developer',
  isMarried:false,
  family:['dad','sister','brother'],
  calculateAge: function() {
    //return 2016 - this.yearOfBirth;
    this.age = 2017 - this.yearOfBirth;
  }
};
/*
var jane = new Object();
jane.name = 'jane';
jane.lastName = 'new';
jane['yearOfBirth'] = 1988;
jane['job'] = 'dhdd';

console.log(jane);
*/






///////////////
// Lecture :loops

/*for (var i = 0; i <= 9; i++) {
  console.log(i);
}
*/


/*
let names = ['paul','laura','rebecca','aaron','reece'];

for (var i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}

console.log(names[i]);

let i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}


for (var i = 1; i <= 5; i++) {
console.log(i);
if ( i === 3) {
  //break; breaks the loop
  //continue; skips over when conditions are met
}

}
*/
>>>>>>> eb746d732a7fd5fef3b125cddfa07c293fda2436
