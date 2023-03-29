let example1 = ['Dylan', 5, true];
let example2 = example1; //here example2 is creating a reference to example1 not creating example2
//create a new array
let example3 = [...example1];
// or
let example4 = example3.map((element) =>
{
    return(element)
});

example3.push('90, 12');
example2.push(11);

console.log(example1);
console.log(example2);
console.log(example3);
console.log(example4);