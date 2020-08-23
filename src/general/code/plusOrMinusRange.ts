import { computeRange } from "./range"

const computePlusOrMinusRange = <T extends number>(value: T): T[] =>
    computeRange(-value as T, value + 1 as T)

export {
    computePlusOrMinusRange,
}
