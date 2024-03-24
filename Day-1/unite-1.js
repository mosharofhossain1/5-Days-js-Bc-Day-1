//Unite One :- Programming Basics

// 1. Printing An Output on console.log()

console.log('Ahlan Sahlan Mahe Ramadan');

// 2. Declearing variable with var, let, const kyewords

var varOne = 12;
let varTwo = 45;
const varThree = 'Romadan 2024';

// 3. Statement and Syntex

//  Comments

// 4. Operators :- JS diffrent types of OPerators 

/* 
        1. Assignment operators:- =, +=, -=, /=, *=
        2. Arithmatice operators:- +, -, *, /, %, ++, --
        3. Compartive OPerators:- ==, !=, ===, >, <, >=, <=
        4. Logical OPerators:- &&, ||, !
        5. TypeOf
        6. instanceOf
*/

    // 1. Assignment OPerator Example:-

    let x = 5;
    x += 2;
    x -= 1
    x /= 3;
    x *= 2;
    console.log(x);

    // 2. Arithmatic Operators Example:-

    let a = 12;
    let b = 5;
    const add = a + b;
    const diffrent = a - b;
    const multiplay = a * b;
    const division = a / b;
    const modulus = a % b;
    a++;
    a--;
    console.log(add, diffrent, multiplay, division, modulus);

    // 3. Comparative Operators Example:-

    const num1 = 34;
    const num2 = 40;
    console.log(num1 === num2);
    console.log(num1 != num2);
    console.log(num1 > num2);
    console.log(num1 < num2);
    console.log(num1 >= num2);
    console.log(num1 <= num2);

    // 4. Logical Operators Example:-
        // And && 
    const y = 45;
    if(x > 10 && y < 34 ){
        // And (&&) operatএর বেলায় দুটি শর্ত সত্য হলে সত্য রিটার্ন করবে । না হয় মিথ্যা রিটার্ন করবে ।
        console.log('Booth Condition is True');
    }
    else{
        console.log("At least one condition is false");
    }

    // (OR) ||
    const age = 25;
    if(age < 18 || age > 50){
        // OR (||): যদি দুটি শর্ত মধ্যে কোনও একটি সত্য হয়, তবে সম্পূর্ণ অভিজ্ঞতা সত্য হবে।
        console.log("You are either too young or too old");
    }
    else{
        console.log("You are between 18 and 60 years old");
    }

    // Not ! 

    //একটি শর্তের বিপরীতের মান প্রদান করে। যদি শর্ত সত্য হয়, তবে সম্পূর্ণ অভিজ্ঞতা মিথ্যা হবে এবং বিপরীতে
    let loogedIn = false;
    if(!loogedIn){
        console.log("You are not logged in");
    }
    else{
        console.log("You are logged in");
    }



// 5. Javascript Data Types:- 1.Primitive Data  2.Non-Primitive/Refarance Data

    // ===> Primitive Data 
        // 1. Number 
        // 2. String 
        // 3. Boolean
        // 4. Undifined
        // 5. Null

    // ===> Non-Primitive Data 
        // 1. Array 
        // 2. Object 
        // 3. Function 
        // 4. Map
        // 5. Set, Weak Set, Weak Map

    



