import {person} from './Task1.js';

function validateObject(obj, schema) {
    for (let key in schema) {
        if (schema.hasOwnProperty(key)) {
            if (!obj.hasOwnProperty(key)) {
                return false;
            }
            if (typeof obj[key] !== schema[key].type) {
                return false;
            }
            if (schema[key].hasOwnProperty('validationMethod') && !schema[key].validationMethod(obj[key])) {
                return false;
            }
        }
    }
    return true;
}

// validation method is optional, type is required
let schema = {
    firstName: {
        type: 'string',
        validationMethod: function (value) {
            return value.charAt(0) === value.charAt(0).toUpperCase(); // first letter is uppercase
        }
    },
    lastName: {
        type: 'string',
        validationMethod: (value) => value.charAt(0) === value.charAt(0).toUpperCase() // first letter is uppercase

    },
    age: {
        type: 'number',
        validationMethod: (value) => value % 1 === 0 // has no fractional digits
    },
    email: {
        type: 'string',
        validationMethod: (value) => value.includes('@') && value.includes('.') // has @ in it

    }
};
// example
// console.log(validateObject(person, schema));
// person.updateInfo({firstName: 'serhiy'});
// console.log(validateObject(person, schema));
