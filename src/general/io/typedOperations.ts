import { computeIsEmpty } from "../code"
import { Count } from "../types"
import { Char } from "./types"

const sumTexts = <T extends string>(...strings: T[]): T => {
    if (computeIsEmpty(strings)) {
        return "" as T
    }

    const previousValue: T = strings.pop() as T

    const nextSum: T = computeIsEmpty(strings) ?
        "" as T :
        sumTexts(...strings)

    return nextSum + previousValue as T
}

const length = <T extends string>(string: T): Count<Char & T> => {
    return string.length as Count<Char & T>
}

const join = <T extends string>(array: T[], separator?: T): T => {
    return array.join(separator) as T
}

export {
    sumTexts,
    length,
    join,
}
