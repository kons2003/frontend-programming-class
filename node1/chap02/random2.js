const MAX = 5, MIN = 2; 

for (let i = 0; i < 20; ++i) { 
    let a = Math.floor(Math.random() * (MAX - MIN + 1) + MIN); 
    console.log(a); 
}