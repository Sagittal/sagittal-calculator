import { computeCentsFromPitch, computeMonzoFromRationalNum, Max, Num, TwoThreeFreeClass } from "../../../general"
import { computeMaybeSymbolClassId, computeNotatingCommas, HALF_APOTOME } from "../../../sagittal"
import { computeBestNotatingComma } from "./bestNotatingComma"
import { BestNotatingCommaProperties } from "./types"

const computeBestNotatingCommaProperties = (twoThreeFreeClass: TwoThreeFreeClass): BestNotatingCommaProperties => {
    const notatingCommas = computeNotatingCommas(twoThreeFreeClass, { upperBound: HALF_APOTOME as Max<Num> })
    const bestNotatingComma = computeBestNotatingComma(notatingCommas)
    const maybeSymbolClassId = computeMaybeSymbolClassId(bestNotatingComma)

    return {
        bestNotatingCommaCents: computeCentsFromPitch(bestNotatingComma),
        bestNotatingCommaMonzo: computeMonzoFromRationalNum(bestNotatingComma),
        bestNotatingCommaMaybeSymbolClassId: maybeSymbolClassId,
    }
}

export {
    computeBestNotatingCommaProperties,
}
