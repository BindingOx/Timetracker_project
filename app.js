let activity; // holds the users current activity selection
let activityActive = false;
let reachDailyGoal; // holds the time after which the user achieves the daily goal reward
let timerActive = false; // timer doesn't start yet
let awardPoints = 0;
let currentPoints = 0;

activity = prompt('Choose an activity: ');
timerActive = true;
currentPoints = 10;

while (timerActive == true) {
	setTimeout((reachDailyGoal = true), 10000);
	if (reachDailyGoal) {
		awardPoints = 10;
		currentPoints = currentPoints + awardPoints;
		alert(
			"congrats, you've reached your daily goal and have been rewarded ${awardPoints} points"
		);
		alert('Current Points: ' + currentPoints);
	}
	reachDailyGoal = false
	timerActive = false
}

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

------------*/

document.getElementById('activity').innerHTML = activity;
