import { Decimal, FIVE_ROUGHNESS, isIntegerDecimalRough, Max, Numerator } from "../../../../../../../../general"
import { N2D3P9 } from "../../../../types"
import { computeMaxNumeratorGivenMaxN2D3P9 } from "./maxNumerator"

const computePossibleNumeratorsGivenMaxN2D3P9 = (
    maxN2D3P9: Max<N2D3P9>,
): Array<Numerator & Decimal<{ integer: true }>> => {
    const maxNumerator = computeMaxNumeratorGivenMaxN2D3P9(maxN2D3P9)

    const possibleNumerators = []
    let possibleNumerator = 7 as Numerator & Decimal<{ integer: true }>
    while (possibleNumerator <= maxNumerator) {
        if (isIntegerDecimalRough(possibleNumerator, FIVE_ROUGHNESS)) {
            possibleNumerators.push(possibleNumerator)
        }

        possibleNumerator = possibleNumerator + 2 as Numerator & Decimal<{ integer: true }>
    }

    return possibleNumerators
}

export {
    computePossibleNumeratorsGivenMaxN2D3P9,
}
