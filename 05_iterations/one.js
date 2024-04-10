// for loop 
// for( let  i=0 ;i<= 10; i++){
//     const element=i;
//     console.log(element);
// }

// for( let  i=0 ;i<= 10; i++){
//     const element=i;
//     if(element== 5){
//         console.log("5 is the best number");
//     }
//     console.log(element);
// }



// for( let  i=0 ;i<= 10; i++){
//    console.log(`Outer loop value :${i}`)
//     for(let j=0 ;j<=10;j++){
// // console.log(`Inner loop value ${j} and Inner loop ${i}`);
// console.log(i+'*' +j +'='+i*j)
//    }
// }

// let myArray=["flash","batman","superman"];

// for(let  i=0;i<myArray.length;i++){
//     const element=myArray[i]
//     // console.log(element);

// }

// Break and continue 

// for (let index = 1; index <=20; index++) {
//     if(index == 5){
//         console.log(`Detected 5`);
//         break//when 5 mila to loop khatam 
//     }
//    console.log(`value of I is ${index}`);
    
// }

for (let index = 1; index <=20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
    continue// it notprint the 5 and rest will continue  mtlb loop se bahar nhi jayega 
    }
   console.log(`value of I is ${index}`);
    
}