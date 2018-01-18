// arguements objext is no lonfer bound with arrow functions

const add = (a, b) => {
   // console.log(arguments);
    return a + b;
};
console.log(add(65, 72));

// this keyword - no longer bound

const user = {
    name: 'Robert',
    cities: [ 'Los Angeles', 'Simi Valley', 'Shanghai' ],
    printPlacesLived() {
       return  this.cities.map((city) =>  this.name + ' has lived in ' + city);
  
    }
};
console.log(user.printPlacesLived());



const multiplier = {
    multipliedBy: 8,
    numbers: [1, 12, 16, 9],
    multiply() {
        return this.numbers.map((num) => this.multipliedBy * num);
    }
};

console.log(multiplier.multiply());