const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
 
  return previousSalary + 5000;
}

function forEach(array, operation) {
 
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(operation(array[i]));
  }
  return result;
}

let newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

console.log(newEmployeeSalaries); 


const studentScoresRoom1 = [12, 40, 67, 80, 100, 15, 40, 78, 75, 80];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function checkGradeOver70(score) {

  return score > 70;
}

function atLeastFive(array, operation) {

  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;
    }
  }

  return count >= 5;
}


const scoreRoom1Result = atLeastFive(studentScoresRoom1, checkGradeOver70);
const scoreRoom2Result = atLeastFive(studentScoresRoom2, checkGradeOver70);
const scoreRoom3Result = atLeastFive(studentScoresRoom3, checkGradeOver70);

console.log(scoreRoom1Result); 
console.log(scoreRoom3Result); 

