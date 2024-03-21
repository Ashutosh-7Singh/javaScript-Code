const tinderUser=new Object();//this is also an empty object // on differenct this is an siglton object
// console.log(tinderUser);


const tinderUser2={}//this is also an empty object//this is an non siglton object
tinderUser2.id="23abc"
tinderUser2.name="Moni"
tinderUser2.isLoggedIn=false
// console.log(tinderUser2);

const regularUser ={
    email:"some@gmail.com ",
    fullname:{
        userfullname:{
            firstname:"Ashutosh",
            lastname:"Singh"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj6={5:"a",6:"b"}

const obj3={obj1,obj2};
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } it gives object under object

const obj4=Object.assign(obj1,obj2)//like this we can concate object
// console.log(obj4);

const obj5=Object.assign({},obj1,obj2,obj6);//so concat the object we shuold give an empty parathensis beacuse in documentation they like this  pehle {} is dene ka mtlb hai ki isme sara object jayega agr isko nhi dene to mtlbb jo object sbse pehle hoga uske andar jayega 
//so u can check on Object assign mdn
// console.log(obj5);
// so basically {} this parenthesis is called target and the object is called source 
// {target,source}

// or we can use spread operator  to concat so we don't haveto use extra parenthasis and many more 

const obj7={...obj1,...obj2}
// console.log(obj7);

//now when value come from data base like this 


const users=[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"s@gmail.com"
    },
    {
        id:3,
        email:"h@gmail.com"
    }
]
users[1].email
console.log(tinderUser2);//{ id: '23abc', name: 'Moni', isLoggedIn: false }

console.log(Object.keys(tinderUser2));//like this we can get the data in array //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser2));//like this we can get the data in array //[ '23abc', 'Moni', false ]
console.log(Object.entries(tinderUser2));//it gives each value in a saperate array =>[ [ 'id', '23abc' ], [ 'name', 'Moni' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser2.hasOwnProperty('isLoggedIn'));//ye btayega ki ye object hai ya nhi //true