// Addition
function sum(num1,num2) {
    let sumOfResult = num1 + num2
    console.log(sumOfResult)
}

sum(3,4);

// Subtract
function sub(num1,num2) {
    let subOfResult = num1 - num2
    console.log(subOfResult)
}

sub(6,8);

// Multiplication
function mul(num1,num2) {
    let mulOfResult = num1 * num2
    console.log(mulOfResult)
}

mul(4,6);

// Division
function div(num1,num2) {
    let divOfResult = num1 / num2
    console.log(divOfResult)
}

div(2,4);


// Assignment 2
// create (a+b)^2 function
function square(a,b) {
    let s = (a+b)*(a+b)
    console.log(s)
    return(s)
}

square(2,2)

// Assignment 3
// print fibonacci series
function fibonacci(num){
    let n1=0, n2=1, n3, i
    console.log("Fibonacci:")
    console.log(n1,n2)
    for(i=2;i<num;++i)
    {
        n3 = n1 + n2;
        console.log(n3)
        n1=n2;
        n2=n3;
    }
}

fibonacci(10);


