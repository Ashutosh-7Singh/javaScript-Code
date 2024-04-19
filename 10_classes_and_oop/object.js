function multiplyBy5(num){
    return num*5
}
multiplyBy5.power=4;
console.log(multiplyBy5(6));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username,score){
    this.username=username;
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const tea=new createUser("tea",250)
const chai=new createUser("chai",25)


chai.printMe()

/*

Here's what happens behind the scene when the new kwyword is used;

a new object is created :The new kwyword initiates the createion of a new javascript object.

A prototype is linked:The newly created object gets linked to the prototype property of the onstructor function.This means that it  has access to properties and methods defined on the constructor's prototype.

The construtor is called:The constructor function is called with the specified arguments and this is bounf to the newly created object.If no explixit return value is specified from the constructor.Javascript assumes this , the newly created object ,to be the intended retrun value.

The new object is returned:After the constructor function has been called ,if it doesn't return a non-premitive value (object,array,fucntino ,etc.)the newly created object is returned */