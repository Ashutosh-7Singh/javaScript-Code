const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'Swift by apple'
}
// for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);// so we can use for in loop for object okey moni
// }

const programming =["js","rb","py","java","cpp"]
for (const key in programming) {
//    console.log(key);// it prints the index number of the array also we can say that key
// console.log(programming[key]);//now we got the value
}

//  can we use for in loop in 

const map=new Map()
 map.set('IN',"India")
 map.set('USA',"United state of America")
 map.set('Fr',"France")
 map.set("IN","India")
 for(const key in map){
    console.log(key);// we got nothing as a output so for in loop not work in the map
 }