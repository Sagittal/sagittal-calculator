import {
    Cents,
    computeCentsFromMonzo,
    computeIsSubMonzo,
    computeMonzoFromInteger,
    computeRatioFromMonzo,
    computeRoughNumberMonzo,
    computeSuperMonzo,
    computeUndirectedRatio,
    FIVE_ROUGHNESS,
    FractionalPart,
    Monzo,
    Name,
    PRIMES,
    Ratio,
    SUPERSCRIPT_NUMS,
} from "../../../general"
import { Comma } from "../../types"
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

    const twoThreeFreeMonzo = computeRoughNumberMonzo(superMonzo, FIVE_ROUGHNESS)
    const ratio: Ratio = computeRatioFromMonzo(twoThreeFreeMonzo)

    const maybeDirectedRatio = directed ? ratio : computeUndirectedRatio(ratio)
    const maybeFlippedRatio = directed ? maybeDirectedRatio : [maybeDirectedRatio[ 1 ], maybeDirectedRatio[ 0 ]]
    const stringifiedRatio = factored ?
        maybeFlippedRatio.map(primeFactorizeCommaName) :
        maybeFlippedRatio.map(n => n.toString())

    const separator = directed ? "/" : ":"
    const formattedRatio = directed ?
        stringifiedRatio[ 1 ] === "1" ? stringifiedRatio[ 0 ] : stringifiedRatio.join(separator) :
        stringifiedRatio[ 0 ] === "1" ? stringifiedRatio[ 1 ] : stringifiedRatio.join(separator)

    const maybeHyphen = abbreviated ? "" : "-"

    const sizeCategory = computeSizeCategory(cents, { abbreviated })

    const maybeDown = sub ? " down" : ""

    return `${formattedRatio}${maybeHyphen}${sizeCategory}${maybeDown}` as Name<Comma>
}

// TODO: 
/*
Something unrelated that I just remembered to mention: 
Can you please ensure your software names the Pythagorean comma as "3C", not "1C", 
and any other 3-limit commas similarly. 
I'm pretty sure we agreed that the only "comma" name that would use the lone number "1" would be the unison "1u".
 */

export {
    computeSagittalCommaName,
}
