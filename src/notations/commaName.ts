import {
    Cents,
    computeCentsFromMonzo,
    computeMonzoFromRatio,
    computeRatioFromMonzo,
    computeRoughNumberMonzo,
    computeSuperMonzo,
    computeUndirectedRatio,
    computeIsSubMonzo,
    Monzo,
    Name,
    PRIMES,
    Ratio,
} from "../general"
import { computeSizeCategory } from "./sizeCategory"
import { SagittalComma } from "./types"

const SUPERSCRIPT_NUMS = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"]

const primeFactorizeCommaName = (numeratorOrDenominator: number) => {
    const monzo = computeMonzoFromRatio([numeratorOrDenominator, 1] as Ratio)
    const factorizedTerms: string[] = []

    monzo.forEach((primeExponent, primeExponentIndex) => {
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

const computeCommaName = (monzo: Monzo, { directed = true, factored = false, abbreviated = true } = {}): Name<SagittalComma> => {
    const sub = computeIsSubMonzo(monzo)

    const superMonzo = computeSuperMonzo(monzo)
    const cents: Cents = computeCentsFromMonzo(superMonzo)

    const fiveRoughMonzo = computeRoughNumberMonzo(superMonzo, 5)
    const ratio: Ratio = computeRatioFromMonzo(fiveRoughMonzo)

    const maybeDirectedRatio = directed ? ratio : computeUndirectedRatio(ratio)
    const maybeFlippedRatio = directed ? maybeDirectedRatio : [maybeDirectedRatio[ 1 ], maybeDirectedRatio[ 0 ]]
    const stringifiedRatio = factored ? maybeFlippedRatio.map(primeFactorizeCommaName) : maybeFlippedRatio.map(n => n.toString())

    const separator = directed ? "/" : ":"
    const formattedRatio = stringifiedRatio[ 1 ] === "1" ? stringifiedRatio[ 0 ] : stringifiedRatio.join(separator)

    const maybeHyphen = abbreviated ? "" : "-"

    const sizeCategory = computeSizeCategory(cents, { abbreviated })

    const maybeDown = sub ? " down" : ""

    return `${formattedRatio}${maybeHyphen}${sizeCategory}${maybeDown}` as Name<SagittalComma>
}

export {
    computeCommaName,
}
