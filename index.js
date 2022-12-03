// const myName='Mohsin'
// console.log(myName)  

// TASK


// string methods like includes() split(), toLowerCase(), toUpperCase(), join()

// task
// consider a string mohsin234kamal#$---
// remove special characters and numbers
//output Mohsin Kamal
// conditionals in javascript with workings examples


// ternary operator
// if(condition A){
//     //executes when condition A is true
// }
// else{
//     //executes when condition A is false
// }

// (condition A)?executes when condition A is true:executes when condition A is false

//Task
//  const string="mohsin234kamal#$"
//  const newString=string.split('')

// const newString1=newString.slice(0,6)
// console.log(newString1)
//  const  newString3=newString1[0].toUpperCase()+newString1.slice(1).join('')
// console.log(newString3)

// const newString2=newString.slice(9,14)
// console.log(newString2)
// const newString4=newString2[0].toUpperCase()+newString2.slice(1).join('')
// console.log(newString4)

// console.log(newString3 +' '+ newString4)

//-----------another way------

// const string=  "mohsin123kamal@#ty4 ---"
// console.log(string)
// let lowerCaseString=string.replace(/[0-9]|(?!\w|\s)./g, "");
// lowerCaseString.toLowerCase()
// console.log(lowerCaseString)
// let firstName=lowerCaseString[0].toUpperCase()+lowerCaseString.slice(1,lowerCaseString.lastIndexOf('k'))
// console.log(firstName)
// let secondName=lowerCaseString[lowerCaseString.lastIndexOf('k')].toUpperCase()+
// lowerCaseString.slice(
//     lowerCaseString.lastIndexOf(
//         'k')+1,lowerCaseString.lastIndexOf('t'))

// console.log(secondName)
// console.log(firstName.concat(' '+secondName))

//........Array functions........
//includes()
// const arr=[1,2,3]
// console.log(arr.includes(2))
// expected output: true

//concat()
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'b', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3);

//join()
//const elements = ['Fire', 'Air', 'Water'];
//console.log(elements.join());
// expected output: "Fire,Air,Water"
//console.log(elements.join(''));
// expected output: "FireAirWater"
//console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

//map()
// const array1 = [1, 4, 9, 16];
// pass a function to map
// const map1 = array1.map(x => x * 2);
// console.log(map1);
// expected output: Array [2, 8, 18, 32]

//------for loop-------
// for(let x=10;x>=1;x--)
// {
//     console.log(x)
// }

//--------for of loop-----
// let arr=[1,2,3,4,5,6,7,8];
// for(let x of arr.values()){
//     console.log(x)
// }

// let myString = "moHsin123kamal@#ty4 ---";
// let lowerCaseName;
// let firstName;
// let lastName;
// let fullName;
// myString = myString.replace(/[0-9]|(?!\w|\s|\n|\r)./g, "");
// lowerCaseName = myString.toLowerCase();
// firstName =lowerCaseName[0].toUpperCase().concat(
//   lowerCaseName.slice(1, lowerCaseName.lastIndexOf("k")));
// lastName =
//   lowerCaseName[lowerCaseName.indexOf("k")].toUpperCase() +
//   lowerCaseName.slice(
//     lowerCaseName.indexOf("k") + 1,
//     lowerCaseName.indexOf("t")
//   );
// fullName=firstName.concat(' ',lastName)
// // console.log(myString);
// console.log(firstName);
// console.log(lastName);
// console.log(fullName);
// console.log(firstName.concat(" ", lastName));
//-------------Template Literals-----------//
// const firtname = "mohsin";
// const birthYear = 1996;
// const currentYear = 2022;
// const job = "developer";
// // const result =
// //   "I'm " + firtname + (currentYear - birthYear) + "old" + "and I'm" + job;
// const result=`I'm ${firtname}, a ${currentYear-birthYear} old ${job}.`
// console.log(result);
// const baseHeaders = {
//   proxy: true,
//   status: 200,
//   timeouts: true,
//   url: "https://opensea.io",
//   testnets: false,
// };
// let url;
// let result;
// if (baseHeaders.testnets == true) {
//   url = "https://testnets-opensea.io";
//   baseHeaders.url = url;//undefined
// }
// baseHeaders.url.includes("testnets")
//   ? (result = `Yes the ${url} is testing url`)
//   : result=`No the ${baseHeaders.url} is not testing`;
// console.log(result);
// -----------------Loops----------------//
// while loop ---> executes untill a certain condition stays true or maybe false i.e a certain condition is satisfied
// for loop ---> executes until a point i.e a specified counter is not reached
// for of loop
// keys()---> returns the index numbers
// values()----> returns values at each index
// entries()--> returns both indexes and values
// const baseHeaders = {
//   proxy: true,
//   status: 200,
//   timeouts: true,
//   url: "https://opensea.io",
//   testnets: false,
// };
// while(baseHeaders.proxy){
//   console.log("runnig...");
//   baseHeaders.proxy=false
// }
// const arr = ["a", 34, [4, 3], baseHeaders];
// for(let x=0;x<arr.length;x++){
// console.log(x);
//   console.log(`Value at index: ${x} is: ${arr[x]} having position: ${x+1} in arr`);
//   // console.log(arr[x]);
// }
// for(let [index,value] of arr.entries()){
//   console.log(`Value at index: ${index} is: ${value} having position: ${index+1} in arr`);
//    // console.log(x);
// }


// const studentArray = [
//   {
//     name: "Isha",
//     birthyear: 1998,
//     currentyear: 2022,
//     job: "anotator",
//     maritalStatus: false,
//   },
//   [0, 0, 1, 1, 2, 3],
//   "t50",
//   "t33",
//   "p1",
//   "f1",
//   "ford",
//   [
//     "george washington",
//     "lincon",
//     "fdr",
//     "ben franklin",
//     "jfk",
//     "thomojeffersons",
//   ],
// ];

// for(let x of studentArray.values())
// {
//   console.log(studentArray(x))
// }


//----------ternary op-------
// function getFee(isMember) {
//   return (isMember ? '$2.00' : '$10.00');
// }

// console.log(getFee(true));
// // expected output: "$2.00"

// console.log(getFee(false));
// // expected output: "$10.00"

// console.log(getFee(null));
// expected output: "$10.00"

// ​console.log(3 + 4 * 5); 
// 3 + 20
// expected output: 23

// console.log(4 * 3 ** 2);
 // 4 * 9
// expected output: 36

// let a;
// let b;

// console.log(a = b = 5);
// expected output: 5

//---------Switch---------
// switch (new Date().getDay()) {
//     case 6:
//       text = "Today is Saturday";
//       break;
//     case 0:
//       text = "Today is Sunday";
//       break;
//     default:
//       text = "Looking forward to the Weekend";
//   }


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

// let calcAverageOfDolphins=(score1,score2,score3)=>{
// return (score1+score2+score3)/3;
// }
// console.log(calcAverageOfDolphins(44,23,71))

// let calcAverageOfKoalas=(score1,score2,score3)=>{
//   return (score1+score2+score3)/3;
//   }
//   console.log(calcAverageOfKoalas(65,54,49))

//   function checkWinner(calcAverageOfDolphins,calcAverageOfKoalas){
//     ((calcAverageOfDolphins*2)>=calcAverageOfKoalas)?console.log(`Dolphins win`): ((calcAverageOfKoalas*2)>=calcAverageOfDolphins)?console.log(`koalas wins`):console.log(`No one wins`)
//   }
//   console.log(checkWinner(calcAverageOfDolphins,calcAverageOfKoalas))

  //----other way-------
  // const average = (score1, score2, score3) => {
  //   return (score1 + score2 + score3) / 3;
  // };
  // const avgDolphins = average(85, 54, 41);
  // const avgKoalas = average(23, 34, 27);
  //   if (avgDolphins >= 2 * avgKoalas) {
  //     console.log("Dolphins win");
  //   } else if (avgKoalas >= 2 * avgDolphins) {
  //     console.log("Koalas win");
  //   } else {
  //     console.log("neither team wins");
  //   }

  

//------array concept----
// const arrOf=[1,4,7]
// arrOf[1]=4
// console.log(arrOf)


// Coding Challenge #06
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)


// function calclip(bill)
// {
//   if(bill>=50 && bill<=300){
//     return bill*(15/100)
//   }
//   else{
//     return bill*(20/100)
//   }
// }

// // console.log(calclip())

// const bills=[125,555,44]
// let tips=[]
// let total=[]
// for(let [index,value] of bills.entries())
// {
//   // console.log( calclip(value))
//   console.log(value)
//  tips.push(calclip(value))
// total.push( value+calclip(value))
// }

// console.log(tips)
// console.log(total)