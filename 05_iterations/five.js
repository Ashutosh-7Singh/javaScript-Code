const coading = ["js", "ruby", "java", "python", "cpp"]
// coading.forEach(  function (item){
//     console.log(item);
// })


// coading.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coading.forEach(printMe)

// coading.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoading = [
    {
        languageName: 'javaScript',
        languageFileName: 'js',
    }, 
    {
        languageName: 'java',
        languageFileName: 'java',
    }, 
    {
        languageName: 'python',
        languageFileName: 'python',
    }, 
    {
        languageName: 'CPP',
        languageFileName: 'c++',
    }, 
    {
        languageName: 'javaScript',
        languageFileName: 'js',
    },
]

myCoading.forEach((item)=>{

    console.log(item.languageFileName);
})