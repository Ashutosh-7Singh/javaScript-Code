// singleton =when we create object from constructor call singleton kyu ki ye apne jaisa ek hi hoga 

//+++++++++++++++++object literral++++++++++++++++

const mySym=Symbol("key")

const JsUser={ 
name:"Ashutosh Singh",
"full name":"Ashutosh Singh",
[mySym]:"my key 1",
age:18,
location:"Muzafarpur",
email:"Ashutoh@google.com",
isLoggedIn:false,
lasLoginDays:["Monday","saturday"]

}//these {} is object

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);//to hm 2 tarike se call kr skte hai object ko one is dot (.) lga kr or dusra to[] to jha pe key me space hoga waha pe hme array se access krna hoga





// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);//so we have to access symbol also in array 
// JsUser.email="moni@toni.com"
// Object.freeze(JsUser)//freeze lgane ke baad hm kuch bhi change krenge wchange nhi hoga value me 

// JsUser.name="buuuuuuuuuuu"


JsUser.greeting=function(){
    console.log("Hello js user");
}
// console.log(JsUser.greeting);//it gived undefined 

JsUser.greetingTwo=function(){
    console.log(`Hello js user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());