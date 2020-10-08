import {
    compute23FreeClass,
    computeCentsFromPitch,
    computeDecimalFromMonzo,
    computeQuotientFromMonzo,
    Pitch,
} from "../../../general"
import { analyze23FreeClass } from "../two3FreeClass"
import { computeAas } from "./aas"
import { computeApotomeSlope } from "./apotomeSlope"
import { computeAte } from "./ate"
import { JiPitchAnalysis } from "./types"

const analyzeJiPitch = (jiPitch: Pitch<{ rational: true }>): JiPitchAnalysis => {
    const monzo = jiPitch.monzo
    const quotient = computeQuotientFromMonzo(monzo)
    const decimal = computeDecimalFromMonzo(monzo)

    const apotomeSlope = computeApotomeSlope(jiPitch)
    const cents = computeCentsFromPitch(jiPitch)

    const two3FreeClass = compute23FreeClass(jiPitch)
    const two3FreeClassAnalysis = analyze23FreeClass(two3FreeClass)

    const aas = computeAas(jiPitch)
    const ate = computeAte(jiPitch)

    return {
        pitch: jiPitch,
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
