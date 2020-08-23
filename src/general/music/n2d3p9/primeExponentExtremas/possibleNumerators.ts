import { Numerator } from "../../../math"
import { computeIsRough } from "../../isRough"
import { N2D3P9 } from "../types"
import { computeMaximumNumeratorGivenMaximumN2D3P3 } from "./numerator"

const computePossibleNumeratorsGivenMaximumN2D3P3 = (maximumN2D3P9: N2D3P9): Numerator[] => {
    const maximumNumerator = computeMaximumNumeratorGivenMaximumN2D3P3(maximumN2D3P9)

    const possibleNumerators = []
    let possibleNumerator = 7 as Numerator
    while (possibleNumerator <= maximumNumerator) {
        if (computeIsRough(possibleNumerator, 5)) {
            possibleNumerators.push(possibleNumerator)
        }

        possibleNumerator = possibleNumerator + 2 as Numerator
    }

    return possibleNumerators
}

export {
    computePossibleNumeratorsGivenMaximumN2D3P3,
}
