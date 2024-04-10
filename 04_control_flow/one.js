// if statement
// if ke ander me true condtition hoga to execute hoga if block agr  condition false ho gya tb if ke andar ka condition execute nhi hoga
{/* 
if(true){
//code execute
}
if(false){
//code not exectue
}
*/}

// some comparision operator
{/* 

<
>

<=

= assiging the value 

== checking the value  or data only not the type baraber hai ki nahi 

!= not euqal

=== it check the type  of data and data both are equal or not so tripple equal is little bit stricter 
*/}
const isUserLoggedIn = true
{/*

if(2=="2"){
console.log("executed");//executed
}
*/}
{/* 
if(2==="2"){
console.log("executed");//nothing output 
}
*/}

{/*
const temp=41

if(temp <50){
    console.log("temp is less than 50");
}
console.log("temp is greater than 50");

here we got both console because  temp is less than 50 is in the if contdition so it is printed but  this console  {temp is greater than 50}doesn't have nay condiiotn so it is also printed to stop the console printing directly we have one more control folow else
*/}

{/* 
const temp = 41

if (temp < 50) {
    console.log("temp is less than 50");
} else {

    console.log("temp is greater than 50");

}
console.log("ye to nahar me codtion ke to ye hmesa hi prinbt hoga baby ");

*/}
{/* scoper in java script  */ }
{/*
const score =300

if(score>100){
    const power = "fly"
    console.log(`User power:${power}`);
} here 
*/}

{/* 
// in this example we got an error ReferenceError: power is not defined beacaue one log is out side {} so these curly bracket define the scope also 
const score =300

if(score>100){
    const power = "fly"
    console.log(`User power:${power}`);
} 
console.log(`User power:${power}`);*/}

// short hand notation 

{
    /*
    //this is called implicit schope 
    const balance = 1000

if(balance >1000) console.log("false or ")
    */
}
{
    /* 
  
    const balance = 1000

if(balance >1000) console.log("false or "),
console.log("test 2");

  // comma lga kr hm multiple lod likh skte hai lekin ye bahtue chutiya wala code hoga readalble nhi hoga
    */
}
{/* nesting */ }

{/* 
const balance = 1000;
if(balance <500){
    console.log("Less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else if (balance < 900){
 console.log("less than 900")
}else{
    console.log("less than 1200");
}
*/}

// how we use nested if eslse in real life

{/* 
// here if all the condition is true the condition is run 
const userLoggedIn=true;
const debitCard=true;

if(userLoggedIn && debitCard && 2 == 2){
    console.log("allow me to buy the course")
}
*/}

{
    /*
    // so conditional rendering is there and we if use have both account then they can log in 

    const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedFromEmail=true;
if(userLoggedIn && debitCard && 2 == 2){
    console.log("allow me to buy the course")
}
if(loggedInFromGoogle || loggedFromEmail){
    console.log("user logged in ");
}
    */
}