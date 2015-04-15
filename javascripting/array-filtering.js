var numbers = [];
for (var i = 1; i <= 10; i++) {
    numbers.push(i);
}

var filtered = numbers.filter(evenNumbers);
console.log(filtered);

function evenNumbers(n) {
    return (n % 2) === 0;
}

