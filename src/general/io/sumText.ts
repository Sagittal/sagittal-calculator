import { computeIsEmpty } from "../code"

const sumText = <T extends string>(...strings: T[]): T => {
    if (computeIsEmpty(strings)) {
        return "" as T
    }

    const previousValue: T = strings.pop() as T

    const nextSum: T = computeIsEmpty(strings) ?
        "" as T :
        sumText(...strings)

    return nextSum + previousValue as T
}

export {
    sumText,
}
