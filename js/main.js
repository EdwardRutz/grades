console.log("main.js active");


var gradeNum = document.getElementById('gradeOut1');


var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

gradeNum.innerHTML += `The number of grades are:  ${scores.length}`;

var temp = "This is a string.";
var count = (scores.match(//g) || []).length;
console.log(count);