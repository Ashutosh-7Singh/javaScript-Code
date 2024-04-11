const coading = ["js", "ruby", "java", "python", "cpp"]


// const values=coading.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values);// so here forEach loop return undefined so if we put any condition on the for each loop then we got undefned so here for each loop get failed moni  babu



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums=myNums.filter((num)=>num>5)// this is the basic way to write filter
// console.log(newNums);

// const newNums = myNums.filter((num) => { // here if we open {} then we have to use return and in this () we not use return then its ok moni babu
// return num > 5
// })
// console.log(newNums);

{/* 
//this is how we use forEach for condition
const newNums=[]
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    }
})
console.log(newNums);
*/}

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-fiction', publish: 1995, edition: 2008},
    {title: 'Book Three', genre: 'Science Fiction', publish: 2008, edition: 2015},
    {title: 'Book Four', genre: 'Fantasy', publish: 1990, edition: 2000},
    {title: 'Book Five', genre: 'Mystery', publish: 2010, edition: 2013},
    {title: 'Book Six', genre: 'Historical Fiction', publish: 1975, edition: 1999},
    {title: 'Book Seven', genre: 'Thriller', publish: 1989, edition: 1992},
    {title: 'Book Eight', genre: 'Romance', publish: 2005, edition: 2010},
    {title: 'Book Nine', genre: 'Biography', publish: 1998, edition: 2002},
    {title: 'Book Ten', genre: 'Self-help', publish: 2015, edition: 2017},
    {title: 'Book Eleven', genre: 'Poetry', publish: 2003, edition: 2007},
    {title: 'Book Twelve', genre: 'Humor', publish: 1987, edition: 1991},
    {title: 'Book Thirteen', genre: 'Adventure', publish: 2012, edition: 2016},
    {title: 'Book Fourteen', genre: 'Business', publish: 2000, edition: 2006},
    {title: 'Book Fifteen', genre: 'Travel', publish: 1993, edition: 1997},
    {title: 'Book Sixteen', genre: 'Cooking', publish: 2009, edition: 2012},
    {title: 'Book Seventeen', genre: 'Art', publish: 1985, edition: 1990},
    {title: 'Book Eighteen', genre: 'Drama', publish: 2018, edition: 2020},
    {title: 'Book Nineteen', genre: 'Health', publish: 2002, edition: 2008},
    {title: 'Book Twenty', genre: 'Education', publish: 2011, edition: 2014},
    // Books with repeated genres
    {title: 'Book Twenty-One', genre: 'Fiction', publish: 2007, edition: 2011},
    {title: 'Book Twenty-Two', genre: 'Fiction', publish: 2014, edition: 2019},
    {title: 'Book Twenty-Three', genre: 'Romance', publish: 1999, edition: 2004},
    {title: 'Book Twenty-Four', genre: 'Romance', publish: 2017, edition: 2021},
    {title: 'Book Twenty-Five', genre: 'Mystery', publish: 2005, edition: 2010},
    {title: 'Book Twenty-Six', genre: 'Mystery', publish: 2019, edition: 2023},
    {title: 'Book Twenty-Seven', genre: 'Science Fiction', publish: 2011, edition: 2016},
    {title: 'Book Twenty-Eight', genre: 'Science Fiction', publish: 2018, edition: 2022},
    // Add more books as needed
];



// const userBooks=books.filter((book)=>book.genre === 'Fiction')
// console.log(userBooks);

// const userBooks=books.filter((book)=>{
//    book.publish >=2000;
// })
// console.log(userBooks);// we got an wmpty array as a output why // beacause have open the scope and {} in this we have to use return here 


// const userBooks=books.filter((book)=>{
//      return book.publish >=2000;
//  })
//  console.log(userBooks);//here we are finding the book which is published before or later 2000

const userBooks=books.filter((book)=>{
    return book.publish >=1995 && book.genre === "Fiction";
})
console.log(userBooks);