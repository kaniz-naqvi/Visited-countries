/********** Question 1 *********/
//Write a program to check whether a year is leap year or not.
function checkYear(year) {
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    return true;
  } else return false;
}
console.log(checkYear(2024)); //true
/********** Question 2 *********/
//Write a program to check whether a character is alphabet or not.
function checkAlphabet(chr) {
  if ((chr >= "A" && chr <= "Z") || (chr >= "a" && chr <= "z"))
    return "Alphabet";
  else return "Not Alphabet";
}
console.log(checkAlphabet("a")); //Alphabet
console.log(checkAlphabet(123)); //Not Alphabet
/********** Question 3 *********/
//Write a program to input any alphabet and check whether it is vowel or consonant.
function checkVowels(str) {
  if (str == "a" || str === "e" || str === "i" || str === "o" || str === "u")
    return true;
  else return false;
}
console.log(checkVowels("e")); //true
console.log(checkVowels("h")); //false
/********** Question 4 *********/
//Write a program to input any character and check whether it is alphabet, digit or special character.
function checkChar(chr) {
  if ((chr >= "A" && chr <= "Z") || (chr >= "a" && chr <= "z"))
    return "Alphabet";
  else if (chr >= 0 || chr <= 9) return "digit";
  else return "special character";
}
console.log(checkChar("M")); //Alphabet
console.log(checkChar(1)); //digit
console.log(checkChar("$")); //special character
/********** Question 5 *********/
//Write a program to check whether a character is uppercase or lowercase alphabet.
function checkCase(chr) {
  if (chr >= "A" && chr <= "Z") return "UpperCase";
  else if (chr >= "a" && chr <= "z") return "LowerCase";
  else "Not an Alphabet";
}
console.log(checkCase("M")); //UpperCase
console.log(checkCase("k")); //LowerCase
/********** Question 6 *********/
//Write a program to input week number and print week day.
function getWeekDays(num) {
  switch (num) {
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    case 7:
      return "Sunday";
    default:
      return "Not Valid Day";
  }
}
console.log(getWeekDays(5)); //Friday
console.log(getWeekDays(10)); //Not Valid Day
/********** Question 7 *********/
//Write a program to input angles of a triangle and check whether triangle is valid or not.
function validTriangle(a, b, c) {
  //A triangle is valid if and only if the sum of all three angles is exactly 180 deg.
  if (a + b + c === 180) return true;
  else return false;
}
console.log(validTriangle(20, 40, 50)); //false
console.log(validTriangle(90, 40, 50)); //true
/********** Question 8 *********/
//Write a program to input all sides of a triangle and check whether triangle is valid or not.
function validSides(a, b, c) {
  //Triangle Inequality Theorem
  if (a + b > c && b + c > a && c + a > b) return true;
  else return false;
}
console.log(validSides(90, 40, 50)); //false
console.log(validSides(2, 2, 3)); //true
/********** Question 9 *********/
//Write a program to calculate profit or loss.
function PLS(purchase, expense, sale) {
  if (purchase + expense > sale) return "Loss";
  else if (purchase + expense == sale) return "No profit no loss.";
  else return "Profit";
}
console.log(PLS(200, 150, 500)); //Profit
console.log(PLS(200, 250, 450)); //No profit no loss.
/********** Question 10 *********/
//Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
//Percentage >= 90% : Grade A
//Percentage >= 80% : Grade B
//Percentage >= 70% : Grade C
//Percentage >= 60% : Grade D
//Percentage >= 40% : Grade E
//Percentage < 40% : Grade F
function getGrades(phy, chem, bio, maths, com) {
  let totalMarks = 500;
  let sum = phy + chem + bio + maths + com;
  let percentage = (sum / totalMarks) * 100;
  if (percentage >= 90) return "Grade A";
  else if (percentage >= 80) return "Grade B";
  else if (percentage >= 70) return "Grade C";
  else if (percentage >= 60) return "Grade D";
  else if (percentage >= 40) return "Grade E";
  else return "Grade F";
}
console.log(getGrades(90, 85, 70, 80, 90)); // Grade B
console.log(getGrades(50, 60, 40, 40, 30)); // Grade E
/********** Question 11 *********/
//Write a program to find all roots of a quadratic equation.
function quadraticRoot(a, b, c) {
  // Calculate the discriminant
  if (a == 0) return `Not a quadratic equation`;
  const discriminant = b * b - 4 * a * c;
  let root1, root2;
  if (discriminant > 0) {
    root1 = (-b - Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b + Math.sqrt(discriminant)) / (2 * a);
  }
  return `${root1}, ${root2}`;
}

console.log(quadraticRoot(2, 5, 3));
