import {person} from "./Task1.js";
/**
 * Creates a read only version of the given object.
 *
 * @param {Object} obj - The object to be made immutable.
 * @return {Object} The immutable version of the object.
 */
export function createImmutableObject(obj) {
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    for (const key in descriptors) {
        if (descriptors[key].writable) {
            descriptors[key].writable = false;
        }
        if(descriptors[key].configurable){
            descriptors[key].configurable = false;
        }
        // handle nested arrays and objects recursively
        if (descriptors[key].value !== null && typeof descriptors[key].value === 'object') {
            descriptors[key].value = createImmutableObject(descriptors[key].value);
        }
    }
    const immutableObject = Array.isArray(obj) ? [] : {};
    Object.defineProperties(immutableObject, descriptors);
    return immutableObject;
}

// Use the createImmutableObject function to create an
// immutable version of the person object from Task 1.

const immutablePerson = createImmutableObject(person);
