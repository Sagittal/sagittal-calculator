import {compute23FreeClass, log, pow, Scamon} from "../../../../general"
import {COMPLEXITY_EXPANDING_AND_COMPRESSING_BASE, LPE_B, LPE_S_THING, LPE_T_THING} from "./constants"
import {LPE} from "./types"
import {computeN2D3P9} from "./unpopularity"
import {computeAas, computeAte} from "./uselessness"

const computeLpe = (jiPitch: Scamon<{rational: true}>): LPE => {
    const n2d3p9 = computeN2D3P9(compute23FreeClass(jiPitch))
    const aas = computeAas(jiPitch)
    const ate = computeAte(jiPitch)

    return log(n2d3p9, COMPLEXITY_EXPANDING_AND_COMPRESSING_BASE)
    + pow(aas / LPE_S_THING, LPE_B)
    + pow(COMPLEXITY_EXPANDING_AND_COMPRESSING_BASE, ate - LPE_T_THING) as LPE
}

export {
    computeLpe,
}
