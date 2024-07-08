let a = [];

for (let i = 0; i < 100; i++)
    a.push(Math.floor(Math.random() * 100 + 1))

let oddA = [];

for (let i = 0; i < 100; i++)
    if (a[i] % 2 !== 0) 
        oddA.push(a[i]);

a = evenFilter(a);

console.log(a)
console.log(oddA)

function evenFilter(array) {
    return array.filter(num => num % 2 !== 0);
}