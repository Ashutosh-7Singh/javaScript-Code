{/* 
const userEmail ="a@ashu.ai"
//here we dont campare any thig  we do not use any ==  or ===  so here string is true mtlb string ko true value maan liya gya haii to hm keh skte hai ki yaha pe string jo ki userEmail hai whi truthy value haii 

if (userEmail) {
    console.log("Got user Email");
}else{
    console.log("Dont have user email");
}
*/}

{/*
// suppose string ke andar ke andar koi vaoue hi na ho tb ki hoga babua 

const userEmail ="";
if (userEmail) {
    console.log("Got user Email");
}else{
    console.log("Dont have user email");// this output will print 
}
// agr "" ke andar  sapce bhi de doge to wah count ho jayega  truithy value me babua 
*/}

{
    /*
    //agar "" ke jagah pe [] to kya hoga

const userEmail =[];
if (userEmail) {
    console.log("Got user Email");
}else{
    console.log("Dont have user email");// this output will print 
}
// to empty array ko truthy maan liya gya haii 

    */
}


{/*
// list of falsy values
 false,0,-0,BigInt,"",null,undefined,NaN
*/}

// rest all are truthy value

// some truthy value are 
// "0" ,"false"," ",[],{},function(){} so string ke andar koi value ho to truthy hota hai 

// const userEmail ="";
// if(userEmail.length === 0){
//     console.log("Arrary is empty");
// }

// const emptyObj ={}
// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }

//  if you compare 

// false == 0 // true
// false == ''// true
// 0== '' // true

// Nullish Coalescing Operator (??):
//to hme yaha pe dekhna haii null or undefined ke uper 

// let val1;
// val1=5?? 10;
// // to val ke andar me kaun sa value rhega let do the log baby

// console.log(val1)//5 
// // kai baar jab data base se call krte hai to response nhi milta hai  do values milti hai ho skta hia null or undefined  vaue aa jaye to us case me hme ?? oprator ka use ho skta haii
// let vall1
// vall1= null ?? 10
// console.log(vall1);//10 

// ??  this operator  assgin the first value  

{/* ternary operator */}

// condition ?true : false

const iceTeaPrice = 100;
iceTeaPrice>=80 ?console.log("less than 80"):console.log("more than 80")