let example1 = {
    firstName: "Trizah",
    lastName: " Karanja",
    address:{
        city: 'Austin',
        state: 'Texas'
    }, 
    age: 20,
    cats:['millo', 'anty', 'aches']
};
example1.age = 21;

console.log(example1);
console.log(example1.firstName); 
console.log(example1.address.state);

console.log(example1.age);
//get all the keys
console.log(Object.keys(example1));
//get all the values
console.log(Object.values(example1));
// check if property or key exists
console.log(example1.hasOwnProperty('firstName'));
console.log(example1.hasOwnProperty('middleName'));