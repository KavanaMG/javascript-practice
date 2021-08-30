const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;


const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2; 
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}