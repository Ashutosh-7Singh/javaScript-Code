const myNums = [1, 2, 4, 5]
// const myTotal = myNums.reduce(function (acc, curvale) {
//     console.log(`acc : ${acc} and currentvalue: ${curvale}`);
//     return acc + curvale
// }, 0)

// const myTotal = myNums.reduce((acc,curval)=>acc+curval,0)//this is also how we can write the recduce the first one is more redable only that is the difference

// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    }, {
        itemName:"CSS course",
        price:299
    }, {
        itemName:"Mobile Dev course",
        price:2000
    }, {
        itemName:"Android dev course",
        price:12909
    }, {
        itemName:"Cji course",
        price:4999
    },
]

const prceTOPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(prceTOPay);