import { computeGpf } from "../../gpf"
import { N2D3P9 } from "../types"
import { computePossibleNumeratorsGivenMaximumN2D3P3 } from "./possibleNumerators"
import { NumeratorPossibilityGivenMaximumN2D3P3 } from "./types"

const computeNumeratorPossibilitiesGivenMaximumN2D3P3 = (maximumN2D3P9: N2D3P9): NumeratorPossibilityGivenMaximumN2D3P3[] => {
    const possibleNumeratorsGivenMaximumN2D3P3 = computePossibleNumeratorsGivenMaximumN2D3P3(maximumN2D3P9)

    return possibleNumeratorsGivenMaximumN2D3P3.map(possibleNumerator => {
        return {
            numerator: possibleNumerator,
            gpf: computeGpf(possibleNumerator),
        }
    })
}

export {
    computeNumeratorPossibilitiesGivenMaximumN2D3P3,
}
