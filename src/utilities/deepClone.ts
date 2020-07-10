const computeDeepClone = object => {
    return JSON.parse(JSON.stringify(object))
}

export {
    computeDeepClone,
}
