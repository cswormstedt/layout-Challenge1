//#1
for (i = 0; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i + ' is even');
	} else if (i % 2 != 0){
		console.log(i + ' is odd');
	}
}
//#2
for (i = 1; i <= 100; i++) {
	if (i % 3 ===0 && i % 5 === 0){
		console.log('FizzBuzz');
	} else if (i % 3 === 0){
		console.log('Fizz');
	} else if (i % 5 === 0){
		console.log('buzz');
	} else {
		console.log(i);
	}
}
//#3
var pattern =[]

for (i = 0; i <= 4; i++){
	console.log(pattern += 'X');
}
//needed to be an array
//#4

obj ={a:1, b:2, c:3}

for(prop in obj){
	console.log('obj_' + prop, '=', obj[prop]);
}

//#5

var beerOnWall = ['_bottles of beer on the wall']
var bottlesOf = ['_bottles of beer, take one down, pass it around']
var hospital = ['Ambulance is on its way' ]

for (i = 99; i >= 0; i--) {
	if (i >= 1){
	console.log( i + beerOnWall, i + bottlesOf + (i-1) + beerOnWall);
} 
	else {
	console.log(hospital);
	}
}
