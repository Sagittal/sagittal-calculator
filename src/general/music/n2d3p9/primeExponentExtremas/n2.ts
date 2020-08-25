import { sort } from "../../../code"
import { computeCopfr, Numerator } from "../../../math"
import {
    ComputeSortedNumeratorPossibilitiesOptions,
    N2,
    NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
    NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "./types"

const computeN2 = (possibleNumerator: Numerator): N2 => {
    return possibleNumerator / Math.pow(2, computeCopfr(possibleNumerator)) as N2
}

const computeNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 = ({ denominatorPrime, numeratorPossibilitiesGivenMaxN2D3P3 }: ComputeSortedNumeratorPossibilitiesOptions): NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[] => {
    const numeratorPossibilitiesWithLesserGpf: NumeratorPossibilityWithLesserGpfThanDenominatorPrime[] = numeratorPossibilitiesGivenMaxN2D3P3.filter(numeratorPossibility => {
        // unlike when computing numerator possibilities with greater gpf than the denominator prime
        // there is no need to filter by if it divides evenly
        // because when the gpf of the numerator is less than the denominator prime,
        // the numerator could not possibly be divisible by it
        return numeratorPossibility.gpf < denominatorPrime
    }) as NumeratorPossibilityWithLesserGpfThanDenominatorPrime[]
    const numeratorPossibilitiesWithLesserGpfIncludingN2: NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[] = numeratorPossibilitiesWithLesserGpf.map(numeratorPossibility => {
        return { ...numeratorPossibility, n2: computeN2(numeratorPossibility.numerator) }
    })

    return sort(numeratorPossibilitiesWithLesserGpfIncludingN2, { by: "n2" })
}

export {
    computeN2,
    computeNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
}
