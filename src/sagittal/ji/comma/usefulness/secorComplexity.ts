import {
    abs,
    computeCopfr, computeNumFromMonzo,
    computeQuotientFromMonzo,
    computeRationalMonzoFromRatio,
    computeRoughRationalMonzo,
    computeSopfr,
    FIVE_ROUGHNESS,
    Ratio,
    THREE_PRIME_INDEX,
} from "../../../../general"
import { computeApotomeSlope } from "../../pitch"

// As reverse-engineered here: http://forum.sagittal.org/viewtopic.php?p=1659#p1659

const computeSecorComplexity = (jiPitch: Ratio): number => {
    // TODO: CONDUCT AT NUM LEVEL
    const rationalMonzo = computeRationalMonzoFromRatio(jiPitch)
    const two3FreeRationalMonzo = computeRoughRationalMonzo(rationalMonzo, FIVE_ROUGHNESS)
    const g = computeSopfr(computeNumFromMonzo(two3FreeRationalMonzo))

    const [numerator, denominator] = computeQuotientFromMonzo(two3FreeRationalMonzo)
    const h = computeCopfr(numerator)
    const i = computeCopfr(denominator)
    const j = abs(h - i)

    const k = 2 ** (abs(rationalMonzo[ THREE_PRIME_INDEX ] || 0) - 8.5) * Math.log(g + 2)

    const l = 2 ** (abs(computeApotomeSlope(jiPitch)) - 8.5) * Math.log(g + 2)

    return g + j + k + l
}

export {
    computeSecorComplexity,
}
