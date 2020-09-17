import {
    compute23FreeClass,
    computeCentsFromPitch,
    computeGpf,
    computeJiPitchMonzo,
    computeJiPitchRatio,
    computeSopfr,
    JiPitch,
    Prime,
} from "../../general"
import { computeApotomeSlope, computeN2D3P9, N2D3P9 } from "./evaluation"
import { JiPitchAnalysis } from "./types"

const analyzeJiPitch = (jiPitch: JiPitch): JiPitchAnalysis => {
    const monzo = computeJiPitchMonzo(jiPitch)
    const ratio = computeJiPitchRatio(jiPitch)

    const apotomeSlope = computeApotomeSlope(jiPitch)
    const cents = computeCentsFromPitch(jiPitch)
    const primeLimit: Prime = computeGpf(computeJiPitchMonzo(jiPitch))

    const twoThreeFreeClass = compute23FreeClass(jiPitch)
    const twoThreeFreeSopfr = computeSopfr(computeJiPitchMonzo(twoThreeFreeClass))
    const n2d3p9: N2D3P9 = computeN2D3P9(twoThreeFreeClass)

    return {
        ...jiPitch,
        monzo,
        ratio,
        cents,
        primeLimit,
        apotomeSlope,
        twoThreeFreeClass,
        twoThreeFreeSopfr,
        n2d3p9,
    } as JiPitchAnalysis
}

export {
    analyzeJiPitch,
}
