import { IntegerDecimal, negative } from "../math"
import { computeRange } from "./range"
import { Range } from "./types"

const computePlusOrMinusRange = <T extends IntegerDecimal>(value: T): Range<T> =>
    computeRange(negative(value), value + 1 as T)

export {
    computePlusOrMinusRange,
}
