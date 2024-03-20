// ++ Arrays ++

const myArr=[0,1,2,3,4,5]
// const myHeors=["shaktiman","naagraj"]
// const myArr2=new Array(1,2,3,4,5)
// console.log(myArr[0]);//0
// console.log(myArr[1]);//1

// Array metnods

// myArr.push(6)//push method add value in the last
// console.log(myArr);

// myArr.pop();//pop method remove value from the end
// console.log(myArr);

// myArr.unshift(9);//add value in first 
// console.log(myArr);

// myArr.shift();//remove value from first 
// console.log(myArr);

// *** kuch method js ke andar question puchne ke liye bhi hai 
// console.log(myArr.includes(9));//mtlb myArr me 9 hai ya nhi 
// console.log(myArr.indexOf(9));//agar koi value array ,e exist nhi krti hai to -1 or krti hai to we got index number okey

// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



// slicwe ,splice 

console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log('B',myArr);



const myn2=myArr.splice(1,3)
console.log('c',myArr);

console.log(myn2);