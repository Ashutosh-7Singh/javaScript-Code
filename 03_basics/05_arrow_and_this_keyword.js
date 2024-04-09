const user={
    username:"Ashutosh",
    price:999,

    welcomeMesssage:function(){
        console.log(`${this.username},welcome to website`)//this is use to refer current context 
        console.log(this);//it give the current context of  moni beacause the conext is changed
    }
}
// user.welcomeMesssage;
// user.username="Moni"//here the context is canged for this keyword
// user.welcomeMesssage();
// console.log(this);//this gives the empty object {} because here is nothing in ths context

// function chai(){
//     console.log(this)
// }
// chai()//here we got many things  okey   also this keyword....


// function chai(){
//     let username="moni"
//     console.log(this.usernme)

// }
// chai()//undefined 

// const chai=()=>{
//     let username="moni"
//     console.log(this)

// }
// chai()//error

// basic arrow function 
// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(2,3));

// // implicit return 
// const addTwo = (num1,num2)=> num1 + num2  // implicit ka mtlab mai maan leta hoon ku return nhi likha hoga
// console.log(addTwo(2,3));

// implicit return 
// const addTwo = (num1,num2)=> (num1 + num2)  //() iske  andar rkhe hai tb return keyword nhi likha hoga lekin agr { } iske andar me likhe tb return keyword likhna hoga babu 
// console.log(addTwo(2,3));

const addTwo = (num1,num2)=> ({username:"Ashutosh"})  //what if we have to return object then we have to ()
console.log(addTwo(2,3));
