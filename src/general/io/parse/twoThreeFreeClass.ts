import { computeLowestTermsRatio, computeMonzoFromRatio, Direction, Monzo, NumTypeParameters } from "../../math"
import { TwoThreeFreeClass } from "../../music"
import { Io } from "../types"
import { parseRatio } from "./ratio"

const parse23FreeClass = <T extends NumTypeParameters>(twoThreeFreeClassIo: Io): TwoThreeFreeClass<T> => {
    const twoThreeFreeRatio = parseRatio(twoThreeFreeClassIo)
    const reducedTwoThreeFreeRatio = computeLowestTermsRatio(twoThreeFreeRatio)

    return {
        monzo: computeMonzoFromRatio(reducedTwoThreeFreeRatio) as Monzo<T & { rough: 5, direction: Direction.SUPER }>,
    } as TwoThreeFreeClass<T>
}

export {
    parse23FreeClass,
}
