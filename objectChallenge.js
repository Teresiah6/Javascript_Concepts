let example1 = {
    firstName: 'Dylan'
};
let example2 = example1;

//instantiates a new object
let example3 = Object.assign({}, example1);
example2.lastName = 'Isit';

console.log(example1);
console.log(example2);
console.log(example3);
