import { FIVE_ROUGHNESS, isRoughInteger, Max, RationalNumerator } from "../../../../../../../../general"
import { N2D3P9 } from "../../../../types"
import { computeMaxNumeratorGivenMaxN2D3P9 } from "./maxNumerator"

const computePossibleNumeratorsGivenMaxN2D3P9 = (maxN2D3P9: Max<N2D3P9>): RationalNumerator[] => {
    const maxNumerator = computeMaxNumeratorGivenMaxN2D3P9(maxN2D3P9)

    const possibleNumerators = []
    let possibleNumerator = 7 as RationalNumerator
    while (possibleNumerator <= maxNumerator) {
        if (isRoughInteger(possibleNumerator, FIVE_ROUGHNESS)) {
            possibleNumerators.push(possibleNumerator)
        }

        possibleNumerator = possibleNumerator + 2 as RationalNumerator
    }

    return possibleNumerators
}

export {
    computePossibleNumeratorsGivenMaxN2D3P9,
}
