let example1 = [5, 9, 6];
console.log(example1.length);
console.log(example1[0]);
console.log(example1[1]);
console.log(example1[2]);
console.log(example1[3]);
example1.push(8, 7, 10);
example1.pop();
example1[0] = 1;
//iterate
example1.forEach((element)=> {
console.log(element)
});

console.log(example1);
