const numbers = [5, 10, 15, 20, 25, 30, 35]
console.log(numbers);
const deleteNumber1 = numbers.pop();
numbers.unshift(deleteNumber1);
console.log(numbers);
const deleteNumber2 = numbers.shift();
numbers.push(deleteNumber2);
console.log(numbers);
numbers.splice(2, 3, 55);
console.log(numbers);
const number = 12;
if (numbers.indexOf(number) === numbers.lastIndexOf(number) && numbers.indexOf(number) !== -1) {
    console.log('true');
} else {
    console.log('false');
}
numbers.forEach((value) => { console.log(value) });
numbers.forEach((value) => { console.log(value * 3) });
const newNumbers1 = numbers.map((value) => { return value * 10 })
console.log(newNumbers1);
const newNumbers2 = numbers.map((value) => { return value * 5 })
console.log(newNumbers2);
const newNumbers3 = numbers.filter((value) => value > 20);
console.log(newNumbers3);
const newNumbers4 = numbers.filter((value) => value % 6 === 0);
console.log(newNumbers4);
while (true) {
    let userNumber = prompt('Enter number');
    if (numbers.includes(Number(userNumber))) {
        console.log('Ваше число є в масиві.');
        break;
    }
}