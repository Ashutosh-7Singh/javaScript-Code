// for of 
// ["","",""] // so here we are putting String under the array 
// [{},{},{},{}]// and here we are putting object inside the array

// const arr=[1,2,3,4,5,6,7]
// for (const num of arr) {
//     console.log(num);
// }


// const greetings= "hello worlds!"
// for (const greet of greetings){
//     console.log(greet);
// }


// Maps
// it allow only uniqe values okey and follow the same order
// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('FR',"France")
// console.log(map);

// for(const key of map){
//     console.log(key);// this gives the full map key and value in same place
// }

// for(const [key,value] of map){
//     console.log(key,":-" ,value);// this gives inthe key and value format
// }



const myObject={
    "game1":'NFS',
    "game2":"Spiderman",
    "game3":"call of duity"
}

for(const [key,value] of myObject){
    console.log(key,":-" ,value)//here we got the error we cant iterate object like to aage dekhen ke liye four.js pe jaye ok moni 
}