//console.log(process.argv);
var sum = 0;
process.argv.forEach(function(val, index) {
    if (index > 1) {
        sum += parseInt(val);
    }
});

console.log(sum);

//solucion oficial
// let result = 0
    
// for (let i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)