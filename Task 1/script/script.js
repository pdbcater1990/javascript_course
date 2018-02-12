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

}
