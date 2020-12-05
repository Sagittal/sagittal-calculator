import {
    computeRationalDecimalCopf,
    computeRationalDecimalCopfr,
    computeRationalDecimalGpf,
    computeRationalMonzoFromRationalDecimal,
    Decimal,
    DOT_OPERATOR,
    Exponent,
    Prime,
    PRIMES,
    Quotient,
    QuotientPart,
    SUPERSCRIPT_NUMBERS,
} from "../../../general"
import {FactoringMode} from "./types"

const formatFactoredCommaNameQuotientPart = (
    commaNameQuotientPart: QuotientPart & Decimal<{integer: true}>,
    quotientPartIndex: number,
): string => {
    if (commaNameQuotientPart === 1) return "1"

    let integerMonzo
    try {
        integerMonzo = computeRationalMonzoFromRationalDecimal(commaNameQuotientPart)
    } catch(e) {
        return "?"
        // Todo: clean up both of these try/catches in here, and actually there's got to be a better way
        //  `npm run find-commas -- --max-prime-limit 5 --max-aas Infinity --max-2-3-free-copfr 1`
        //  (with max ATE set to 40, however you need to make that happen, if that's still a problem)
        //  Returns the "5⋅199⋅362629⋅6260963k" though it's actually for sure the 5k
        //  And c7⋅13⋅7927⋅15413⋅253937/5k is the c5k
    }
    const factoredTerms: string[] = []

    integerMonzo.forEach(
        (
            primeExponent: Decimal<{integer: true}> & Exponent<Prime>,
            primeExponentIndex: number,
        ): void => {
            if (primeExponent === 0) {
                return
            }

            if (primeExponent === 1) {
                factoredTerms.push(`${PRIMES[primeExponentIndex]}`)
            }

            if (primeExponent > 1) {
                factoredTerms.push(`${PRIMES[primeExponentIndex]}${SUPERSCRIPT_NUMBERS[primeExponent]}`)
            }
        },
    )

    const joinedFactoredTerms = factoredTerms.join(DOT_OPERATOR)

    return quotientPartIndex === 1 && computeRationalDecimalCopf(commaNameQuotientPart) > 1 ?
        `(${joinedFactoredTerms})` :
        joinedFactoredTerms
}

const formatUnfactoredCommaNameQuotientPart = (
    commaNameQuotientPart: QuotientPart & Decimal<{integer: true}>,
): string =>
    commaNameQuotientPart.toString()

const computeShouldFactor = (
    commaNameQuotientPart: QuotientPart & Decimal<{integer: true}>,
): boolean => {
    try {
        if (computeRationalDecimalCopfr(commaNameQuotientPart) > 2 && commaNameQuotientPart !== 125) return true
    } catch (e) {
        return true
    }

    return computeRationalDecimalGpf(commaNameQuotientPart) > 11
        && commaNameQuotientPart !== 65
        && commaNameQuotientPart !== 143
}

const formatMaybeFactoredCommaNameQuotientPart = (
    commaNameQuotientPart: QuotientPart & Decimal<{integer: true}>,
    quotientPartIndex: number,
): string =>
    computeShouldFactor(commaNameQuotientPart) ?
        formatFactoredCommaNameQuotientPart(commaNameQuotientPart, quotientPartIndex) :
        formatUnfactoredCommaNameQuotientPart(commaNameQuotientPart)

const formatCommaNameQuotient = (
    commaNameQuotient: Quotient<{rational: true}>,
    {factoringMode}: {factoringMode: FactoringMode},
): string[] =>
    factoringMode === FactoringMode.ALWAYS ?
        commaNameQuotient.map(formatFactoredCommaNameQuotientPart) :
        factoringMode === FactoringMode.NEVER ?
            commaNameQuotient.map(formatUnfactoredCommaNameQuotientPart) :
            commaNameQuotient.map(formatMaybeFactoredCommaNameQuotientPart)

export {
    formatCommaNameQuotient,
}
