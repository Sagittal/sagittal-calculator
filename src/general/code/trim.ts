import { shallowClone } from "./clone"

const computeTrimmedArray = <T extends Array<unknown>>(array: T): T => {
    const trimmedArray = shallowClone(array)

    while (trimmedArray.length && !trimmedArray[ trimmedArray.length - 1 ]) {
        trimmedArray.pop()
    }

    return trimmedArray as T
}

export {
    computeTrimmedArray,
}
