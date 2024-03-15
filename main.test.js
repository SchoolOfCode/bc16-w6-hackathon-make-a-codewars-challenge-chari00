import { expect, test } from "vitest";
import { decrementTimer } from "./main";


test('timer function counts down correctly', () => {
  //ARRANGE
  const seconds = 3
  //ACT
  const countdown = decrementTimer(seconds)
  
  console.log(decrementTimer(seconds))
   //ASSERT
  expect(countdown).toBeTruthy();
  });




