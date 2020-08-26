import { isUndefined } from "./index"

const computeRange = <T extends number>(firstParameter: T, secondParameter?: T): T[] => {
    if (isUndefined(secondParameter)) {
        return [...Array(firstParameter).keys()] as T[]
    }

    return [...Array(secondParameter - firstParameter).keys()]
        .map((number: number): number => number + firstParameter) as T[]
}


export {
    computeRange,
}
