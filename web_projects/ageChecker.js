// Write your code below!
var userAge = parseInt(prompt('whats your age'),10);

if (isNaN(userAge)) {
    console.log('not a number');
} else if (userAge > 18 && userAge <=100){
    console.log('correct age');
}else{
    console.log('too old or young');
}
