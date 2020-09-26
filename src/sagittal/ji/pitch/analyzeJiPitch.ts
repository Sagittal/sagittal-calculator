import {
    compute23FreeClass,
    computeCentsFromPitch,
    computeDecimalFromNum,
    computeMonzoFromRationalNum,
    computeRatioFromRationalNum,
    Num,
    RationalNum,
} from "../../../general"
import { analyze23FreeClass } from "../twoThreeFreeClass"
import { computeAas } from "./aas"
import { computeApotomeSlope } from "./apotomeSlope"
import { computeAte } from "./ate"
import { JiPitchAnalysis } from "./types"

const analyzeJiPitch = (jiPitch: RationalNum): JiPitchAnalysis => {
    const monzo = computeMonzoFromRationalNum(jiPitch)
    const ratio = computeRatioFromRationalNum(jiPitch)
    const decimal = computeDecimalFromNum(jiPitch as Num)

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
        decimal,
        twoThreeFreeClassAnalysis,
        apotomeSlope,
        aas,
        ate,
    }
}

export {
    analyzeJiPitch,
}
