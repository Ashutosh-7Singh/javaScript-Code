const coading = ["js", "ruby", "java", "python", "cpp"]


// const values=coading.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values);// so here forEach loop return undefined so if we put any condition on the for each loop then we got undefned so here for each loop get failed moni  babu



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums=myNums.filter((num)=>num>5)// this is the basic way to write filter
// console.log(newNums);

// const newNums = myNums.filter((num) => { // here if we open {} then we have to use return and in this () we not use return then its ok moni babu
    // return num > 5
// })
// console.log(newNums);

const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);