const computePlusOrMinusRange = <T extends number>(value: T): T[] =>
    [...Array(value * 2 + 1).keys()].map(element => element - value) as T[]

export {
    computePlusOrMinusRange,
}
