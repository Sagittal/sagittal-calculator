const isNumber = (candidate: unknown): candidate is number => {
    return typeof candidate === "number"
}

const isUndefined = (candidate: unknown): candidate is undefined => {
    return typeof candidate === "undefined"
}

export {
    isNumber,
    isUndefined,
}
