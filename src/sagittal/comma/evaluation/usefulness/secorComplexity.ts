import {
    abs,
    computeCopfr,
    computeRatioFromMonzo,
    computeRoughNumberMonzo,
    computeSopfr,
    FIVE_ROUGHNESS,
    Monzo,
} from "../../../../general"
import { computeApotomeSlope } from "../apotomeSlope"

// As reverse-engineered here: http://forum.sagittal.org/viewtopic.php?p=1659#p1659

const computeSecorComplexity = (monzo: Monzo) => {
    const twoThreeFreeMonzo = computeRoughNumberMonzo(monzo, FIVE_ROUGHNESS)
    const g = computeSopfr(twoThreeFreeMonzo)

    const [numerator, denominator] = computeRatioFromMonzo(twoThreeFreeMonzo)
    const h = computeCopfr(numerator)
    const i = computeCopfr(denominator)
    const j = abs(h - i)

    const k = 2 ** (abs(monzo[ 1 ]) - 8.5) * Math.log(g + 2)

    const l = 2 ** (abs(computeApotomeSlope(monzo)) - 8.5) * Math.log(g + 2)

    return g + j + k + l
}

export {
    computeSecorComplexity,
}
