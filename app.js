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
console.log(`Your pet is at happiness level: ${petHappiness}`)