let a = [];

for (let i = 0; i < 20; i++) {
    a.push(Math.floor(Math.random() * 20) + 1);
}

a.sort(compareNumber)
console.log(a)

a.sort(reverseCompareNumber)
console.log(a)

function compareNumber(i, j) {
    return i - j;
}

function reverseCompareNumber(i, j) {
    return j - i;
}