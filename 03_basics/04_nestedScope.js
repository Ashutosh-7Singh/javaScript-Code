function one(){
    const username="Ashutosh Singh"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    // two()
}
// one()

if(true){
    const username ="Ashutosh Singh"
    if(username === "Ashutosh Singh"){
        const website="youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);



//++++++++++++++++++Intresting ++++++++++++++
addone(5)//this not give error because in this function it is not hold in variable 
console.log(addone);
function addone(num){
    return num + 1
}

addTwo(5) //here it give error because here function also called expression beacaise this function hold under variable thats why it gives error
const addTwo=function(num){
    return num +2
}
