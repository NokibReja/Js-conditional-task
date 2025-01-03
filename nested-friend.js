const myResut = 84;
const myFriend = 36;

if (myResut >80) {
    if (myFriend> 80) {
        console.log('Go for lunch')
    } else if(myFriend<80 && myFriend>=60){
        console.log('Good luck next time')
    } else if(myFriend<60 && myFriend>=40){
        console.log('Unseen message')
    } else{
        console.log( 'sorry friend I will bolck you')
    }
}else{
    console.log("I am acting sad and I will sleep")
}