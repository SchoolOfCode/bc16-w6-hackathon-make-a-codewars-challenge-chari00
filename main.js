/*
Decrement timer

Hello challenger!
Your task is to write a function that acts as a countdown timer. 
It should decrease by one every second. 

This timer will start from a user-provided integer and stop when it reaches zero.
Only positive numbers are accepted.
*/

export function decrementTimer(seconds) {
    const countInterval = setInterval(()=>{
        seconds--;
        console.log(seconds);
        if(seconds <= 0){
            clearInterval(countInterval);
        }
    },1000)
 

 return countInterval;
}
