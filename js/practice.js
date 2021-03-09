// function calculateaverage(score) {
    
// }
// or use
/**
*create a function that accepts an array of scores and return
*the average of the numbers
*/
const computeAverage = (scores) => {
    let sum = 0;
    for (let i=0; i < scores.length; i++) {
        sum = sum + scores[i]
    } 

    console.log (sum);
    const average = sum / scores.length;
    console.log(average);

    return average;
}
//a small set is used to know if our logic is right
const averageClassA = computeAverage  ([1, 2, 3, 4, 5]);
const averageClassB = computeAverage  ([144, 23, 43, 45, 35]);
 
console.log("Average for class A:", averageClassA);
console.log("Average for class B:", averageClassB);
//events are action that happens in the browser e.g "submit" 
const attendanceForm = document.getElementById("attendance-register");

function handleRegister(event) {
    event.preventDefault();

    const studentName =event.target.elements.studentName.value;
    const checkInTime =event.target.elements.checkInTime.value; 
    //check main.js for continuation
    attendanceList.push({
        studentName,
        checkInTime,
    });

    console.log(attendanceList);
}
attendanceForm.addEventListener("submit", handleRegister);
