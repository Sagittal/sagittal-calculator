import {
    abs,
    compute23FreeClass,
    computeQuotientFromMonzo,
    computeRationalDecimalCopfr,
    computeRationalScamonSopfr,
    Scamon,
    THREE_PRIME_INDEX,
} from "../../../../general"
import {computeApotomeSlope} from "../uselessness"
import {Complexity} from "./types"

// As reverse-engineered here: http://forum.sagittal.org/viewtopic.php?p=1659#p1659

const computeSecorComplexity = (jiPitch: Scamon<{rational: true}>): Complexity => {
    const two3FreeClass = compute23FreeClass(jiPitch)
    const g = computeRationalScamonSopfr(two3FreeClass)

    const [numerator, denominator] = computeQuotientFromMonzo(two3FreeClass.monzo)
    const h = computeRationalDecimalCopfr(numerator)
    const i = computeRationalDecimalCopfr(denominator)
    const j = abs(h - i)

    const k = 2 ** (abs(jiPitch.monzo[THREE_PRIME_INDEX] || 0) - 8.5) * Math.log(g + 2)

    const l = 2 ** (abs(computeApotomeSlope(jiPitch)) - 8.5) * Math.log(g + 2)

    return g + j + k + l as Complexity
}

export {
    computeSecorComplexity,
}
