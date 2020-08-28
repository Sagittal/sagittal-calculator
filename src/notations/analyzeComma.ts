import {
    computeApotomeSlope,
    computeCentsFromRatio,
    computeGpf,
    computeN2D3P9,
    computeRatioFromMonzo,
    computeRoughNumberMonzo,
    computeSopfr,
    computeSuperMonzo,
    FIVE_ROUGHNESS,
    Monzo,
    N2D3P9,
    Name,
    Prime,
    Sopfr,
} from "../general"
import { computeCommaName } from "./commaName"
import { NamedComma, SagittalComma } from "./types"

const analyzeComma = (monzo: Monzo): NamedComma => {
    const apotomeSlope = computeApotomeSlope(monzo)
    const name: Name<SagittalComma> = computeCommaName(monzo)
    const ratio = computeRatioFromMonzo(monzo)
    const fiveRoughMonzo = computeRoughNumberMonzo(monzo, FIVE_ROUGHNESS)
    const fiveRoughSopfr = computeSopfr(fiveRoughMonzo) as Sopfr<5>
    const limit: Prime = computeGpf(monzo)
    const n2d3p9: N2D3P9 = computeN2D3P9(computeSuperMonzo(fiveRoughMonzo))
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