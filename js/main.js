// try using objects to solve the problem
/*
    A program to evaluate the report of students' attendance

    the result will be an object that has these properties, total, prompt, late

    Each student's record will be represented by an object with the following properties, studentName, checkInTime

    a student should be marked as prompt if their check in time is before/below 10
*/

const attendanceList = [
    {
        studentName: "Emeka",
        checkInTime: 9,
    },
    {
        studentName: "Nkiruka",
        checkInTime: 12,
    },
    {
        studentName: "Dare",
        checkInTime: 6,
    },
    {
        studentName: "Salaudeen",
        checkInTime: 13,
    },
]

attendanceList.push({
    studentName: "Michael",
    checkInTime: 13,
});


function generateReport(attendanceList) {
    let numberPrompt = 0;
    let numberLate = 0;

    attendanceList.forEach((item) => {
        if(item.checkInTime <= 10) {
            numberPrompt++;
        } else {
            numberLate++;
        }
    });

    const report = {
        totalNumber: attendanceList.length,
        numberPrompt: numberPrompt,
        numberLate: numberLate,
    }

    return report;
}


// const report = generateReport(attendanceList);
// console.log(report);

// const reportCard = document.getElementById("report-card");
// reportCard.innerHTML = `Total number of students: ${report.totalNumber} <br> Number late: ${report.numberLate} <br> Number prompt: ${report.numberPrompt}`

const attendanceForm = document.getElementById("attendance-register");

function handleRegister(event){
    event.preventDefault();

    const studentName = event.target.elements.studentName.value;
    const checkInTime = event.target.elements.checkInTime.value;

    // if (studentName === || checkInTime=== "") { how to type or in windows

    // }
    // if (isNaN(Number(checkInTime))) {
    //     return;
    // }
    attendanceList.push({
        studentName,
        checkInTime: Number(checkInTime)
    });    
   
    console.log(attendanceList);
    
}


attendanceForm.addEventListener("submit", handleRegister);
const showTheReport = () => {
    const report = generateReport(attendanceList);
    const reportCard = document.getElementById("report-card");
    reportCard.innerHTML = `Total number of students: ${report.totalNumber} <br> Number late: ${report.numberLate} <br> Number prompt: ${report.numberPrompt}`
}
document.getElementById("generate-report").addEventListener("click", showTheReport)

        
