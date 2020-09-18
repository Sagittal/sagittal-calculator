import {
    compute23FreeClass,
    computeCentsFromPitch,
    computeJiPitchMonzo,
    computeJiPitchRatio,
    JiPitch,
} from "../../../general"
import { analyze23FreeClass } from "../twoThreeFreeClass"
import { computeApotomeSlope } from "./apotomeSlope"
import { JiPitchAnalysis } from "./types"

const analyzeJiPitch = (jiPitch: JiPitch): JiPitchAnalysis => {
    const monzo = computeJiPitchMonzo(jiPitch)
    const ratio = computeJiPitchRatio(jiPitch)

    const apotomeSlope = computeApotomeSlope(jiPitch)
    const cents = computeCentsFromPitch(jiPitch)

    const twoThreeFreeClass = compute23FreeClass(jiPitch)
    const twoThreeFreeClassAnalysis = analyze23FreeClass(twoThreeFreeClass)

    return {
        ...jiPitch,
        monzo,
        ratio,
        cents,
        twoThreeFreeClassAnalysis,
        apotomeSlope,
    }
}

export {
    analyzeJiPitch,
}
