// TODO: I'd like to see performance comparison of places we're using this versus .slice() for arrays

const computeDeepClone = (object: unknown) =>
    JSON.parse(JSON.stringify(object))

export {
    computeDeepClone,
}
