let years = [1990,1980,1966,1978,2001,2010];

let empty = [];
/*
for (var i = 0; i < years.length; i++) {
empty[i] = years[i]
}

for (var i = 0; i < empty.length; i++) {
if (2018 - empty[i] >= 18) {
  console.log(empty[i] + ' is of full age');
}
else {
  console.log(empty[i] + ' is not full age');
}
}
*/
/
let full_1 =[];
let full_2 = [];

const printFullAge = function(years) {
  for (var i = 0; i < years.length; i++) {
    if (2018 - years[i] >= 18) {
full_1.push(true);
    }
    else{
      full_1.push(false);
    }
  }

  console.log(full_1);
}

printFullAge(years);
