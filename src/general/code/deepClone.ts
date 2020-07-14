const computeDeepClone = (object: unknown) =>
    JSON.parse(JSON.stringify(object))

export {
    computeDeepClone,
}
