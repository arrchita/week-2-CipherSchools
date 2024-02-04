//ES5 functionally scope
//ES6 block scope

// var abc=10;
// function testing(){
//     var abc=20;
//     let xyz='block scope'
//     console.log(abc);
//     //block scope
//     if(1){
//         console.log(xyz);
//         console.log(abc);
//     }
// }
// testing();


//Hoisting: let const do not get hoisted
myFunc2();

//function declaration and expression
function myFunc(){
    console.log('inside myFunc declaration');
}
let myFunc2=function(){
    console.log('inside myFunc2 function expression');
}

myFunc();
myFunc2();

//Arrow functions
let newFunc=()=>{
    console.log('Arrow functions created')
}
newFunc();



