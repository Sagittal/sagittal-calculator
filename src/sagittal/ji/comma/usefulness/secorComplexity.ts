import {
    abs,
    computeCopfr,
    computeMonzoFromJiPitch,
    computeRatioFromMonzo,
    computeRoughMonzo,
    computeSopfr,
    FIVE_ROUGHNESS,
    JiPitch,
    THREE_PRIME_INDEX,
} from "../../../../general"
import { computeApotomeSlope } from "../../pitch"

// As reverse-engineered here: http://forum.sagittal.org/viewtopic.php?p=1659#p1659

const computeSecorComplexity = (jiPitch: JiPitch): number => {
    const monzo = computeMonzoFromJiPitch(jiPitch)
    const twoThreeFreeMonzo = computeRoughMonzo(monzo, FIVE_ROUGHNESS)
    const g = computeSopfr(twoThreeFreeMonzo)

    const [numerator, denominator] = computeRatioFromMonzo(twoThreeFreeMonzo)
    const h = computeCopfr(numerator)
    const i = computeCopfr(denominator)
    const j = abs(h - i)

    const k = 2 ** (abs(monzo[ THREE_PRIME_INDEX ] || 0) - 8.5) * Math.log(g + 2)

    const l = 2 ** (abs(computeApotomeSlope(jiPitch)) - 8.5) * Math.log(g + 2)

    return g + j + k + l
}

export {
    computeSecorComplexity,
}
