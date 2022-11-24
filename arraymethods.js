// **FILTER METHOD
// const user = [30, 23, 50, 43, 60, 52];

// const userNumber = user.filter(number => number > 40); 

// console.log(userNumber)


// const sales = 
// [
// {name: 'yoshi', premium: true},
// {name: 'kija', premium: false},
// {name: 'naki', premium: true},
// {name: 'yoji', premium: false},
// {name: 'yemi', premium: true}
// ];

// const premiumSales = sales.filter(user => user.premium);

// console.log(premiumSales)

// **MAP METHOD

// const price = [30, 23, 50, 43, 60, 52];

// const salesPrice = price.map(sales => sales / 2 );
//  console.log(salesPrice)

//  const products = 
// [
// {name: 'yoshi star', price: 50},
// {name: 'kija skin', price: 25},
// {name: 'naki melon', price: 20},
// {name: 'yoji stro', price: 30},
// {name: 'yemi fgs', price: 40}
// ];

// const salesProduct = products.map((product) => {
//     if(product.price > 30){
//         return {name: product.name, price: product.price /2};
//     } else{
//         return product;
//     }
// });

// console.log(salesProduct)

// **REDUCE METHOD

// const price = [30, 23, 50, 43, 60, 52];

// const value = price.reduce((acc, curr) => {
//     if(curr > 40){
//      acc++;
//     } return acc;
// }, 0);

// console.log(value)

// const scores = 
// [
// {player: 'yoshi', score: 50},
// {player: 'kija', score: 25},
// {player: 'yoshi', score: 20},
// {player: 'yoji', score: 30},
// {player: 'yoshi', score: 40},
// {player: 'yoshi', score: 20},
// {player: 'kija', score: 25},
// {player: 'yoshi', score: 27},
// {player: 'yoji', score: 30},
// {player: 'yoshi', score: 10}
// ];

// const yoshiTotal = scores.reduce((acc, curr) => {
//     if(curr.player === 'yoshi'){
//      acc += curr.score;
//     } return acc;
// }, 0);
// console.log(yoshiTotal)

// **FIND METHOD

// const prices = [30, 23, 50, 43, 60, 52];

// const highestPrices = prices.find(price => price > 50);
// console.log(highestPrices)

//  **SORT
// const prices = [30, 23, 50, 43, 5, 60, 52];

// const newPrice = prices.sort((a,b) => b - a);

// // prices.sort();
// // prices.reverse();
// console.log(newPrice)

// const scores = 
// [
// {player: 'yoshi', score: 50},
// {player: 'kija', score: 25},
// {player: 'yoshi', score: 20},
// {player: 'yoji', score: 30},
// {player: 'yoshi', score: 40},
// ]

// const newScore = scores.sort((a,b) => b.score - a.score);
// //     if(a.score > b.score){
// //         return -1
// //     } else if (b.score > a.score){
// //         return 1
// //     } else{
// //         return 0
// //     }
// // });
// console.log(newScore)

// **ARRAYCHAINING METHOD

const scores = 
[
{player: 'yoshi', score: 50},
{player: 'kija', score: 25},
{player: 'yoshi', score: 20},
{player: 'yoji', score: 30},
{player: 'yoshi', score: 40},
]

const newScores = scores
                .filter((scor) => scor.score > 20)
                .map(scor => `the ${scor.player} scored ${scor.score / 2} goals`);
console.log(newScores)