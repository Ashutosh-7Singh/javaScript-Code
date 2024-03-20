//Dates

// let myDate = new Date()
// console.log(myDate);//kuch samajh nhi aaya 
// console.log(myDate);//kuch samajh nhi aaya 
// console.log(myDate.toString());//toString sirf ek hi nhi haii or bhi hai jo milte julte haii  //output=>
// console.log(myDate.toDateString()); //output=>Wed Mar 20 2024
// console.log(myDate.toLocaleDateString());//output =>3/20/2024
// console.log(typeof myDate);//output=>object

// let myCreatedDate =new Date(2023,0,23)
// console.log(myCreatedDate);//output=> 2023-01-23T00:00:00.000Z -jo ki smjh nhi aaay iisiliye toDateString()
// console.log(myCreatedDate.toDateString());//=>Mon Jan 23 2023=> to javascript me month 0 se start hota hai smjhe ki nahi


// let myCreatedDate2=new Date(2023,0,23,5,3);
// console.log(myCreatedDate2.toDateString());//=>Mon Jan 23 2023
// console.log(myCreatedDate2.toLocaleDateString());//=>1/23/2023
// console.log(myCreatedDate2.toLocaleString());//=>1/23/2023, 5:03:00 AM



// let myCreatedDate3=new Date("2023-01-14");//yy-mm-dd
// console.log(myCreatedDate3.toDateString());//=>Sat Jan 14 2023
// console.log(myCreatedDate3.toLocaleDateString());//=>1/14/2023
// console.log(myCreatedDate3.toLocaleString());//=>1/14/2023, 5:03:00 AM



// let myCreatedDate4=new Date("01-14-2023");//dd-mm-yy //it is follow in india
// console.log(myCreatedDate4.toDateString());//=>Sat Jan 14 2023
// console.log(myCreatedDate4.toLocaleDateString());//=>1/14/2023
// console.log(myCreatedDate4.toLocaleString());//=>1/14/2023, 5:03:00 AM

// time Stamp ++++++++++++++++++
 //it is used when hme quiz ,cricket score ,poles ko design krne ke time exact time ki value ki jarurat hoti hai 
//  let myTimeStamp=Date.now()
//  console.log(myTimeStamp);//=>1710930614990

//  let myCreatedDate=new Date("1-14-2023")
//  console.log(myCreatedDate.getTime());//1673654400000 ye value milisecond me aati haii hme convert krna hoga
//  console.log(Date.now());//=>1710930760277 ye bhi millisecond me hai isko second me convert krne ke liye 1000 se devide krna hota haii
// console.log(Date.now()/1000);//=>1710930836.779  is output decimal me aa gya to decimal htane ke liye Math.celi ,Math.floor ka use kr skte haii
// console.log(Math.floor(Date.now()/1000));//=>ye second haii 1710930915


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());//2
// console.log(newDate.getDay());//3

newDate.toLocaleString('default',{
    weekday:"long"
})
