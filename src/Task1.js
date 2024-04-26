/**
 * Creates a read-only version of an object by disabling its writable property in property descriptors.
 *
 * @param {Object} obj - The object to be made read-only.
 * @return {Object} The read-only version of the object.
 */
function createReadOnly(obj){
    const descriptors = Object.getOwnPropertyDescriptors(obj);
    for(const key in descriptors){
        if(descriptors[key].writable){
            descriptors[key].writable = false;
        }
    }
    Object.defineProperties(obj, descriptors);
    return obj;
}
export const person = createReadOnly({
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
    writable: true,
    enumerable: false,
    configurable: false,
}) // non-enumerable and non-configurable.

