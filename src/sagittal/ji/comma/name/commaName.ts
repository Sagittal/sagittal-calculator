import {
    Comma,
    computeMonzoFromInteger,
    computeRatioFromRationalNum,
    computeRoughRatio,
    computeSubRatio,
    computeSuperNum,
    Direction,
    Exponent,
    FIVE_ROUGHNESS,
    FractionalPart,
    Integer,
    isSubNum,
    isUnisonNum,
    isWithinPrimeLimit,
    Name,
    Prime,
    PRIMES,
    Ratio,
    stringify,
    SUPERSCRIPT_NUMS,
    THREE_PRIME_LIMIT,
} from "../../../../general"
import { computeSizeCategory } from "./sizeCategory"
import { isCommaSized } from "./typeGuards"
import { CommaNameOptions, CommaNameRatio, SizeCategoryAbbreviation, SizeCategoryName } from "./types"

const primeFactorize = (numeratorOrDenominator: FractionalPart): string => {
    if (numeratorOrDenominator === 1) return "1"

    const monzo = computeMonzoFromInteger(numeratorOrDenominator)
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

const stringifyRatio = (ratio: Ratio, { factored }: { factored: boolean }): string[] => {
    return factored ?
        ratio.map(primeFactorize) :
        ratio.map((fractionalPart: FractionalPart): string => fractionalPart.toString())
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
            computeRoughRatio(computeRatioFromRationalNum(superComma), FIVE_ROUGHNESS) as CommaNameRatio

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


