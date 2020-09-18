import { computeIsRoughInteger, FIVE_ROUGHNESS, Max, Numerator } from "../../../../../../../../general"
import { N2D3P9 } from "../../../../types"
import { computeMaxNumeratorGivenMaxN2D3P9 } from "./maxNumerator"

const computePossibleNumeratorsGivenMaxN2D3P9 = (maxN2D3P9: Max<N2D3P9>): Numerator[] => {
    const maxNumerator = computeMaxNumeratorGivenMaxN2D3P9(maxN2D3P9)

    const possibleNumerators = []
    let possibleNumerator = 7 as Numerator
    while (possibleNumerator <= maxNumerator) {
        if (computeIsRoughInteger(possibleNumerator, FIVE_ROUGHNESS)) {
            possibleNumerators.push(possibleNumerator)
        }

        possibleNumerator = possibleNumerator + 2 as Numerator
    }

    return possibleNumerators
}

export {
    computePossibleNumeratorsGivenMaxN2D3P9,
}
