console.log("main.js active");

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var gradeB = [];
var gradeC = [];
var gradeD = [];

//max grade
var maxGrade = Math.max.apply(Math, scores);

//lowest grade
var minGrade = Math.min.apply(Math, scores);



//Frequency of grades
  //First, using filter to get the top and bottom grade ranges: A, F.
  //Then if statements work thru the middle ranges: B, C, D.


//First getting the top and bottom grade ranges: A, F.
var gradeA = scores.filter(function(grade) {
 	return grade >= 90;
 });

var gradeF = scores.filter(function(grade) {
 	return grade < 60;
 });

//Getting middle ranges: B, C, D.
//Create an array for each: 60s, 70s, 80s range.
//Get grade count using length property.


for (let i = 0; i < scores.length; i += 1) {  //pushes scores to arrays
	if ((scores[i] >= 80 && scores[i] <= 89)) {
      gradeB.push(scores[i]);

   } else if ((scores[i] >= 70 && scores[i] <= 79)) {
      gradeC.push(scores[i]);

   } else if ((scores[i] >= 60 && scores[i] <= 69)) {
      gradeD.push(scores[i]);
  } 
}


//Average Grade using Reduce method
var sum = scores.reduce(function(previous, current){
	return previous + current
});
  var average = sum / scores.length;

var printAvg = document.getElementById('averageOut');
    printAvg.innerHTML += `Average score is: ${average.toFixed(1)}"`;
    //toFixed() sets decimal place to one.


//OUTPUT
//Output to Console Log
console.log("As: ", gradeA);
console.log("Bs: ", gradeB); 
console.log("Cs: ", gradeC);
console.log("Ds: ", gradeD);
console.log("Fs: ", gradeF);

console.log("Highest Grade", maxGrade);
console.log("Lowest Grade", minGrade);

console.log("average", average);

console.log("The number of grades in this batch are: ", scores.length);


//Output to index.html
var maxNum = document.getElementById("gradeMaxOut");
maxNum.innerHTML += `The highest grade is ${maxGrade}! 😀`;

var minNum = document.getElementById("gradeMinOut");
minNum.innerHTML += `The lowest grade is ${minGrade} 😞`;

var printA = document.getElementById("a");
printA.innerHTML += `A:   ${gradeA.length} (${gradeA}) ! 😀`;

var printB = document.getElementById('b');
printB.innerHTML += `B:   ${gradeB.length} (${gradeB})`;

var printC = document.getElementById('c');
printC.innerHTML += `C:   ${gradeC.length} (${gradeC})`;

var printD = document.getElementById('d');
printD.innerHTML += `D:   ${gradeD.length} (${gradeD})`;

var printF = document.getElementById("f");
printF.innerHTML += `F:  ${gradeF.length} (${gradeF}) ! 😞`;

//Number of grades in a batch
var gradeNum = document.getElementById('totalGradesOut');
gradeNum.innerHTML += `The number of grades in this batch are:  ${scores.length}`;








