let a = [];
a[0] = [1, 2, 3];
a[1] = [4, 5, 6];
a[2] = [7, 8, 9];

for (let i = 0; i < a.length; ++i)
    for (let j = 0; j < a[i].length; ++j) 
        console.log(a[i][j]);
