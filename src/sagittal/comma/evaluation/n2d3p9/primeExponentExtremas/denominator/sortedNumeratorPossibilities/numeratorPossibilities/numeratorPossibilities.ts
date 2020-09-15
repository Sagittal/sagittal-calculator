import { computeGpf, Max, Numerator } from "../../../../../../../../general"
import { N2D3P9 } from "../../../../types"
import { computePossibleNumeratorsGivenMaxN2D3P3 } from "./possibleNumerators"
import { NumeratorPossibilityForDenominatorGivenMaxN2D3P3 } from "./types"

const computeNumeratorPossibilitiesForDenominatorGivenMaxN2D3P3 = (
    maxN2D3P9: Max<N2D3P9>,
): NumeratorPossibilityForDenominatorGivenMaxN2D3P3[] => {
    const possibleNumeratorsGivenMaxN2D3P3 = computePossibleNumeratorsGivenMaxN2D3P3(maxN2D3P9)

    return possibleNumeratorsGivenMaxN2D3P3
        .map((possibleNumerator: Numerator): NumeratorPossibilityForDenominatorGivenMaxN2D3P3 => {
            return {
                numerator: possibleNumerator,
                gpf: computeGpf(possibleNumerator),
            }
        })
}

export {
    computeNumeratorPossibilitiesForDenominatorGivenMaxN2D3P3,
}
