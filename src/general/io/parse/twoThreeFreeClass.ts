import {
    computeLowestTermsRatio,
    computeMonzoFromRatio,
    computeRatioIsRational,
    Direction,
    Monzo,
    NumTypeParameters,
} from "../../math"
import { TwoThreeFreeClass } from "../../music"
import { Io } from "../types"
import { parseRatio } from "./ratio"

const parse23FreeClass = <T extends NumTypeParameters>(twoThreeFreeClassIo: Io): TwoThreeFreeClass<T> => {
    const twoThreeFreeRatio = parseRatio(twoThreeFreeClassIo)

    if (!computeRatioIsRational(twoThreeFreeRatio)) {
        throw new Error(`2,3-free classes must be rational. Attempted to parse ratio to ${twoThreeFreeRatio}`)
    }

    const reducedTwoThreeFreeRatio = computeLowestTermsRatio(twoThreeFreeRatio)

    return {
        monzo: computeMonzoFromRatio(reducedTwoThreeFreeRatio) as Monzo<T & { rough: 5, direction: Direction.SUPER }>,
    } as TwoThreeFreeClass<T>
}

export {
    parse23FreeClass,
}
