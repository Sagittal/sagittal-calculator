import {
    abs,
    compute23FreeClass,
    computeCopfr,
    computeRationalMonzoFromRational,
    computeRationalQuotientFromRational,
    computeSopfr,
    Rational,
    THREE_PRIME_INDEX,
} from "../../../../general"
import { computeApotomeSlope } from "../../pitch"

// As reverse-engineered here: http://forum.sagittal.org/viewtopic.php?p=1659#p1659

const computeSecorComplexity = (jiPitch: Rational): number => {
    const two3FreeClass = compute23FreeClass(jiPitch)
    const g = computeSopfr(two3FreeClass)

    const [numerator, denominator] = computeRationalQuotientFromRational(two3FreeClass)
    const h = computeCopfr(numerator)
    const i = computeCopfr(denominator)
    const j = abs(h - i)

    const rationalMonzo = computeRationalMonzoFromRational(jiPitch)
    const k = 2 ** (abs(rationalMonzo[ THREE_PRIME_INDEX ] || 0) - 8.5) * Math.log(g + 2)

    const l = 2 ** (abs(computeApotomeSlope(jiPitch)) - 8.5) * Math.log(g + 2)

    return g + j + k + l
}

export {
    computeSecorComplexity,
}
