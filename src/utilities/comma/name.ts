import {computeRatioFromMonzo} from "./ratioFromMonzo"
import {computeCentsFromRatio} from "./centsFromRatio"
import {computeMonzoFromRatio} from "./monzoFromRatio"
import {computeSizeCategory} from "./sizeCategory"
import {PRIMES} from "../constants"

const SUPERSCRIPT_NUMS = ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"]

const primeFactorizeCommaName = numeratorOrDenominator => {
    const monzo = computeMonzoFromRatio([numeratorOrDenominator, 1])
    const thing = []

    monzo.forEach((term, termIndex) => {
        if (term === 0) {
            return
        }

        if (term === 1) {
            thing.push(`${PRIMES[termIndex]}`)
        }

        if (term > 1) {
            thing.push(`${PRIMES[termIndex]}${SUPERSCRIPT_NUMS[term]}`)
        }
    })

    return thing.join(".")
}

const undirectCommaName = commaResult =>
    commaResult[0] > commaResult[1] ? [commaResult[1], commaResult[0]] : commaResult

const sizeCategoryFromMonzo = (monzo, {abbreviated}) => {
    const ratio = computeRatioFromMonzo(monzo)
    const cents = computeCentsFromRatio(ratio)

    return computeSizeCategory(cents, {abbreviated})
}

const computeNoTwosOrThreesMonzo = monzo => {
    const noTwosOrThreesMonzo = monzo.slice()
    noTwosOrThreesMonzo[0] = 0
    noTwosOrThreesMonzo[1] = 0

    return noTwosOrThreesMonzo
}

const computeCommaName = (monzo, {directed = true, factored = false, abbreviated = true} = {}) => {
    const noTwosOrThreesMonzo = computeNoTwosOrThreesMonzo(monzo)
    let commaResult: any = computeRatioFromMonzo(noTwosOrThreesMonzo)

    commaResult = directed ? commaResult : undirectCommaName(commaResult)
    commaResult = factored ? commaResult.map(primeFactorizeCommaName) : commaResult

    const separator = directed ? "/" : ":"
    const formattedCommaResult = commaResult[1] === 1 ? commaResult[0] : commaResult.join(separator)

    const maybeHyphen = abbreviated ? "" : "-"

    const sizeCategory = sizeCategoryFromMonzo(monzo, {abbreviated})

    return `${formattedCommaResult}${maybeHyphen}${sizeCategory}`
}

export {
    computeCommaName,
}
