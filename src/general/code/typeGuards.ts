const isNumber = (candidate: unknown): candidate is number =>
    typeof candidate === "number" && !isNaN(candidate)

const isString = (candidate: unknown): candidate is string =>
    typeof candidate === "string"

const isUndefined = (candidate: unknown): candidate is undefined =>
    typeof candidate === "undefined"

const isArray = (candidate: unknown): candidate is unknown[] =>
    candidate instanceof Array

export {
    isNumber,
    isString,
    isUndefined,
    isArray,
}
