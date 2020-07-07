const computeDeepClone = object => {
    return JSON.parse(JSON.stringify(object))
}

module.exports = {
    computeDeepClone,
}
