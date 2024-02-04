//Objects
let obj={name:"Cipher"}
console.log(obj);

let person={
    name:'John',
    age:45,
    email:'johnwick@gmail.com',
    status:true,
    children:{
        name:'Jay'
    },
    hobbies:['reading', 'writing', true, 100, null]
}

let clickedName='name';

console.log(person[clickedName]);

console.log(typeof person);
console.log(typeof person.name);
console.log(person.status);
console.log(person['age']);
console.log(person['children']);

console.log(typeof person.hobbies);
