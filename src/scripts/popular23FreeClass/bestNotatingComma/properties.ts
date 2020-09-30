import { computeCentsFromPitch, computeRationalMonzoFromRational, Max, Real, Two3FreeClass } from "../../../general"
import { computeMaybeSymbolClassId, computeNotatingCommas, HALF_APOTOME } from "../../../sagittal"
import { computeBestNotatingComma } from "./bestNotatingComma"
import { BestNotatingCommaProperties } from "./types"

const computeBestNotatingCommaProperties = (two3FreeClass: Two3FreeClass): BestNotatingCommaProperties => {
    const notatingCommas = computeNotatingCommas(two3FreeClass, { upperBound: HALF_APOTOME as Max<Real> })
    const bestNotatingComma = computeBestNotatingComma(notatingCommas)
    const maybeSymbolClassId = computeMaybeSymbolClassId(bestNotatingComma)

    return {
        bestNotatingCommaCents: computeCentsFromPitch(bestNotatingComma),
        bestNotatingCommaMonzo: computeRationalMonzoFromRational(bestNotatingComma),
        bestNotatingCommaMaybeSymbolClassId: maybeSymbolClassId,
    }
}

export {
    computeBestNotatingCommaProperties,
}
