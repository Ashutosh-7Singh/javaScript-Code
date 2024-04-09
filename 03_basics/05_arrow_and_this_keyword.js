const user={
    username:"Ashutosh",
    price:999,

    welcomeMesssage:function(){
        console.log(`${this.username},welcome to website`)//this is use to refer current context 
    }
}
user.welcomeMesssage;