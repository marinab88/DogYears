const myAge=32; // My age.
let earlyYears=2; // The first 2 years of a dog.

earlyYears=earlyYears*10.5; 

let laterYears=myAge-2; // Substract the first 2 years from my age.
 
laterYears=laterYears*4; // Multiplied my later years to calculate the dog later years.

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears=earlyYears+laterYears; // Calculate my age in dog years.
let myName='MARINA';
myName=myName.toLowerCase(); // Return my name with lowercase letters.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
// My name and my years displayed in dog years using a string interpolation.