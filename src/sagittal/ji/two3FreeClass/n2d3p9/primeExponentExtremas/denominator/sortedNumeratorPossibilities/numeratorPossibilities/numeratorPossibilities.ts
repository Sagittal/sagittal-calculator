import { computeGpf, IntegerNumerator, Max, Prime } from "../../../../../../../../general"
import { N2D3P9 } from "../../../../types"
import { computePossibleNumeratorsGivenMaxN2D3P9 } from "./possibleNumerators"
import { NumeratorPossibilityForDenominatorGivenMaxN2D3P9 } from "./types"

const computeNumeratorPossibilitiesForDenominatorGivenMaxN2D3P9 = (
    maxN2D3P9: Max<N2D3P9>,
): NumeratorPossibilityForDenominatorGivenMaxN2D3P9[] => {
    const possibleNumeratorsGivenMaxN2D3P9 = computePossibleNumeratorsGivenMaxN2D3P9(maxN2D3P9)

    return possibleNumeratorsGivenMaxN2D3P9
        .map((possibleNumerator: IntegerNumerator): NumeratorPossibilityForDenominatorGivenMaxN2D3P9 => {
            return {
                numerator: possibleNumerator,
                gpf: computeGpf(possibleNumerator) as Max<Prime>,
            }
        })
}

export {
    computeNumeratorPossibilitiesForDenominatorGivenMaxN2D3P9,
}