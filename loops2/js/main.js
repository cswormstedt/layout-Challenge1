//1

for (var i = 50; i >= 20; i--){
	if( i % 3 === 0){
		console.log(i)
	}
}

//2

//for(var i = 1; i <=0; i++)

//3

var classmates = ["Bridjet", "Nathan", "Matias",
				  "Mike", "Jason", "Reuben",
				  "Ben", "Lane", "John",
				  "Chris", "Terry", "Ann",
				  "Katelyn", "Naomi", "Jeff"];

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

//bonus hard mode //NESTED LOOP loopception

var league = 
	[
		{name: "NFL", 
			players: [
				{name: "Tom Brady", goat: false}, 
				{name: "Walter Payton", goat: true}
			]
		}, 
		{name: "NBA", 
			players: [
				{name: "Michael Jordan", goat: true}, 
				{name: "Lebron James", goat: false}
			]
		},
		{name: "MLB", 
			players: [
				{name: "Babe Ruth", goat: true}, 
				{name: "Alex Rodriguez", goat: false}
			]
		}
	];

var goats = [];

for (var i = 0; i < league.length; i++) {
	for (var j = 0; j < league[i].players.length; j++)
		if (league[i].players[j].goat){
			goats.push(league[i].players[j].name)
		}
	}
	


// var players = [{name: "Babe Ruth", goat: true}, 
// 				{name: "Alex Rodriguez", goat: false}
// 		}]


// for (var i = 0; i < players.length; i++)
// 	if (players[i].goat){
// 		console.log(players[i].name)
// 	}