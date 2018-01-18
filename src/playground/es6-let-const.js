var nameVar = 'Andrew';
var nameVar= 'mike';
console.log('nameVar', nameVar);

let nameLet = 'jen';
console.log('nameLet', nameLet);
//LET CAN BE REASSIGNED; BUT LET CAN NOT BE DECLARED AGAIN

let nameConst = 'frank';
console.log('nameConst', nameConst);

//CONST CANNOT BE REASSIGNED IT IS CONSTANT

function getPetName(){
    var petName = 'mel';
    return petName;
}
// VAR LET AND CONST ARE FUNCTION LEVEL SCOPE
//LET AND CONST ARE ALSO BLOCK LEVEL SCOPE

var fullName= 'Robert Murray';

if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
// first name is printed twice
console.log(firstName);

if(fullName){
    const firstName2 = fullName.split(' ')[0];
    console.log(firstName2);
}
// first name is printed only once with const or let, this is because they are block level scope.
console.log(firstName2);

// const first let next never var