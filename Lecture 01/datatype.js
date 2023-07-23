// number, boolean, string

// let counter = 120;
// console.log(typeof counter);

// counter = false;
// console.log(typeof counter);

// counter = 'foo';
// console.log(typeof counter);


// undefine
// let doSomething;
// console.log(doSomething); // undefine


// console.log(typeof checkAge); // undefine

// console.log(null == undefined); // true


// null

// let num = 200;
// console.log(num);

// let price = 12.00;
// let unit = 0.05;

// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324


// NaN not for  number
// console.log('jdj'/2); // NaN
// console.log(NaN == NaN); // false
// console.log(NaN/NaN); // NaN
// console.log(NaN /2); // NaN


// let message = "I\'m also valid"; // use \ to escape the single quote (')
// console.log(message);

// let s = 'JavaScript';
// s[0] = 'j';
// console.log(s)


// Boolean
// let inProgress = true;
// let completed = false;

// console.log(typeof completed); // boolean


// Object type 
let emptyObject = {};
console.log(emptyObject);

let person = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(person.firstName);
console.log(person.lastName);




// Second Example

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

console.log(contact.address.street);
console.log(contact['address']['city']);