const deepEqualsArray = <T>(firstValue: T[], secondValue: T[]): boolean =>
    firstValue instanceof Array &&
    firstValue.length === secondValue.length &&
    secondValue.every((el, index) => deepEquals(el, firstValue[ index ]))

const deepEqualsObject =
    <T extends { [ index: string ]: unknown }>(firstValue: T, secondValue: T): boolean => {
        let equal

        if (firstValue instanceof Array) {
            equal = false
        } else if (typeof firstValue === "object") {
            equal = Object.keys(firstValue).length === Object.keys(secondValue).length &&
                Object.entries(secondValue)
                    .every(([key, value]) =>
                        deepEquals(value, firstValue[ key ]))
        } else {
            equal = false
        }

        return equal
    }

const deepEquals = <T>(firstValue: T, secondValue: T) => {
    let equal = false

    if (firstValue === secondValue) {
        equal = true
    } else if (firstValue instanceof Array) {
        equal = deepEqualsArray(secondValue as T & unknown[], firstValue as T & unknown[])
    } else if (typeof firstValue === "object") {
        equal = deepEqualsObject(secondValue as T & { [ index: string ]: unknown }, firstValue as T & { [ index: string ]: unknown })
    }

    return equal
}

export {
    deepEquals,
}
