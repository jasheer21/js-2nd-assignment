var readlineSync=require("readline-sync");
let count=0;
 let size = readlineSync.question(`Enter the size of an array :`) ;
let arr = [];

for(i=1;i<=size;i++) {
 let value = readlineSync.question(`Enter the values of array : `);
  arr.push(value)
}

for(let i=0;i<arr.length;i++){
    if (arr[i] %2 === 0) {
        count++
    }
}
console.log(`Number of event numbers :`, count);