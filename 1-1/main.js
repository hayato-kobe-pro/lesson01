let array = [];

for (let i = 2; i < process.argv.length; i++) {
  array.push(Number(process.argv[i]));
}

let result = [];
let len = array.length

for(let i = 0; i < len; i++){
  console.log(array.length)
  let mini = array.reduce((a,b)=>a<b?a:b)
   result.push(mini)
  let num =  array.indexOf( mini, 0 );
  array.splice( num, 1 );
  
}

console.log(result)

