let a = [];

for (let i = 0; i < 20; i++) {
    a.push(Math.floor(Math.random() * 20) + 1);
}

let oddA = [];

for (let i = 0; i < 20; i++)
    if (a[i] % 2 === 0) 
        oddA.push(a[i]);

console.log(oddA);