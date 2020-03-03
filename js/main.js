var food = "50%";
var water = "65%";
var oxygen = "80%";
var speedCurrent = 16000;
var speedMax = 24000;
var distance = 225000000;
var distanceCurrent = 175340070;
var distanceCurrentPercentage = distanceCurrent / distance * 100;

document.querySelector(".progress-food").style.width = food;
document.querySelector(".progress-water").style.width = water;
document.querySelector(".progress-oxygen").style.width = oxygen;
document.querySelector(".pointer").style.transform = "rotate(" + getRotationFromSpeed(speedCurrent) + ")";
document.querySelector(".distance-progress").style.width = distanceCurrentPercentage + "%";
document.querySelector(".current-distance").innerText = distanceCurrent + " km/h";

function getRotationFromSpeed(currentSpeed){
	switch(currentSpeed){
		case 0: 
			return "-125deg";
		case 4000:
			return "-70deg";
		case 8000:
			return "-35deg";
		case 12000:
			return "0deg";
		case 16000:
			return "35deg";
		case 20000:
			return "70deg";
		case 24000:
			return "125deg";
	}
}



