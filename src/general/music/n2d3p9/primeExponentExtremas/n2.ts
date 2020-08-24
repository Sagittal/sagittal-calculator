import { sort } from "../../../code"
import { Numerator } from "../../../math"
import { computeCopfr } from "../../copfr"
import {
    ComputeSortedNumeratorPossibilitiesOptions,
    N2,
    NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
    NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "./types"

const computeN2 = (possibleNumerator: Numerator): N2 => {
    return possibleNumerator / Math.pow(2, computeCopfr(possibleNumerator)) as N2
}

const computeNumeratorPossibilitiesGivenMaximumN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 = ({ denominatorPrime, numeratorPossibilitiesGivenMaximumN2D3P3 }: ComputeSortedNumeratorPossibilitiesOptions) => {
    const numeratorPossibilitiesWithLesserGpf: NumeratorPossibilityWithLesserGpfThanDenominatorPrime[] = numeratorPossibilitiesGivenMaximumN2D3P3.filter(numeratorPossibility => {
        // unlike when computing numerator possibilities with greater gpf than the denominator prime
        // there is no need to filter by if it divides evenly
        // because when the gpf of the numerator is less than the denominator prime,
        // the numerator could not possibly be divisible by it
        return numeratorPossibility.gpf < denominatorPrime
    }) as NumeratorPossibilityWithLesserGpfThanDenominatorPrime[]
    const numeratorPossibilitiesWithLesserGpfIncludingN2: NumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[] = numeratorPossibilitiesWithLesserGpf.map(numeratorPossibility => {
        return { ...numeratorPossibility, n2: computeN2(numeratorPossibility.numerator) }
    })

    return sort(numeratorPossibilitiesWithLesserGpfIncludingN2, {by: "n2"})
}

export {
    computeN2,
    computeNumeratorPossibilitiesGivenMaximumN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
}
