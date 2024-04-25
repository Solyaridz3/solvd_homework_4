/**
 * Creates a deep clone of an object, handling circular references
 *
 * @param {Object} obj - The object to be cloned
 * @param {WeakMap} [visited=new WeakMap()] - A WeakMap used to keep track of visited objects
 * @return {Object} - A deep clone of the input object
 */
function deepCloneObject(obj, visited = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // primitive types or null
    }
    if (visited.has(obj)) {
        return visited.get(obj); // Circular reference detected, return the existing clone
    }

    let clone = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    visited.set(obj, clone); // Mark the object as visited

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepCloneObject(obj[key], visited);
        }
    }
    return clone;
}

// Example
// const originalObj = {
//     name: 'John',
//     age: 30,
//     array: [1, 27],
//     address: {
//         city: 'Seattle',
//         region: 'WA'
//     },
// };
// originalObj.itself = originalObj.address;
//
//
// const clonedObj = deepCloneObject(originalObj);
// originalObj.address.city = 'Kyiv';
// originalObj.address.region = 'Kyivska oblast';
//
// console.log(clonedObj.itself);
//
// console.log(originalObj.itself)