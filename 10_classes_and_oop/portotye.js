// let myName="Ashutosh   ";
// console.log(myName.length);
// console.log(myName.truelength());


let myHeros=["thor","spiderman","shaktiman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",
    shaktiman:"rounf",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.ashutosh=function(){
    console.log(`ashutosh is present in all object`);
}
// heroPower.ashutosh()

Array.prototype.heyHitesh=function(){
    console.log(`Ashutosh says hello`);
}
// myHeros.ashutosh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()


// inheritance\

const User={
    name:"Monishu",
    email:"monishu@gmail.com"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User 
// this is the old appraoch for inheritance to access the other object

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="rizshu"
 String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);
 }
 anotherUsername.trueLength()