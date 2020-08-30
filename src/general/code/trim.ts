import { shallowClone } from "./clone"

const computeTrimmedArray = <T extends Array<unknown>>(monzo: T): T => {
    const trimmedArray = shallowClone(monzo)

    while (trimmedArray.length && !trimmedArray[ trimmedArray.length - 1 ]) {
        trimmedArray.pop()
    }

    return trimmedArray as T
}

export {
    computeTrimmedArray,
}
