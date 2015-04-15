var sum = 0;
var i = 2;
while (i < process.argv.length) {
  sum += Number(process.argv[i++]);
}
console.log(sum);
