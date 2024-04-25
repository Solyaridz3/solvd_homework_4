import {createImmutableObject} from "./Task4.js";

export const person = createImmutableObject({
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    /**
     * Updates the information of the object with the provided new information.
     * @param {object} newInfo - The new information to update the object with.
     */
    updateInfo(newInfo) {
        for (const key in newInfo) {
            if (this.hasOwnProperty(key)) {
                Object.defineProperty(this, key, {value: newInfo[key]});
            }
        }
    }
});

Object.defineProperty(person, 'address', {
    value: {},
    enumerable: false,
    configurable: false,
}) // non-enumerable and non-configurable.
