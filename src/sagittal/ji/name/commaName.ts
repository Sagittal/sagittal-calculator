import {
    BLANK,
    Comma,
    computeRationalDecimalCopf,
    computeRationalDecimalCopfr,
    computeRationalDecimalGpf,
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
import {DOT_OPERATOR} from "./constants"
import {computeSizeCategory} from "./sizeCategory"
import {isCommaSized} from "./typeGuards"
import {CommaNameOptions, FactoringMode, SizeCategoryAbbreviation, SizeCategoryName} from "./types"

const formatFactoredCommaNameQuotientPart = (
    commaNameQuotientPart: QuotientPart & Decimal<{integer: true}>,
    quotientPartIndex: number,
): string => {
    if (commaNameQuotientPart === 1) return "1"

    const integerMonzo = computeRationalMonzoFromRationalDecimal(commaNameQuotientPart)
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
    if (computeRationalDecimalCopfr(commaNameQuotientPart) > 2 && commaNameQuotientPart !== 125) return true

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
): string[] => {
    return factoringMode === FactoringMode.ALWAYS ?
        commaNameQuotient.map(formatFactoredCommaNameQuotientPart) :
        factoringMode === FactoringMode.NEVER ?
            commaNameQuotient.map(formatUnfactoredCommaNameQuotientPart) :
            commaNameQuotient.map(formatMaybeFactoredCommaNameQuotientPart)
}

// "Secor-Keenan systematic name" or "Sagittal name"

// TODO: 3-LIMIT COMMA NAMES & COMPLEX COMMA NAMES
//  I think there's a bug where this can report 3n when it means unison.
const computeCommaName = (
    comma: Comma,
    {directed = true, factoringMode = FactoringMode.THRESHOLD, abbreviated = true}: CommaNameOptions = {},
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
            const stringifiedQuotient = formatCommaNameQuotient(commaNameQuotient, {factoringMode})

            formattedCommaNameQuotient = stringifiedQuotient[1] === "1" ?
                stringifiedQuotient[0].replace("(", BLANK).replace(")", BLANK) :
                stringifiedQuotient.join("/")
        } else {
            const stringifiedQuotient =
                formatCommaNameQuotient(computeSubQuotient(commaNameQuotient), {factoringMode})

            formattedCommaNameQuotient = stringifiedQuotient[0] === "1" ?
                stringifiedQuotient[1].replace("(", BLANK).replace(")", BLANK) :
                stringifiedQuotient.join(":")
        }
    }

    return `${formattedCommaNameQuotient}${maybeHyphen}${sizeCategory}${maybeDown}` as Name<Comma>
}

export {
    computeCommaName,
}


