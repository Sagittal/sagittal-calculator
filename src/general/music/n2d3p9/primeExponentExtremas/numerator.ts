import { sort } from "../../../code"
import { Exponent, Numerator } from "../../../math"
import { Max, Min, Prime } from "../../../types"
import { computeIntegerFromMonzo } from "../../integerFromMonzo"
import { computeN2D3P9 } from "../n2d3p9"
import { N2D3P9 } from "../types"
import { computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9 } from "./maxNumeratorPrimeExponents"
import { computePossibleMonzosFromPrimeExponentExtremas } from "./possibleMonzosFromPrimeExponentExtrema"
import { PrimeExponentExtrema } from "./types"

const computeMaxNumeratorGivenMaxN2D3P3 = (maxN2D3P9: Max<N2D3P9>): Max<Numerator> => {
    const maxNumeratorPrimeExponentsGivenMaxN2D3P9 = computeMaxNumeratorPrimeExponentsGivenMaxN2D3P9(maxN2D3P9)

    const numeratorPrimeExponentExtremaGivenMaxN2D3P9: Array<PrimeExponentExtrema> = maxNumeratorPrimeExponentsGivenMaxN2D3P9.map(maxNumeratorPrimeExponentGivenMaxN2D3P9 => {
        return [0 as Min<Exponent<Prime>>, maxNumeratorPrimeExponentGivenMaxN2D3P9]
    })

    let numeratorMonzosToCheck = computePossibleMonzosFromPrimeExponentExtremas(numeratorPrimeExponentExtremaGivenMaxN2D3P9)

    // TODO: make sure a test covers this
    numeratorMonzosToCheck = numeratorMonzosToCheck.filter(numeratorMonzoToCheck => {
        return computeN2D3P9(numeratorMonzoToCheck) < maxN2D3P9
    })

    const numeratorsToCheck = numeratorMonzosToCheck.map(computeIntegerFromMonzo)
    sort(numeratorsToCheck, { descending: true })

    return numeratorsToCheck[ 0 ] as Max<Numerator>
}

export {
    computeMaxNumeratorGivenMaxN2D3P3,
}
