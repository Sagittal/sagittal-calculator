const isNumber = (candidate: unknown): candidate is number =>
    typeof candidate === "number"

const isUndefined = (candidate: unknown): candidate is undefined =>
    typeof candidate === "undefined"

export {
    isNumber,
    isUndefined,
}
