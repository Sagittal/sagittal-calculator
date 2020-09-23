import {
    compute23FreeClass,
    computeCentsFromPitch,
    computeMonzoFromJiPitch,
    computeRatioFromJiPitch,
    JiPitch,
} from "../../../general"
import { analyze23FreeClass } from "../twoThreeFreeClass"
import { computeAas } from "./aas"
import { computeApotomeSlope } from "./apotomeSlope"
import { computeAte } from "./ate"
import { JiPitchAnalysis } from "./types"

const analyzeJiPitch = (jiPitch: JiPitch): JiPitchAnalysis => {
    const monzo = computeMonzoFromJiPitch(jiPitch)
    const ratio = computeRatioFromJiPitch(jiPitch)

    const apotomeSlope = computeApotomeSlope(jiPitch)
    const cents = computeCentsFromPitch(jiPitch)

    const twoThreeFreeClass = compute23FreeClass(jiPitch)
    const twoThreeFreeClassAnalysis = analyze23FreeClass(twoThreeFreeClass)

    const aas = computeAas(jiPitch)
    const ate = computeAte(jiPitch)

    return {
        ...jiPitch,
        monzo,
        ratio,
        cents,
        twoThreeFreeClassAnalysis,
        apotomeSlope,
        aas,
        ate,
    }
}

export {
    analyzeJiPitch,
}
