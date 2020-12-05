import {max} from "@sagittal/general"
import {N2D3P9} from "../types"
import {KnownLowN2D3P9Numerator} from "./types"

const computeN2D3P9FromKnownLowN2D3P9NumeratorAndPossibleDenominator = (
    knownNumerator: KnownLowN2D3P9Numerator,
    possibleDenominator: KnownLowN2D3P9Numerator,
): N2D3P9 => {
    return knownNumerator.numerator * possibleDenominator.numerator *
    2 ** -knownNumerator.copfr * 3 ** -possibleDenominator.copfr *
    max(knownNumerator.gpf, possibleDenominator.gpf) / 9 as N2D3P9
}

export {
    computeN2D3P9FromKnownLowN2D3P9NumeratorAndPossibleDenominator,
}
