import { expect, test } from "vitest";
import { decrementTimer } from "./main";


test('timer function counts down correctly', async() => {
  //ARRANGE
  const seconds = 3
  //ACT
  const countdown =  decrementTimer(seconds);
  // Check that the countdown is running
    // console.log(decrementTimer(seconds))
    
//ASSERT
/* 
Assert: It checks if the expected outcome is achieved. Here, it's doing two things:

It waits for seconds + 1 seconds. This is to ensure that the decrementTimer has had enough time to count down 
and potentially destroy the countdown object.

It then checks if countdown._destroyed is true. This is the actual assertion.
If countdown._destroyed is true, it means that the decrementTimer function is working correctly 
and the countdown object is destroyed after the countdown.

The _destroyed property is used here to indicate that the countdown object should be destroyed after the countdown. 
If it's not, the test will fail.
*/
   await new Promise((resolve) => setTimeout(resolve, (seconds + 1) * 1000));
   expect(countdown._destroyed).toBe(true);
  });




