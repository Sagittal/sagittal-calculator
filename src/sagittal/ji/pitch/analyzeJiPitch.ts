import {
    compute23FreeClass,
    computeCentsFromPitch,
    computeDecimalFromNum,
    computeRationalMonzoFromRationalNum,
    computeRationalQuotientFromRationalNum,
    Num,
    RationalNum,
} from "../../../general"
import { analyze23FreeClass } from "../twoThreeFreeClass"
import { computeAas } from "./aas"
import { computeApotomeSlope } from "./apotomeSlope"
import { computeAte } from "./ate"
import { JiPitchAnalysis } from "./types"

const analyzeJiPitch = (jiPitch: RationalNum): JiPitchAnalysis => {
    const monzo = computeRationalMonzoFromRationalNum(jiPitch)
    const quotient = computeRationalQuotientFromRationalNum(jiPitch)
    const decimal = computeDecimalFromNum(jiPitch)

    const apotomeSlope = computeApotomeSlope(jiPitch)
    const cents = computeCentsFromPitch(jiPitch)

    const twoThreeFreeClass = compute23FreeClass(jiPitch)
    const twoThreeFreeClassAnalysis = analyze23FreeClass(twoThreeFreeClass)

    const aas = computeAas(jiPitch)
    const ate = computeAte(jiPitch)

    return {
        ...jiPitch,
        monzo,
        quotient,
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
