const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5,

}

Object.defineProperties(product, {
    price: {enumerable: false, writable: false},
    quantity: {enumerable: false, writable: false},
});


/**
 * Deletes a configurable property from the given object.
 *
 * @param {Object} givenObject - The object from which to delete the property.
 * @param {string} propertyName - The name of the property to delete.
 * @throws {Error} - If property does not exist on object, or it is non-configurable
 */
function deleteNonConfigurable(givenObject, propertyName) {
    const propertyDescriptor = Object.getOwnPropertyDescriptor(givenObject, propertyName);
    if (!propertyDescriptor || !propertyDescriptor.configurable) {
        throw new Error('There is no such property or it is non-configurable')
    }
    delete givenObject[propertyName];
}

/**
 * Calculates the total price of an object by multiplying its price and quantity properties.
 *
 * @param {Object} givenObject - The object containing the price and quantity properties.
 * @return {number} The total price calculated by multiplying the price and quantity properties.
 */
function getTotalPrice(givenObject) {
    const getPropertyValue = (obj) => (prop) => Object.getOwnPropertyDescriptor(obj, prop).value;
    return getPropertyValue(givenObject)('price') * getPropertyValue(givenObject)('quantity');
}

