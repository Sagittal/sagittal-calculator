import {compute23FreeClass, log, pow, Scamon} from "@sagittal/general"
import {COMPLEXITY_EXPANDING_AND_COMPRESSING_BASE, LPE_B, LPE_S, LPE_T} from "./constants"
import {LPE} from "./types"
import {computeN2D3P9} from "./unpopularity"
import {computeAas, computeAte} from "./unusefulness"

const computeLpe = (jiPitch: Scamon<{rational: true}>): LPE => {
    const n2d3p9 = computeN2D3P9(compute23FreeClass(jiPitch))
    const aas = computeAas(jiPitch)
    const ate = computeAte(jiPitch)

    return log(n2d3p9, COMPLEXITY_EXPANDING_AND_COMPRESSING_BASE)
    + LPE_S * pow(aas, LPE_B)
    + LPE_T * pow(COMPLEXITY_EXPANDING_AND_COMPRESSING_BASE, ate) as LPE
}

export {
    computeLpe,
}
