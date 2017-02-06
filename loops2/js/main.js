//1

for (var i = 50; i >= 20; i--){
	if( i % 3 === 0){
		console.log(i)
	}
}

//2

//for(var i = 1; i <=0; i++)

//3

var classmates = ["Bridjet", "Nathan", "Matias", "Mike", "Jason", "Reuben", "Ben", "Lane", "John", "Chris", "Terry", "Ann", "Katelyn", "Naomi", "Jeff"];

for(var i = 0; i < classmates.length; i+=2){
		console.log(classmates[i])
	}

//4

var menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},{name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];

var glutenFree = [];

for (var i = 0; i < menu.length; i++){
	if (menu[i].glutenFree){
		glutenFree.push(menu[i])
	}
}