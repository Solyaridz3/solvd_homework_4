const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5,

}

Object.defineProperties(product, {
    price: {enumerable: false, writable: false},
    quantity: {enumerable: false, writable: false},
});


function deleteNonConfigurable(givenObject, propertyName) {
    const propertyDescriptor = Object.getOwnPropertyDescriptor(givenObject, propertyName);
    if (!propertyDescriptor || !propertyDescriptor.configurable) {
        throw new Error('Unable to delete non-configurable property')
    }
    delete givenObject[propertyName];
}


function getTotalPrice(givenObject) {
    const getPropertyValue = (obj) => (prop) => Object.getOwnPropertyDescriptor(obj, prop).value;
    return getPropertyValue(givenObject)('price') * getPropertyValue(givenObject)('quantity');
}

