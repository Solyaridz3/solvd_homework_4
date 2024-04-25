/**
 * Creates a proxy object that observes changes to the original object.
 *
 * @param {Object} obj - The original object to be observed.
 * @param {Function} callback - The function to be called whenever a change is detected.
 *                             It takes three parameters: the property name, the action ('get' or 'set'),
 *                             and the new value (for 'set' action only).
 * @return {Object} A proxy object that wraps the original object and runs callback on property access.
 */
function observeObject(obj, callback) {
    return new Proxy(obj, {
        get(target, prop) {
            callback(prop, 'get');
            return target[prop];
        },
        set(target, prop, value) {
            callback(prop, 'set', value);
            target[prop] = value;
            return true;
        }
    });
}

// Example of observing object
// const exampleCallback = (prop, action, value) => {
//     if (action === 'set' && value) {
//         console.log(`Property: ${prop} was set, new value is: ${value}`)
//     } else if (action === 'get') {
//         console.log(`Property '${prop}' was get`);
//     }
// }
//
// const person = observeObject({
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
// }, exampleCallback);
//
// person.firstName = 'Serhiy';
// console.log(person.firstName);