// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2>1);
// console.log(2 !=1);
// all of the above comparision are easy and we know what is the answer 


// now check some better comperision 

// console.log("2">1);
// console.log("02">1); // for comperasion we have to put datatype same 

// ***********************
// please avoide these type of comparision
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
console.log(null != 0);//true

// the reason is htat an wquality check == comparisons > < >= <= work differently 
//comparisons convert null to a number ,treating it as 0.
//thats why it is (console.log(null >= 0);) giving true and  this is console.log(null > 0); false 
// ********************************



console.log(undefined == 0);//false
console.log(undefined >= 0);//false
console.log(undefined <= 0);//false

// strictly checked  === here it ceck datatype also  


