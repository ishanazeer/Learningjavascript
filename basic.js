// terminal open => ctrl+j
// comment likhny k liye "forwar slash => //" or u can simplyu press ctrl+/
// moving up and down => alt+up or alt+down
// select multiple occurances is  select the thing ctrl+d
//------Naming Convention-----------//
// camel case notation
// my array name
// const myArrName
// const myName='Isha'
 //----------------------------DATA TYPES-----------------------------//
// const numberOne="abc";
// console.log(typeof(numberOne))

//------variable declaration---///
// let ---> value can be changed at anytime (Block Scoped)
// const ---> can never be changed once declared (Block Scoped)
// var ---> old way declaration can be changed anytime this can be accessed anywhere in module
// let yourNmae='isha'
// console.log(yourNmae)
// yourNmae=3;
// console.log(yourNmae)
// var myName='Isha';
// console.log(myName)
//  myName=3;
//  console.log(myName)

//-------Objects-----///
// function myfunction(a){
//     const student={
//         name:a,
//         age:23,
//         emplomentStatus:true,
//         siblings:4,
//         education:'bachelors'
//     }

//     //Adult=boolean
//     // student.adult=true
//     student['adult']='true'
//     // console.log(student)
//     console.log(student.name)
// }
// let newName='Isha'
// myfunction(newName)

//=========Arrays===========///
// let student={
//     name:'Isha',
// }
// const myArr=['1',2,'true',student,true];
// student.age=23
// ['1',
// 2,
// 'true',
// {
//     name:"Isha",
// },
// true]
// student.age=23;
// const student={
//     name:'Isha',
//     age:23
// }
// myArr[3]=student
// student.age=23
// ['1',
// 2,
// 'true',
// {
//     name:"Isha",
//     age:23,
// },
// true]
// console.log(myArr[3])  
// console.log(myArr)

//
//add/insert
// push() ---> adds/inserts at the end of array
//unshift() ----> adds from the end
//delete/remove
// pop() ----> removes/deletes from the end
// shift() ---> remove at the start
//remove from particular index
//slice() returns new Array
//['1',2,'true',student,true] will remain unchanged
//myArr.slice(1,2)=> value deleted = 2 then it saves that value in a new array and return that array 




//----------------------------
//splice() overrides the existing array
//['1',2,'true',student,true]
//==> myArr=['1',true]
// myArr=myArr
//['1',true]
//----------------------------------

let student={
    name:'Isha',
}
const myArr=['1',2,'true',student,true];
// myArr.push(34)
// console.log(myArr)
// myArr.pop()
//myArr.shift()
// myArr.unshift('Isha')
// console.log(myArr)
// myArr.splice(1,3)
// const newArr=myArr.slice(1,3) //-----> returned [2] 1-2 inbetween index no 1 and 2 all values to be removed
// console.log(myArr)
// =['1','true',student,true];


