import {
    Comma,
    computeRationalMonzoFromRationalDecimal,
    computeSubQuotient,
    computeSuperScamon,
    Decimal,
    Direction,
    Exponent,
    isRationalScamonSmooth,
    isRationalScamonSub,
    isRationalScamonUnison,
    Name,
    Prime,
    PRIMES,
    Quotient,
    QuotientPart,
    stringify,
    SUPERSCRIPT_NUMBERS,
    THREE_SMOOTHNESS,
} from "../../../general"
import {computeCommaNameQuotient} from "./commaNameQuotient"
import {computeSizeCategory} from "./sizeCategory"
import {isCommaSized} from "./typeGuards"
import {CommaNameOptions, SizeCategoryAbbreviation, SizeCategoryName} from "./types"

const primeFactorizeCommaNameQuotient = (
    numeratorOrDenominator: QuotientPart & Decimal<{integer: true}>,
): string => {
    if (numeratorOrDenominator === 1) return "1"

    const integerMonzo = computeRationalMonzoFromRationalDecimal(numeratorOrDenominator)
    const factorizedTerms: string[] = []

    integerMonzo.forEach(
        (
            primeExponent: Decimal<{integer: true}> & Exponent<Prime>,
            primeExponentIndex: number,
        ): void => {
            if (primeExponent === 0) {
                return
            }

            if (primeExponent === 1) {
                factorizedTerms.push(`${PRIMES[primeExponentIndex]}`)
            }

            if (primeExponent > 1) {
                factorizedTerms.push(`${PRIMES[primeExponentIndex]}${SUPERSCRIPT_NUMBERS[primeExponent]}`)
            }
        },
    )

    return factorizedTerms.join(".")
}

const formatCommaNameQuotient = (
    rationalQuotient: Quotient<{rational: true}>,
    {factored}: {factored: boolean},
): string[] => {
    return factored ?
        rationalQuotient.map(primeFactorizeCommaNameQuotient) :
        rationalQuotient.map((
            integerQuotientPart: QuotientPart & Decimal<{integer: true}>,
        ): string => {
            return integerQuotientPart.toString()
        })
}

// "Secor-Keenan systematic name" or "Sagittal name"

// TODO: 3-LIMIT COMMA NAMES & COMPLEX COMMA NAMES
//  I think there's a bug where this can report 3n when it means unison.
const computeCommaName = (
    comma: Comma,
    {directed = true, factored = false, abbreviated = true}: CommaNameOptions = {},
): Name<Comma> => {
    if (!isCommaSized(comma)) {
        throw new Error(`Comma ${stringify(comma)} is outside of comma-sized range and cannot be named.`)
    }

    const maybeHyphen = abbreviated ? "" : "-"

    const maybeDown = isRationalScamonSub(comma) ? " down" : ""

    const superComma = computeSuperScamon(comma) as Comma<{rational: true, direction: Direction.SUPER}>
    const sizeCategory: SizeCategoryAbbreviation | SizeCategoryName = computeSizeCategory(superComma, {abbreviated})

    let formattedCommaNameQuotient
    if (isRationalScamonSmooth(comma, THREE_SMOOTHNESS) && !isRationalScamonUnison(comma)) {
        formattedCommaNameQuotient = "3"
    } else {
        const commaNameQuotient = computeCommaNameQuotient(comma)

        if (directed) {
            const stringifiedQuotient = formatCommaNameQuotient(commaNameQuotient, {factored})

            formattedCommaNameQuotient = stringifiedQuotient[1] === "1" ?
                stringifiedQuotient[0] :
                stringifiedQuotient.join("/")
        } else {
            const stringifiedQuotient = formatCommaNameQuotient(computeSubQuotient(commaNameQuotient), {factored})

            formattedCommaNameQuotient = stringifiedQuotient[0] === "1" ?
                stringifiedQuotient[1] :
                stringifiedQuotient.join(":")
        }
    }

    return `${formattedCommaNameQuotient}${maybeHyphen}${sizeCategory}${maybeDown}` as Name<Comma>
}

export {
    computeCommaName,
}


