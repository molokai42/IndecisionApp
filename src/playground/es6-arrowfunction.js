const square = function(x) {
    return x* x;
}
console.log(square(8));

const squareArrow = (x) => x * x;

console.log(squareArrow(8));

var fullName= 'Robert Murray';


const firstName = (fullName) => {
    return fullName.split(' ')[0];
};

const firstNameArrow = (fullName) => fullName.split(' ')[0];
console.log(firstName(fullName));

console.log(firstNameArrow(fullName));