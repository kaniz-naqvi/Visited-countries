/**********Task 1**********/
//Perform the following mathematical operations on the provided variables a and b
//Add, Subtract, Multiply, Divide, Increment, Decrement, Reminder
function performOperations(a, b) {
  const addition = a + b;
  const subtraction = a - b;
  const multiply = a * b;
  const divide = a / b;
  const incrementA = a++;
  const incrementB = b++;
  const decrementA = a--;
  const decrementB = b--;
  const reminder = a % b;
  return `Add: ${addition}, Subtract: ${subtraction}, Multiply: ${multiply}, Divide: ${divide}, IncrementA: ${incrementA}, incrementB: ${incrementB},  DecrementA: ${decrementA}, DecrementB: ${decrementB}, Reminder: ${reminder}`;
}
const a = 18;
const b = 24;
// console.log(performOperations(a, b));
//Add: 42, Subtract: -6, Multiply: 432, Divide: 0.75, IncrementA: 18, incrementB: 24,  DecrementA: 19, DecrementB: 25, Reminder: 18
