// Example 1: Write a simple console.log function
console.log("Hello, World!");

// Example 2: Define a function to calculate the area of a rectangle
function calculateArea(length: number, width: number) {
  return length * width;
}

calculateArea(4, 5); // Output: 20

// Example 3: Create an object for storing student information
class Student {
  name: string = "John";
  age: number = 18;

  static createStudent(name: string, age: number): Student {
    return new Student(name, age);
  }
}

// Example 4: Loop through an array of numbers and log each element
let myArray = [1, 2, 3, 4, 5];
myArray.forEach((element) => console.log(element));

// Example 5: Write a function to find the maximum value in an array
function findMaxValue(numbers: number[]): number {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

findMaxValue([5, 3, 9, 2, 6]); // Output: 9
