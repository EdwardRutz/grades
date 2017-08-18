console.log("main.js active");

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// array.max = function(scores){
//     console.log("max", scores);
//     return Math.max.apply(Math, scores);
// };

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




