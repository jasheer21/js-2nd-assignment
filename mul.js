var readlineSync=require("readline-sync");
let x= readlineSync.question("enter a number : ");
X=parseInt(x)
for(let i=1;i<=10;i++){
    console.log(i,"*",x,"=",i*x);
}