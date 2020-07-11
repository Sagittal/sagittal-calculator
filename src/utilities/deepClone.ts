const computeDeepClone = (object: unknown) => {
    return JSON.parse(JSON.stringify(object))
}

export {
    computeDeepClone,
}
