const busFare =800;
const age =66;
const isStudent = false;


if (age<10) {
    console.log('He has got free ticket')
}else if(isStudent){
    console.log(`you have got 50% discount ${busFare/2}`)
}else if(age >= 60){
    // const newFare = busFare- 15%
    console.log(`you have got 15 % discount ${busFare*0.85}`)
}else{
    console.log(`You have to pay ${busFare}`)
}