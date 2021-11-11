var fullName = prompt("Please input your full name");
alert("Welcome " + fullName);
var age = Number(prompt("What is your age"));
console.log("gotten your age");
var grade;

if (age >= 18) {
  var examScore = Number(prompt("What is your exam score"));
  if (examScore > 100) {
    alert("Invalid Input");
  } else {
    // if (examScore >= 70 && examScore <= 100) {
    //   grade = "A";
    // } else if (examScore >= 60 && examScore < 70) {
    //   grade = "B";
    // } else if (examScore >= 50 && examScore > 60) {
    //   grade = "C";
    // } else if (examScore >= 40 && examScore > 50) {
    //   grade = "D";
    // } else {
    //   grade = "F";
    // }

    // tenary operator

     (examScore >= 70 && examScore <= 100) ? grade="A"
    : (examScore >= 60 && examScore < 70) ? grade="B"
    : (examScore >= 50 && examScore < 60) ? grade="C"
    : (examScore >= 40 && examScore < 50) ? grade="D"
    : grade="F"

    // alert("Fullname: " + fullName + "\nAge: " + age + " " + examScore + "\nGrade: " + grade)
    alert(
      `Fullname: ${fullName} \nAge: ${age} \nExam score: ${examScore} \nGrade: ${grade}`
    );
  }
} else {
  alert(
    "Hey " +
      fullName +
      ", you seem to be underage kindly come back when you are old enough"
  );
}
