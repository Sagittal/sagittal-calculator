import { Cents, computeCentsFromPitch, computeJiPitchMonzo, Max, TwoThreeFreeClass } from "../../../general"
import { APOTOME_CENTS, computeMaybeSymbolClassId, computeNotatingCommas } from "../../../sagittal"
import { computeBestNotatingComma } from "./bestNotatingComma"
import { BestNotatingCommaProperties } from "./types"

const computeBestNotatingCommaProperties = (twoThreeFreeClass: TwoThreeFreeClass): BestNotatingCommaProperties => {
    const notatingCommas =
        computeNotatingCommas(twoThreeFreeClass, { maxCents: APOTOME_CENTS / 2 as Max<Cents> })
    const bestNotatingComma = computeBestNotatingComma(notatingCommas)
    const maybeSymbolClassId = computeMaybeSymbolClassId(bestNotatingComma)

    return {
        bestNotatingCommaCents: computeCentsFromPitch(bestNotatingComma),
        bestNotatingCommaMonzo: computeJiPitchMonzo(bestNotatingComma),
        bestNotatingCommaMaybeSymbolClassId: maybeSymbolClassId,
    }
}

export {
    computeBestNotatingCommaProperties,
}
