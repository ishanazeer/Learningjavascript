//------IMPORTANT MUST READ------------//
// The tasks which you have to complete are from 1-4 and 7-8
//-------------------------//
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// Test data:
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

//-----Solution-------
// missing part 3

// let marksMass=78,marksHeight=1.69
// let johnMass=92,johnHeight=1.95
// let markBMI=marksMass/marksHeight**2
// let johnBMI=johnMass/johnHeight**2
// let markHeigherBMI=markBMI>johnBMI
// if(markHeigherBMI=true){
//     console.log(`Mark has higher BMI wich is ${markBMI}`)
// }
// else{
//     console.log(`john has higher BMI wich is ${johnBMI}`)
// }

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement

//--------solution------
// correct but seems like u just wrote one code and copy pasted in both places(challenge 1 and 2 ) with no effort what so ever to read the satement
// pay more attention to details

// let marksMass=78,marksHeight=1.69
// let johnMass=92,johnHeight=1.95
// let markBMI=marksMass/marksHeight**2
// let johnBMI=johnMass/johnHeight**2
// if(markBMI>johnBMI){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) `)
// }
// else{
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI}) `)
// }

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,and print it to the console. Don't forget that there an be a draw, so test for that as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
//4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
// Test data:
// 1. Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// 2 Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// 3 Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//--------solution------
// this was not to be done with function
// this challenge was to check your knowledge about operators and variables

// let dolphinAvg=96+108+89/3
// let koalasAvg=88+91+110/3
// if(dolphinAvg>koalasAvg && dolphinAvg>=100){
//     console.log(`Dolphins wins the competition`)
// }else if(koalasAvg>dolphinAvg && koalasAvg>=100){
//     console.log(`Koalas wins the competition`)
// }else if(dolphinAvg=koalasAvg>=100){
//     console.log(`Competition draw as both teams have same average score`)
// }else {
//     console.log(`No team wins the trophy`)
// }

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
// Test data:
// Data 1: Test for bill values 275, 40 and 430
// Hints:
//  To calculate 20% of a value, simply multiply it by 20/100 = 0.2
//  Value X is between 50 and 300, if it's >= 50 && <= 300

//--------Solution-----
//correct

// let bill=275
// let tip
// (bill>=50 && bill>=300)?
//     console.log(`The bill is ${bill} , the tip is ${tip=bill*15/100} and the total value is ${bill+tip} `): console.log(`The bill is ${bill} , the tip is ${tip=bill*20/100} and the total value is ${bill+tip}`)

/////
// Coding Challenge #5
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins.
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
// 5. Ignore draws this time
// Test data:
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// To calculate average of 3 values, add them all together and divide by 3
// To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores

//-------solution-------
//   const average = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
//   };
//   const avgDolphins = average(85, 54, 41);
//   const avgKoalas = average(23, 34, 27);
//     if (avgDolphins >= 2 * avgKoalas) {
//       console.log("Dolphins win");
//     } else if (avgKoalas >= 2 * avgDolphins) {
//       console.log("Koalas win");
//     } else {
//       console.log("neither team wins");
//     }

// Coding Challenge #06
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)

//--------Solution--------
// function calclip(bill)
// {
//   if(bill>=50 && bill<=300){
//     return bill*(15/100)
//   }
//   else{
//     return bill*(20/100)
//   }
// }
// const bills=[125,555,44]
// let tips=[]
// let total=[]
// for(let [index,value] of bills.entries())
// {
//  tips.push(calclip(value))
// total.push( value+calclip(value))
// console.log(`Bill is : ${
//             bills[index]
//         } , the tip is ${tips[index]} and the total is ${total[index]}`)
// }


// Coding Challenge #07
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78kg and is 1.69m tall. John weights 92kg and is 1.95m tall.

//------Solution-------
//wrong
// when you have the mass and height in the object of john and mark why are you passing a number to calcBMI instead of passing the property value from each object
// this is a test of ur knowledge and concept of the respective topic and if you cant use those topics then whats the point of all this?????????????

// let mark={fullName: `Mark Miller`,mass:78,height:1.69}
// let john={fullName:`John Smith`, mass:92, height:1.95}
// function calcBMI(mass,height){
//     return mass/height**2
// }
// mark.BMI=calcBMI(mark.mass,mark.height)
// john.BMI=calcBMI(john.mass,john.height)
// if(mark.BMI>john.BMI){
//         console.log(`Mark's BMI (${mark.BMI} is higher than John's (${john.BMI}))`)
//     }
//     else{
//         console.log(`John's BMI (${john.BMI} is higher than Mark's (${mark.BMI}))`)
//     }

// Coding Challenge #08
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0.Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
// 4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

//---------solution-------

// let arrBill=[22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52]
// let tips=[]
// let totals=[]
// function calclip(bill)
// {
//   if(bill>=50 && bill<=300){
//     return bill*(15/100)
//   }
//   else if(bill>300){
//     return bill*(20/100)
//   }else{
//     return 0
//   }
// }
// for (let x=0;x<arrBill.length;x++){
//    tips.push(calclip(arrBill[x]))
// instead of again calling the calcTip() here u can simply add tips[x]
// will make the code more robust and performant
//WHICH IS OUR GOAL AS A DEVELOPER
//technically correct though
//    totals.push(arrBill[x]+calclip(arrBill[x]))
//    totals.push(arrBill[x]+tips[x])
//    console.log(`The Bill is ${arrBill[x]} , ths tip is ${tips[x]}, and the total is ${totals[x]}`)
// }

//why is this for loop here??????
// and if you want to use it then should'nt this check for the lenght of all 3 arrays which you populated in the above loop???
// this is again waste of resources when this same could have been achieved with just the above loop
//code duplication
// for(let x=0;x<arrBill.length;x++)
// {
//     console.log(`The Bill is ${arrBill[x]} , ths tip is ${tips[x]}, and the total is ${totals[x]}`)
// }

// let average
// function calcAvg(arrBill){
//always use this let sum; for undefined values rather then let sum=0;
//consider if the value did not get populated in sum in the for loop then your value of sum will be 0 which will be incorrect
// that means it will create bugs and generate errors
//     let sum=0
//     for (let x=0;x<arrBill.length;x++){
//         sum=sum+arrBill[x]
//     }
//      return average=sum/arrBill.length

// }
// console.log(`The average of all bills is ${calcAvg(arrBill)}`)

/////////////////////// MUST READ ///////////////////////////////
//PLEASE READ OUT THE QUESTIONS CORRECTLY AND FULLY UNDERSTAND//
//THEM BEFORE YOU ATTEPMT THEM> REMOVE ALL THESE BUGS AND WORK/
//ON THE COMMENTS I HAVE WRITTEN AND SEND ME THE PROPER CODE//
/////////////////////////////////////////////////////////////
