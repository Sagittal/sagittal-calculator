import { Name, Prime } from "../types"
import { computeApotomeSlope } from "./apotomeSlope"
import { computeCentsFromRatio } from "./centsFromRatio"
import { computeGpf } from "./gpf"
import { computeN2D3P9 } from "./n2d3p9"
import { computeCommaName } from "./name"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { computeRoughNumberMonzo } from "./rough"
import { computeSopfr } from "./sopfr"
import { Comma, Monzo, N2D3P9, Position, Sopfr } from "./types"

const analyzeComma = (monzo: Monzo): Comma => {
    const apotomeSlope = computeApotomeSlope(monzo)
    const name: Name<Position> = computeCommaName(monzo)
    const ratio = computeRatioFromMonzo(monzo)
    const fiveRoughMonzo = computeRoughNumberMonzo(monzo, 5)
    const fiveRoughSopfr = computeSopfr(fiveRoughMonzo) as Sopfr<5>
    const limit: Prime = computeGpf(monzo)
    const n2d3p9: N2D3P9 = computeN2D3P9(fiveRoughMonzo)
    const cents = computeCentsFromRatio(ratio)

    return {
        cents,
        monzo,
        ratio,
        name,
        limit,
        apotomeSlope,
        fiveRoughSopfr,
        n2d3p9,
    }
}

export {
    analyzeComma,
}
