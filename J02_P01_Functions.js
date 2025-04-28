function nameFunction(name) {
 // This is the body of the function
    console.log("Hey "+name+" this is my function ");
    console.log("Hey "+name+" this is my function for the javascript");

}

// this is the function call.
nameFunction("Utsab");

let num1=10;
let num2=20;
let num3=30;

// function add(a, b)
//     {
//         return a+b;
//     }
function add(a, b, c=0) // c=0 is default value, which is optional
    {
        return a+b+c;
    }

    // console.log("The sum of "+num1+" and "+num2+" is "+add(num1, num2));
    console.log("The sum is :"+add(num1, num2)); // uses default argument when the function is called
    console.log("The sum is :"+add(num1, num2, num3));


    // arrow function : 

    const multiply = (n) => {
        console.log("Hey there this is arrow function.", n);
    }


    multiply(999);

