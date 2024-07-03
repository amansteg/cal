//Recursion Example 
function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1);
}


let num = prompt("Enter the number");
let res = factorial(num);

document.querySelector(".result").innerHTML = res;