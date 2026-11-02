// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object for the current date
const currentDate = new Date();

// Get the month, day, and year (months are 0-based, so add 1)
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();
const currentYear = currentDate.getFullYear();

// Add a leading zero to the month if it is only one digit
let formattedMonth;
if (currentMonth < 10) {
  formattedMonth = "0" + currentMonth;
} else {
  formattedMonth = "" + currentMonth;
}

// Add a leading zero to the day if it is only one digit
let formattedDay;
if (currentDay < 10) {
  formattedDay = "0" + currentDay;
} else {
  formattedDay = "" + currentDay;
}

// Build the message and display it on the page
const dateMessage = "Today is " + formattedMonth + "/" + formattedDay + "/" + currentYear;
document.getElementById("dateOutput").innerHTML = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

// Starting values (all strings)
const ageText = "21";
const priceText = "34.99";
const colorText = "blue";
const studentCountText = "250";

// Convert each value with Number()
const ageNumber = Number(ageText);
const priceNumber = Number(priceText);
const colorNumber = Number(colorText);
const studentCountNumber = Number(studentCountText);

// Check each converted value with Number.isNaN()
const ageIsNaN = Number.isNaN(ageNumber);
const priceIsNaN = Number.isNaN(priceNumber);
const colorIsNaN = Number.isNaN(colorNumber);
const studentCountIsNaN = Number.isNaN(studentCountNumber);

// Check each converted value with Number.isInteger()
const ageIsInteger = Number.isInteger(ageNumber);
const priceIsInteger = Number.isInteger(priceNumber);
const colorIsInteger = Number.isInteger(colorNumber);
const studentCountIsInteger = Number.isInteger(studentCountNumber);

// Part 4 (conditional): describe the "blue" value based on whether it is NaN
let colorMessage;
if (colorIsNaN) {
  colorMessage = "This value is not a valid number.";
} else {
  colorMessage = "This value is a valid number.";
}

// Part 4 (conditional): describe the price value based on whether it is an integer
let priceMessage;
if (priceIsInteger) {
  priceMessage = "This value is an integer.";
} else {
  priceMessage = "This value is not an integer.";
}

// Build one sentence per value
const ageResult = "<li>Original value: \"" + ageText + "\" &rarr; Converted: " + ageNumber +
  " &rarr; isNaN: " + ageIsNaN + " &rarr; isInteger: " + ageIsInteger + "</li>";
const priceResult = "<li>Original value: \"" + priceText + "\" &rarr; Converted: " + priceNumber +
  " &rarr; isNaN: " + priceIsNaN + " &rarr; isInteger: " + priceIsInteger + " &mdash; " + priceMessage + "</li>";
const colorResult = "<li>Original value: \"" + colorText + "\" &rarr; Converted: " + colorNumber +
  " &rarr; isNaN: " + colorIsNaN + " &rarr; isInteger: " + colorIsInteger + " &mdash; " + colorMessage + "</li>";
const studentCountResult = "<li>Original value: \"" + studentCountText + "\" &rarr; Converted: " + studentCountNumber +
  " &rarr; isNaN: " + studentCountIsNaN + " &rarr; isInteger: " + studentCountIsInteger + "</li>";

// Combine all results into one string and display it
const conversionOutput = "<ul>" + ageResult + priceResult + colorResult + studentCountResult + "</ul>";
document.getElementById("numberConversionOutput").innerHTML = conversionOutput;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Option B: grade score calculator with three test scores
const firstScore = 88;
const secondScore = 74.5;
const thirdScore = 69;
const numberOfScores = 3;

// Addition for the total, division for the average
const totalScore = firstScore + secondScore + thirdScore;
const averageScore = totalScore / numberOfScores;

// Format the average to two decimal places with toFixed()
const formattedAverage = averageScore.toFixed(2);

// Option C: show a large number with toLocaleString()
const campusPopulation = 38716;
const totalStudentHours = campusPopulation * 15;
const formattedStudentHours = totalStudentHours.toLocaleString();

// Part 4 (conditional): passing message based on the average
let gradeMessage;
if (averageScore >= 70) {
  gradeMessage = "Passing";
} else {
  gradeMessage = "Not passing";
}

// Build the results string and display it
const mathOutput = "<p>Scores: " + firstScore + ", " + secondScore + ", " + thirdScore + "</p>" +
  "<p>Total score: " + totalScore + "</p>" +
  "<p>Average score: " + formattedAverage + "</p>" +
  "<p>Result: " + gradeMessage + "</p>" +
  "<p>If " + campusPopulation.toLocaleString() + " students each take 15 credit hours, that is " +
  formattedStudentHours + " total credit hours.</p>";
document.getElementById("mathOutput").innerHTML = mathOutput;
