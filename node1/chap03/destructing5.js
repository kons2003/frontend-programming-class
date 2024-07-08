// 수업에서 프론트개발에선 안 쓴다고 넘어감
let a = [];
a[0] = 3;
a[1] = 4;
console.log(a);

let temp = a[0];
a[0] = a[1];
a[1] = temp;
console.log(a);
