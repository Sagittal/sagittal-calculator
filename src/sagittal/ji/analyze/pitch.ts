import {
    compute23FreeClass,
    computeCentsFromPitch,
    computeDecimalFromMonzo,
    computeQuotientFromMonzo,
    Scamon,
} from "../../../general"
import {computeAas, computeApotomeSlope, computeAte} from "../badness"
import {analyze23FreeClass} from "./two3FreeClass"
import {JiPitchAnalysis} from "./types"

const analyzeJiPitch = (jiPitch: Scamon<{rational: true}>): JiPitchAnalysis => {
    const monzo = jiPitch.monzo
    const quotient = computeQuotientFromMonzo(monzo)
    const decimal = computeDecimalFromMonzo(monzo)

    const apotomeSlope = computeApotomeSlope(jiPitch)
    const cents = computeCentsFromPitch(jiPitch)

    const two3FreeClass = compute23FreeClass(jiPitch)
    const two3FreeClassAnalysis = analyze23FreeClass(two3FreeClass)

    const aas = computeAas(jiPitch)
    const ate = computeAte(jiPitch)

    // TODO: BADNESS & COMPLEXITY: INCLUSION ON ANALYSES
    //  Include LPE cmplxty and LPEI badness in analyses and reports
    //  Although maybe we should wait until work is totally done on the badness & complexity LFC, in case those
    //  Parameters end up getting slightly tweaked

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
