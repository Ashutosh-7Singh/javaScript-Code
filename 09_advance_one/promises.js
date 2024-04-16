{
  /* 
const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //Db calls cryptography ,network

    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})
*/
}
//direct not in varibale

{
  /* 
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async is resolved 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("promise consuimed");
})
*/
}

// promisse 3 completed here we learn how we send data in resove and access in .then

{
  /* 
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"Chai",email:"chai@cexample.com"})    
    }, 1000);
})
promiseThree.then(function(user){
    console.log(user);

})
*/
}

{
  /* 
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Ashtosh", password: "12345" });
    } else {
      reject("ERROR:SOme thing went wrong");
    }
  }, 2000);
});
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);

})
.catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promises is either reslved or rejected"));
*/
}

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Ashutosh", password: "12234" });
    } else {
      reject("ERROR:JS Went wrong");
    }
  }, 1000);
});

{
  /* 
async function consumePromiseFive(){
    const response=await promiseFive
    console.log(response);
}
consumePromiseFive()
*/
}
{
  /*
    async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();
    */
}

// using fetch in async and await 
// async function getAllUser() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data =await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUser();


{/* same upper code in we already done in try and now same code in .then*/}

fetch('https://jsonplaceholder.typicode.com/users')
.then((Response)=>{
return Response.json()
})
.then((data)=>{
console.log(data);
})

.catch((error=>{
    console.log(error);
}))