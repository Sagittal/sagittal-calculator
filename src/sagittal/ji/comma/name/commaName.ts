import {
    Comma,
    computeIntegerMonzoFromInteger,
    computeRationalRatioFromRationalNum,
    computeRoughRationalRatio,
    computeSubRatio,
    computeSuperNum,
    Direction,
    Exponent,
    FIVE_ROUGHNESS,
    Integer,
    isSubNum,
    isUnisonNum,
    isWithinPrimeLimit,
    Name,
    Prime,
    PRIMES,
    RationalFractionalPart,
    RationalRatio,
    stringify,
    SUPERSCRIPT_NUMS,
    THREE_PRIME_LIMIT,
} from "../../../../general"
import { computeSizeCategory } from "./sizeCategory"
import { isCommaSized } from "./typeGuards"
import { CommaNameOptions, CommaNameRatio, SizeCategoryAbbreviation, SizeCategoryName } from "./types"

const primeFactorize = (numeratorOrDenominator: RationalFractionalPart): string => {
    if (numeratorOrDenominator === 1) return "1"

    const monzo = computeIntegerMonzoFromInteger(numeratorOrDenominator)
    const factorizedTerms: string[] = []

    monzo.forEach((primeExponent: Integer & Exponent<Prime>, primeExponentIndex: number): void => {
        if (primeExponent === 0) {
            return
        }

        if (primeExponent === 1) {
            factorizedTerms.push(`${PRIMES[ primeExponentIndex ]}`)
        }

        if (primeExponent > 1) {
            factorizedTerms.push(`${PRIMES[ primeExponentIndex ]}${SUPERSCRIPT_NUMS[ primeExponent ]}`)
        }
    })

    return factorizedTerms.join(".")
}

const stringifyRatio = (rationalRatio: RationalRatio, { factored }: { factored: boolean }): string[] => {
    return factored ?
        rationalRatio.map(primeFactorize) :
        rationalRatio.map((rationalFractionalPart: RationalFractionalPart): string => rationalFractionalPart.toString())
}

// "Secor-Keenan systematic name" or "Sagittal name"

const computeCommaName = (
    comma: Comma,
    { directed = true, factored = false, abbreviated = true }: CommaNameOptions = {},
): Name<Comma> => {
    if (!isCommaSized(comma)) {
        throw new Error(`Comma ${stringify(comma)} is outside of comma-sized range and cannot be named.`)
    }

    const maybeHyphen = abbreviated ? "" : "-"

    const maybeDown = isSubNum(comma) ? " down" : ""

    const superComma: Comma<{ direction: Direction.SUPER }> = computeSuperNum(comma)
    const sizeCategory: SizeCategoryAbbreviation | SizeCategoryName = computeSizeCategory(superComma, { abbreviated })

    let formattedCommaNameRatio
    if (isWithinPrimeLimit(comma, THREE_PRIME_LIMIT) && !isUnisonNum(comma)) {
        formattedCommaNameRatio = "3"
    } else {
        const commaNameRatio: CommaNameRatio =
            computeRoughRationalRatio(computeRationalRatioFromRationalNum(superComma), FIVE_ROUGHNESS) as CommaNameRatio

        if (directed) {
            const stringifiedRatio = stringifyRatio(commaNameRatio, { factored })

            formattedCommaNameRatio = stringifiedRatio[ 1 ] === "1" ? stringifiedRatio[ 0 ] : stringifiedRatio.join("/")
        } else {
            const stringifiedRatio = stringifyRatio(computeSubRatio(commaNameRatio), { factored })

            formattedCommaNameRatio = stringifiedRatio[ 0 ] === "1" ? stringifiedRatio[ 1 ] : stringifiedRatio.join(":")
        }
    }

    return `${formattedCommaNameRatio}${maybeHyphen}${sizeCategory}${maybeDown}` as Name<Comma>
}

export {
    computeCommaName,
}


