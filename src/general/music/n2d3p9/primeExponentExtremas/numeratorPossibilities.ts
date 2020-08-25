import { Max } from "../../../types"
import { computeGpf } from "../../gpf"
import { N2D3P9 } from "../types"
import { computePossibleNumeratorsGivenMaxN2D3P3 } from "./possibleNumerators"
import { NumeratorPossibilityGivenMaxN2D3P3 } from "./types"

const computeNumeratorPossibilitiesGivenMaxN2D3P3 = (maxN2D3P9: Max<N2D3P9>): NumeratorPossibilityGivenMaxN2D3P3[] => {
    const possibleNumeratorsGivenMaxN2D3P3 = computePossibleNumeratorsGivenMaxN2D3P3(maxN2D3P9)

    return possibleNumeratorsGivenMaxN2D3P3.map(possibleNumerator => {
        return {
            numerator: possibleNumerator,
            gpf: computeGpf(possibleNumerator),
        }
    })
}

export {
    computeNumeratorPossibilitiesGivenMaxN2D3P3,
}
