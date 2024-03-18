// in official documentatin data type categories into two types 
    // 1.Premetive
    // 2.Non-Premetive 0r reference 
// so the difference between both is how you store the data in memory and how you access the data from memory 

// Premetive datatype-7 categories
// all premetive data types are call by value  means when we call any data we got the copy of that data not the reference of that data thats why any changes made all change happens in copy not in origioanl data 
// 7 tpyes:String,Number,Boolean,null,undefined,symbol ,BifInt


const score =100;//here we cant tell to define  types so it auto takes 
const scoreValue=100.3// here decimal also come in number 
const isLoggedIn=false//boolean
const outsideTemp=null// null
let userEmail;//undefined
const id=Symbol('123')
const anotherId=Symbol('123')//here we are passing same symbol in different id but both return different  

console.log(id);
console.log(anotherId);
console.log(id === anotherId);


const bigNumber=65456435768531357365n; //to store big number it is bigInt or uske baad n lga do bs


// ******************************************************
//Reference Type also called (Non-premetive )Datatype

// types are
// Array,Objects,Functions //to master java script we have to mater these + browsee events 
    
const heors=["shaktiman","naagraj","doga"]
let myObj={
    name:"Ashutosh",
    age:27,

}

const myFunction = function (){

    console.log("Hello-World");
}
console.log(typeof myFunction);

// how we can find datatype  =this can be done by using typeof
