import {
    computeCentsFromJiPitch,
    computeGpf,
    computeJiPitchMonzo,
    computeJiPitchRatio,
    computeSopfr,
    JiPitch,
    Prime,
} from "../../general"
import { AnalyzedJiPitch } from "../types"
import { computeApotomeSlope, computeN2D3P9, N2D3P9 } from "./evaluation"
import { compute23FreeClass } from "./twoThreeFreeClass"

const analyzeJiPitch = (jiPitch: JiPitch): AnalyzedJiPitch => {
    const monzo = computeJiPitchMonzo(jiPitch)
    const ratio = computeJiPitchRatio(jiPitch)

    const apotomeSlope = computeApotomeSlope(jiPitch)
    const cents = computeCentsFromJiPitch(jiPitch)
    const limit: Prime = computeGpf(computeJiPitchMonzo(jiPitch))

    const twoThreeFreeClass = compute23FreeClass(jiPitch)
    const twoThreeFreeSopfr = computeSopfr(computeJiPitchMonzo(twoThreeFreeClass))
    const n2d3p9: N2D3P9 = computeN2D3P9(twoThreeFreeClass)

    return {
        ...jiPitch,
        monzo,
        ratio,
        cents,
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
