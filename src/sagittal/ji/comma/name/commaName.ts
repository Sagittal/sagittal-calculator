import {
    Comma,
    computeIntegerMonzoFromIntegerDecimal,
    computeRationalQuotientFromRatio,
    computeRoughRationalQuotient,
    computeSubQuotient,
    computeSuperNum,
    Direction,
    Exponent,
    FIVE_ROUGHNESS,
    IntegerDecimal,
    IntegerQuotientPart,
    isSubNum,
    isUnisonNum,
    isWithinPrimeLimit,
    Name,
    Prime,
    PRIMES,
    RationalQuotient,
    stringify,
    SUPERSCRIPT_NUMS,
    THREE_PRIME_LIMIT,
} from "../../../../general"
import { computeSizeCategory } from "./sizeCategory"
import { isCommaSized } from "./typeGuards"
import { CommaNameOptions, CommaNameQuotient, SizeCategoryAbbreviation, SizeCategoryName } from "./types"

const primeFactorize = (numeratorOrDenominator: IntegerQuotientPart): string => {
    if (numeratorOrDenominator === 1) return "1"

    const monzo = computeIntegerMonzoFromIntegerDecimal(numeratorOrDenominator)
    const factorizedTerms: string[] = []

    monzo.forEach((primeExponent: IntegerDecimal & Exponent<Prime>, primeExponentIndex: number): void => {
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
        rationalQuotient.map((rationalQuotientPart: IntegerQuotientPart): string => {
            return rationalQuotientPart.toString()
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
            computeRationalQuotientFromRatio(superComma),
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


