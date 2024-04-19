const user={
    username:'Ashutosh',
    loginCount:'9',
    signedIn:true,

getauserDetails:function(){
    // console.log("Got the user details form database");
    console.log(`Username: ${this.username}`);
    // console.log(this);
}
}

// console.log(user.loginCount);
// console.log(user.getauserDetails);

const user2={
    username:"Moni",
    loginCount:8,
    singinedIn:true,

    getauserDetails:function(){
        // console.log((this));
    }
}

// constructor function 

// const promiseONe = new Promise()
// const data=new Date()

function Uuser(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    return this
}
const userOne= new Uuser("Ashutosh",12,true)
const userTwo=new Uuser("Moni",13,false)
console.log(userOne);