const deepEqualsArray = (firstValue, secondValue) => {
    return firstValue instanceof Array &&
        firstValue.length === secondValue.length &&
        secondValue.every((el, index) => deepEquals(el, firstValue[index]))
}

const deepEqualsObject =
    (firstValue, secondValue) => {
        let equal

        if (firstValue instanceof Array) {
            equal = false
        } else if (typeof firstValue === "object") {
            equal = Object.keys(firstValue).length === Object.keys(secondValue).length &&
                Object.entries(secondValue)
                    .every(([key, value]) =>
                        deepEquals(value, firstValue[key]))
        } else {
            equal = false
        }

        return equal
    }

const deepEquals = (firstValue, secondValue) => {
    let equal = false

    if (firstValue === secondValue) {
        equal = true
    } else if (firstValue instanceof Array) {
        equal = deepEqualsArray(secondValue, firstValue)
    } else if (typeof firstValue === "object") {
        equal = deepEqualsObject(secondValue, firstValue)
    }

    return equal
}

module.exports = {
    deepEquals,
}
