
function sayMyName(){
    console.log("A");
    console.log("s");
    console.log("h");
    console.log("u");
    console.log("t");
    console.log("o");
    console.log("s");
    console.log("h");
}
// sayMyName();

// function addTwoNumbers(number1,number2){//when we make function defination at that time jo data dete hai wah paramaters hota hai 
//     console.log(number1+number2);

// }
// addTwoNumbers(2,"6")//call krne ke time pe jo data dete hai usko argument bolte haii
// addTwoNumbers(2,null)//call krne ke time pe jo data dete hai usko argument bolte haii
// const result=addTwoNumbers(3,5)
// console.log("Result",result);

function addTwoNumbers(number1,number2){ 
// let result=number1+number2
// return result
return number1+number2
}
const result=addTwoNumbers(3,5)
// console.log("Result",result);

function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("ashutosh"))
// console.log(loginUserMessage())//if we do not pass any argument then we got undefined

 
    
    function loginUserMessage2(username){
        if(username===undefined){
            console.log("Please enter your user name ");
            return
        }
        return `${username} just logged in`
    }
    // console.log(loginUserMessage2("ashutosh"))
    // console.log(loginUserMessage2())//if we do not pass any argument then we got undefined
    
    function loginUserMessage3(username){//or give one defalut value of username ="ashtosh"
        if(!username){ //we can also write (username===undefined)
            console.log("Please enter your user name ");
            return
        }
        return `${username} just logged in`
    }
    console.log(loginUserMessage3("ashutosh"))
    console.log(loginUserMessage3())//if we do not pass any argument then we got undefined
    

