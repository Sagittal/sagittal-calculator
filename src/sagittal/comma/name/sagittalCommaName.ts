import {
    abs,
    Cents,
    computeCentsFromMonzo,
    computeIsSubMonzo,
    computeMonzoFromInteger,
    computeRatioFromMonzo,
    computeRoughNumberMonzo,
    computeSuperMonzo,
    computeUndirectedRatio,
    deepEquals,
    Direction,
    FIVE_ROUGHNESS,
    formatMonzo,
    FractionalPart,
    Monzo,
    Name,
    PRIMES,
    Ratio,
    SUPERSCRIPT_NUMS,
} from "../../../general"
import { Comma } from "../../types"
import { MAX_SIZE_CATEGORY_BOUND } from "./constants"
import { computeSizeCategory } from "./sizeCategory"

const primeFactorizeCommaName = (numeratorOrDenominator: FractionalPart) => {
    if (numeratorOrDenominator === 1) return "1"

    const monzo = computeMonzoFromInteger(numeratorOrDenominator)
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

// "Secor-Keenan systematic name" or "Sagittal name"

const computeSagittalCommaName = (
    monzo: Monzo,
    { directed = true, factored = false, abbreviated = true } = {},
): Name<Comma> => {
    const sub = computeIsSubMonzo(monzo)

    const superMonzo = computeSuperMonzo(monzo)
    const cents: Cents = computeCentsFromMonzo(superMonzo)

    if (cents > MAX_SIZE_CATEGORY_BOUND) {
        throw new Error(`Comma ${formatMonzo(monzo)} is outside of comma-sized range and cannot be named.`)
    }

    const twoThreeFreeMonzo = computeRoughNumberMonzo(superMonzo, FIVE_ROUGHNESS)
    const ratio: Ratio = computeRatioFromMonzo(twoThreeFreeMonzo)

    let formattedRatio
    if (
        deepEquals(twoThreeFreeMonzo, [] as Monzo as Monzo<{ rough: 5, direction: Direction.SUPER }>) &&
        abs(monzo[ 1 ]) > 0
    ) {
        formattedRatio = "3"
    } else {
        const maybeDirectedRatio = directed ? ratio : computeUndirectedRatio(ratio)
        const maybeFlippedRatio = directed ? maybeDirectedRatio : [maybeDirectedRatio[ 1 ], maybeDirectedRatio[ 0 ]]
        const stringifiedRatio = factored ?
            maybeFlippedRatio.map(primeFactorizeCommaName) :
            maybeFlippedRatio.map(n => n.toString())
        const separator = directed ? "/" : ":"

        formattedRatio = directed ?
            stringifiedRatio[ 1 ] === "1" ? stringifiedRatio[ 0 ] : stringifiedRatio.join(separator) :
            stringifiedRatio[ 0 ] === "1" ? stringifiedRatio[ 1 ] : stringifiedRatio.join(separator)
    }
    
    const maybeHyphen = abbreviated ? "" : "-"
    const sizeCategory = computeSizeCategory(cents, { abbreviated })
    const maybeDown = sub ? " down" : ""

    return `${formattedRatio}${maybeHyphen}${sizeCategory}${maybeDown}` as Name<Comma>
}

export {
    computeSagittalCommaName,
}
