import {
    abs,
    computeCopfr,
    computeRatioFromMonzo,
    computeRoughNumberMonzo,
    computeSopfr, FIVE_ROUGHNESS,
    log,
    Monzo,
} from "../../../../general"
import { computeApotomeSlope } from "../apotomeSlope"

// As reverse-engineered here: http://forum.sagittal.org/viewtopic.php?p=1659#p1659

const computeSecorComplexity = (monzo: Monzo) => {
    const fiveRoughMonzo = computeRoughNumberMonzo(monzo, FIVE_ROUGHNESS)
    const g = computeSopfr(fiveRoughMonzo)

    const [numerator, denominator] = computeRatioFromMonzo(fiveRoughMonzo)
    const h = computeCopfr(numerator)
    const i = computeCopfr(denominator)
    const j = abs(h - i)

    const k = 2 ** (abs(monzo[1]) - 8.5) * Math.log(g + 2)

    const l = 2 ** (abs(computeApotomeSlope(monzo)) - 8.5) * Math.log(g + 2)

    console.log(g, j, k, l)

    return g + j + k + l
}

export {
    computeSecorComplexity,
}
