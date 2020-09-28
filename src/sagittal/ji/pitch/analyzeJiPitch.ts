import {
    compute23FreeClass,
    computeCentsFromPitch,
    computeDecimalFromNum,
    computeRationalMonzoFromRatio,
    computeRationalQuotientFromRatio,
    Num,
    Ratio,
} from "../../../general"
import { analyze23FreeClass } from "../two3FreeClass"
import { computeAas } from "./aas"
import { computeApotomeSlope } from "./apotomeSlope"
import { computeAte } from "./ate"
import { JiPitchAnalysis } from "./types"

const analyzeJiPitch = (jiPitch: Ratio): JiPitchAnalysis => {
    const monzo = computeRationalMonzoFromRatio(jiPitch)
    const quotient = computeRationalQuotientFromRatio(jiPitch)
    const decimal = computeDecimalFromNum(jiPitch)

    const apotomeSlope = computeApotomeSlope(jiPitch)
    const cents = computeCentsFromPitch(jiPitch)

    const two3FreeClass = compute23FreeClass(jiPitch)
    const two3FreeClassAnalysis = analyze23FreeClass(two3FreeClass)

    const aas = computeAas(jiPitch)
    const ate = computeAte(jiPitch)

    return {
        ...jiPitch,
        monzo,
        quotient,
        cents,
        decimal,
        two3FreeClassAnalysis,
        apotomeSlope,
        aas,
        ate,
    }
}

export {
    analyzeJiPitch,
}
