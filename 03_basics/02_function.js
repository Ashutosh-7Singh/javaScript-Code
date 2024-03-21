function calculateCartPrice(num1){
return num1
}
// console.log(calculateCartPrice(200))//=>200
// console.log(calculateCartPrice(200,400,500))//if we  pass multiple argument but it print onlye the first one 


function calculateCartPrice2(...num1){//for multiple data we use ... these three dot called rest and spreas operator 
    return num1
    }
    // console.log(calculateCartPrice2(200))//=>200
    // console.log(calculateCartPrice2(200,400,500))// ...now these three dot call jitna bhit data hai sbko pack kro ro de do

    function calculateCartPrice3(val1,val2,...num1){ 
        return num1
        }
        // console.log(calculateCartPrice3(200))//=>200
        // console.log(calculateCartPrice3(200,400,500,2000))// =>[500,2000]


        const user ={
            username:"Aahutosh Singh",
            price:199
        }

        function handleObject(anyobject){
            console.log(`Username is ${anyobject.username} and price is  ${anyobject.price}`);
        }

        // handleObject(user);
        // or we can direct pass the username 

// handleObject({
//     username:"sam",
//     price:399
// })

const myNewArray=[200,300,400]
function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray))

console.log(returnSecondvalue([400,500,600]))

