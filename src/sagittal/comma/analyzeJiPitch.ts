import {
    computeCentsFromJiPitch,
    computeGpf,
    computeRatioFromMonzo,
    computeSopfr,
    JiPitch,
    Prime,
    Sopfr,
} from "../../general"
import { AnalyzedJiPitch } from "../types"
import { computeApotomeSlope, computeN2D3P9, N2D3P9 } from "./evaluation"
import { compute23FreeClass } from "./twoThreeFreeClass"

const analyzeJiPitch = (jiPitch: JiPitch): AnalyzedJiPitch => {
    const monzo = jiPitch.monzo

    const apotomeSlope = computeApotomeSlope(jiPitch)
    const ratio = computeRatioFromMonzo(monzo)
    const cents = computeCentsFromJiPitch(jiPitch)
    const limit: Prime = computeGpf(jiPitch)

    const twoThreeFreeClass = compute23FreeClass(jiPitch)
    const twoThreeFreeSopfr = computeSopfr(twoThreeFreeClass)
    const n2d3p9: N2D3P9 = computeN2D3P9(twoThreeFreeClass)

    return {
        ...jiPitch,
        cents,
        ratio,
        limit,
        apotomeSlope,
        twoThreeFreeClass,
        twoThreeFreeSopfr,
        n2d3p9,
    } as AnalyzedJiPitch
}

export {
    analyzeJiPitch,
}
