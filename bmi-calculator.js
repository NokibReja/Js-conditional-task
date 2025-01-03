const height = 1.68;
const weight = 60;

const manBmi = weight/(height^2);

console.log(`your BMI is ${manBmi.toFixed(1)}`)

if (manBmi < 18.5) {
    console.log('you are underweight')
}
else if(manBmi >= 18.5 && manBmi <= 24.9 ) {
    console.log("you are normal")
}
else if(manBmi >= 25 && manBmi <= 29.9){
    console.log('you are overweight')
}
else {
    console.log('you are obese')
}