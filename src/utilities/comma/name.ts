import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { computeCentsFromRatio } from "./centsFromRatio"
import { computeMonzoFromRatio } from "./monzoFromRatio"
import { computeSizeCategory } from "./sizeCategory"
import { PRIMES } from "../constants"
import { CommaName, Monzo, PrimeExponent, SizeCategoryOptions } from "./types"
import { Denominator, Numerator, Ratio } from "../types"

const SUPERSCRIPT_NUMS = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"]

const primeFactorizeCommaName = (numeratorOrDenominator: number) => {
    const monzo = computeMonzoFromRatio([numeratorOrDenominator, 1] as Ratio)
    const factorizedTerms: string[] = []

    monzo.forEach((term, termIndex) => {
        if (term === 0) {
            return
        }

        if (term === 1) {
            factorizedTerms.push(`${PRIMES[ termIndex ]}`)
        }

        if (term > 1) {
            factorizedTerms.push(`${PRIMES[ termIndex ]}${SUPERSCRIPT_NUMS[ term ]}`)
        }
    })

    return factorizedTerms.join(".")
}

const undirectCommaName = (commaResult: Ratio): Ratio =>
    commaResult[ 0 ] > commaResult[ 1 ] ?
        [commaResult[ 1 ] as unknown as Numerator, commaResult[ 0 ] as unknown as Denominator] :
        commaResult

const sizeCategoryFromMonzo = (monzo: Monzo, { abbreviated }: SizeCategoryOptions) => {
    const ratio = computeRatioFromMonzo(monzo)
    const cents = computeCentsFromRatio(ratio)

    return computeSizeCategory(cents, { abbreviated })
}

const computeNoTwosOrThreesMonzo = (monzo: Monzo) => {
    const noTwosOrThreesMonzo = monzo.slice()
    noTwosOrThreesMonzo[ 0 ] = 0 as PrimeExponent
    noTwosOrThreesMonzo[ 1 ] = 0 as PrimeExponent

    return noTwosOrThreesMonzo
}

const computeCommaName = (monzo: Monzo, { directed = true, factored = false, abbreviated = true } = {}): CommaName => {
    const noTwosOrThreesMonzo = computeNoTwosOrThreesMonzo(monzo)
    const commaResult: Ratio = computeRatioFromMonzo(noTwosOrThreesMonzo)

    const directedCommaResult = directed ? commaResult : undirectCommaName(commaResult)
    const stringifiedCommaResult = factored ? directedCommaResult.map(primeFactorizeCommaName) : directedCommaResult.map(n => n.toString())

    const separator = directed ? "/" : ":"
    const formattedCommaResult = stringifiedCommaResult[ 1 ] === "1" ? stringifiedCommaResult[ 0 ] : stringifiedCommaResult.join(separator)

    const maybeHyphen = abbreviated ? "" : "-"

    const sizeCategory = sizeCategoryFromMonzo(monzo, { abbreviated })

    return `${formattedCommaResult}${maybeHyphen}${sizeCategory}` as CommaName
}

export {
    computeCommaName,
}
