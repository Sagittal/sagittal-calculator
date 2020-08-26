import { sort } from "../../../code"
import { BASE_2, computeCopfr, Exponent, Numerator, pow, Prime } from "../../../math"
import { Count } from "../../../types"
import {
    ComputeSortedNumeratorPossibilitiesOptions,
    N2,
    NumeratorPossibilityWithLesserGpfThanDenominatorPrime,
    SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2,
} from "./types"

const computeN2 = (numerator: Numerator): N2 => {
    return numerator / pow(BASE_2, computeCopfr(numerator) as Exponent<Count<Prime>>) as N2
}

const computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2 = ({ denominatorPrime, numeratorPossibilitiesGivenMaxN2D3P3 }: ComputeSortedNumeratorPossibilitiesOptions): SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[] => {
    const numeratorPossibilitiesWithLesserGpf: NumeratorPossibilityWithLesserGpfThanDenominatorPrime[] = numeratorPossibilitiesGivenMaxN2D3P3.filter(numeratorPossibility => {
        // unlike when computing numerator possibilities with greater gpf than the denominator prime
        // there is no need to filter by if it divides evenly
        // because when the gpf of the numerator is less than the denominator prime,
        // the numerator could not possibly be divisible by it
        return numeratorPossibility.gpf < denominatorPrime
    }) as NumeratorPossibilityWithLesserGpfThanDenominatorPrime[]
    const numeratorPossibilitiesWithLesserGpfIncludingN2: SortedNumeratorPossibilityWithLesserGpfThanDenominatorPrimeIncludingN2[] = numeratorPossibilitiesWithLesserGpf.map(numeratorPossibility => {
        return { ...numeratorPossibility, n2: computeN2(numeratorPossibility.numerator) }
    })

    return sort(numeratorPossibilitiesWithLesserGpfIncludingN2, { by: "n2" })
}

export {
    computeN2,
    computeSortedNumeratorPossibilitiesGivenMaxN2D3P9WithLesserGpfThanDenominatorPrimeSortedByN2,
}
