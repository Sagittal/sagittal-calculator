import {
    computeCentsFromMonzo,
    computeGpf,
    computeRatioFromMonzo,
    computeSopfr,
    Prime,
    RationalPitch,
    Sopfr,
} from "../../general"
import { AnalyzedRationalPitch } from "../types"
import { computeApotomeSlope, computeN2D3P9, N2D3P9 } from "./evaluation"
import { compute23FreeClass } from "./twoThreeFreeClass"

const analyzeRationalPitch = (rationalPitch: RationalPitch): AnalyzedRationalPitch => {
    const monzo = rationalPitch.monzo

    const apotomeSlope = computeApotomeSlope(monzo)
    const ratio = computeRatioFromMonzo(monzo)
    const cents = computeCentsFromMonzo(monzo)
    const limit: Prime = computeGpf(monzo)

    const twoThreeFreeClass = compute23FreeClass(monzo)
    const twoThreeFreeSopfr = computeSopfr(twoThreeFreeClass.monzo) as Sopfr<5>
    const n2d3p9: N2D3P9 = computeN2D3P9(twoThreeFreeClass.monzo)

    return {
        ...rationalPitch,
        cents,
        ratio,
        limit,
        apotomeSlope,
        twoThreeFreeClass,
        twoThreeFreeSopfr,
        n2d3p9,
    } as AnalyzedRationalPitch
}

export {
    analyzeRationalPitch,
}
