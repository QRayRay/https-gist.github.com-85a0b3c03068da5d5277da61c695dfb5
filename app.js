// This is the forecast for todays temperature measured in Kelvin.
const kelvin = 300;
// This is the conversion from Kelvin to Celsius
const celsius = kelvin - 273;
// Equation to calculate Fahrenheit
let fahrenheit = celsius * ( 9 / 5 ) + 32;
// founding down the decimal number from previous conversion.
fahrenheit = Math.floor(fahrenheit);
// log action to show the conversion from C to F.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
