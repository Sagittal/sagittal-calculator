import {
    Comma,
    computeIntegerMonzoFromInteger,
    computeRationalQuotientFromRationalNum,
    computeRoughRationalQuotient,
    computeSubQuotient,
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
    RationalQuotient,
    stringify,
    SUPERSCRIPT_NUMS,
    THREE_PRIME_LIMIT,
} from "../../../../general"
import { computeSizeCategory } from "./sizeCategory"
import { isCommaSized } from "./typeGuards"
import { CommaNameOptions, CommaNameQuotient, SizeCategoryAbbreviation, SizeCategoryName } from "./types"

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

const stringifyQuotient = (rationalQuotient: RationalQuotient, { factored }: { factored: boolean }): string[] => {
    return factored ?
        rationalQuotient.map(primeFactorize) :
        rationalQuotient.map((rationalFractionalPart: RationalFractionalPart): string => {
            return rationalFractionalPart.toString()
        })
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

    let formattedCommaNameQuotient
    if (isWithinPrimeLimit(comma, THREE_PRIME_LIMIT) && !isUnisonNum(comma)) {
        formattedCommaNameQuotient = "3"
    } else {
        const commaNameQuotient: CommaNameQuotient = computeRoughRationalQuotient(
            computeRationalQuotientFromRationalNum(superComma),
            FIVE_ROUGHNESS
        ) as CommaNameQuotient

        if (directed) {
            const stringifiedQuotient = stringifyQuotient(commaNameQuotient, { factored })

            formattedCommaNameQuotient = stringifiedQuotient[ 1 ] === "1" ?
                stringifiedQuotient[ 0 ] :
                stringifiedQuotient.join("/")
        } else {
            const stringifiedQuotient = stringifyQuotient(computeSubQuotient(commaNameQuotient), { factored })

            formattedCommaNameQuotient = stringifiedQuotient[ 0 ] === "1" ?
                stringifiedQuotient[ 1 ] :
                stringifiedQuotient.join(":")
        }
    }

    return `${formattedCommaNameQuotient}${maybeHyphen}${sizeCategory}${maybeDown}` as Name<Comma>
}

export {
    computeCommaName,
}


