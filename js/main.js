console.log("main.js active");

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

//Number of grades in a batch
var gradeNum = document.getElementById('totalGradesOut');
console.log("total grades in batch", scores.length); //12
gradeNum.innerHTML += `The number of grades in this batch are:  ${scores.length}`;

//max grade
var maxGrade = Math.max.apply(Math, scores);
console.log("max grade", maxGrade); //98

var maxNum = document.getElementById("gradeMaxOut");
maxNum.innerHTML += `The highest grade is ${maxGrade}! 😀`;

//lowest grade
var minGrade = Math.min.apply(Math, scores);
console.log("min grade", minGrade); //55

var minNum = document.getElementById("gradeMinOut");
minNum.innerHTML += `The lowest grade is ${minGrade} 😞`;

//Frequency of grades

// grade >= 90 is an A, count
// grade <= 50 is an F, count
//Create an array for each: 60s, 70s, 80s and count using length property.



//Average Grade













