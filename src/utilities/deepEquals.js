const deepEquals = (objectA, objectB) => {
    return JSON.stringify(objectA) === JSON.stringify(objectB)
}

module.exports = {
    deepEquals,
}
