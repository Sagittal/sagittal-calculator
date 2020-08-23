import { Exponent, Numerator } from "../../../math"
import { Prime } from "../../../types"
import { computeIntegerFromMonzo } from "../../integerFromMonzo"
import { computeN2D3P9 } from "../n2d3p9"
import { N2D3P9 } from "../types"
import { computeMaximumNumeratorPrimeExponentsGivenMaximumN2D3P9 } from "./maximumNumeratorPrimeExponents"
import { computePossibleMonzosFromPrimeExponentExtremas } from "./possibleMonzosFromPrimeExponentExtrema"
import { PrimeExponentExtrema } from "./types"

const computeMaximumNumeratorGivenMaximumN2D3P3 = (maximumN2D3P9: N2D3P9): Numerator => {
    const maximumNumeratorPrimeExponentsGivenMaximumN2D3P9 = computeMaximumNumeratorPrimeExponentsGivenMaximumN2D3P9(maximumN2D3P9)

    const numeratorPrimeExponentExtremaGivenMaximumN2D3P9: Array<PrimeExponentExtrema> = maximumNumeratorPrimeExponentsGivenMaximumN2D3P9.map(maximumNumeratorPrimeExponentGivenMaximumN2D3P9 => {
        return [0 as Exponent<Prime>, maximumNumeratorPrimeExponentGivenMaximumN2D3P9]
    })

    let numeratorMonzosToCheck = computePossibleMonzosFromPrimeExponentExtremas(numeratorPrimeExponentExtremaGivenMaximumN2D3P9)

    // TODO: make sure a test covers this
    numeratorMonzosToCheck = numeratorMonzosToCheck.filter(numeratorMonzoToCheck => {
        return computeN2D3P9(numeratorMonzoToCheck) < maximumN2D3P9
    })

    let numeratorsToCheck = numeratorMonzosToCheck.map(computeIntegerFromMonzo)
    numeratorsToCheck.sort((numeratorToCheck: Numerator, nextNumeratorToCheck: Numerator) => nextNumeratorToCheck - numeratorToCheck)

    return numeratorsToCheck[ 0 ]
}

export {
    computeMaximumNumeratorGivenMaximumN2D3P3,
}
