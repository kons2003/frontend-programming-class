let a = [
  "c:/temp/guide.hwp",
  "c:/pj/frontend/chap05/substring1.js",
  "homework.docx",
];

// 파일 확장자 출력하기
for (let i = 0; i < 3; ++i)
    console.log(a[i].slice(a[i].lastIndexOf("."), a[i].length));
console.log();

// 파일명 출력하기
for (let i = 0; i < 3; ++i) {
    if (a[i].lastIndexOf("/") !== -1) {
        console.log(a[i].slice(a[i].lastIndexOf("/") + 1, a[i].length));
    } else {
        console.log(a[i].slice(0, a[i].length));
    }
}
console.log();

// 파일 이름 부분만 출력하기
for (let i = 0; i < 3; ++i) {
    if (a[i].lastIndexOf("/") !== -1) {
        console.log(a[i].slice(a[i].lastIndexOf("/") + 1, a[i].lastIndexOf(".")));
    } else {
        console.log(a[i].slice(0, a[i].lastIndexOf(".")));
    }
}