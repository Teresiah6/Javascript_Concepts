let total = 0;
let arraytotal = 0;
let numArray = [10,20, 30, 40, 50, 60, 70, 80];
for( let i =0; i < 5; i++){
    //console.log(i);
    total += i;
}
console.log(total);
//iterate through the array
for (let x = 0; x < numArray.length; x++)
{
    console.log(numArray[x]);
    arraytotal += numArray[x];
    
}
console.log(arraytotal);