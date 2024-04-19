function SetUsername(username){
// complex DB Calls
    this.username=username

}

function createUser(username,email,password){
    SetUsername(username)//here many people think we call the username form SetUsername but in reality only refrence is gone from here so for calling we have to use .call to hold the reference 
    SetUsername.call(username)//but here again we hold the refrence but we didnt get the value because it hold but when we run it get clear so we have to pass our this to tell the take my this for the context area
    SetUsername.call(this,username)//after sending this then context area is changed okey tripu 
    this.email=email
    this.password=password
}

const monishu=new createUser("gem","gem@gem.com","1234")
console.log(monishu);