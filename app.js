// let activity; // holds the users current activity selection
// let activityActive = false;
// let reachDailyGoal; // holds the time after which the user achieves the daily goal reward
// let timerActive = false; // timer doesn't start yet
// let awardPoints = 0;
// let currentPoints = 0;

// activity = prompt('Choose an activity: ');
// timerActive = true;
// currentPoints = 10;

// while (timerActive == true) {
// 	setTimeout((reachDailyGoal = true), 10000);
// 	if (reachDailyGoal) {
// 		awardPoints = 10;
// 		currentPoints = currentPoints + awardPoints;
// 		alert(
// 			"congrats, you've reached your daily goal and have been rewarded ${awardPoints} points"
// 		);
// 		alert('Current Points: ' + currentPoints);
// 	}
// 	reachDailyGoal = false
// 	timerActive = false
// }

/*---------- I might use these concepts later:


if (petActivityCost > currentPoints) {
}

// pets

let petLevel=1;
let petXP=0;
//statement for increasing petXP
let petLevelTwo = petXP >= 100;
if petLevel == petLevelTwo{
	rewardUser
}

let petXP;
when petXP is >= someNumber then petLevel = 2...and so on...


pet should have 3 states: unhappy, okay, happy


document.getElementById('activity').innerHTML = activity;
------------*/

// FIXME: SyntaxError: Identifier 'petHappiness' has already been declared
// let petHappiness = 1;
// function petHappiness(point) {
// 	petHappiness = petHappiness + point;
// 	return petHappiness;
// }
// console.log(petHappiness(1));

// * TIMER SECTION ============================

var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;
function countTimer() {
	++totalSeconds;
	var hour = Math.floor(totalSeconds / 3600);
	var minute = Math.floor((totalSeconds - hour * 3600) / 60);
	var seconds = totalSeconds - (hour * 3600 + minute * 60);
	if (hour < 10) hour = '0' + hour;
	if (minute < 10) minute = '0' + minute;
	if (seconds < 10) seconds = '0' + seconds;
	document.getElementById('timer').innerHTML =
		hour + ':' + minute + ':' + seconds;
}

// * DAILY GOAL SECTION ============================

let dailyGoal = setInterval(countTimer(), 5000);
if (dailyGoal) {
	alert("Congrats! You've reached your daily goal!");
}

// * PET SECTION ============================

//petHappiness as from 0-10. 0-3 = petIsSad. 4-7 = petIsOkay. 8-10 = petIsHappy.

let petHappiness = 4;
let petSad = 0 <= petHappiness <= 3;
let petOk = 4 <= petHappiness <= 7;
let petHappy = 8 <= petHappiness <= 10;

if (petHappy) {
	console.log('Your pet is happy.');
} else if (petOk) {
	console.log('Your pet is feeling ok.');
} else if (petSad) {
	console.log('Your pet is unhappy.');
}
console.log(`Your pet is at happiness level: ${petHappiness}`);

// xp points. When user achieves daily goal, pet should gain xp

let xpPoints = 0;
let xpPointsNeeded = 100;
if (xpPoints >= xpPointsNeeded) {
	console.log('Your pet is now at level 2!');
} else {
	let xpPointsLeft = xpPointsNeeded - xpPoints;
	console.log(
		`Your pet needs ${xpPointsLeft} experience points to get to level 2!`
	);
}
