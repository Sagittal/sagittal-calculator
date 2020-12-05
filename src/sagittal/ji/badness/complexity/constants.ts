import {Base, BASE_2, Exponent, negative, pow, reciprocal} from "@sagittal/general"

const COMPLEXITY_EXPANDING_AND_COMPRESSING_BASE = 2 as Base

const LPE_B = 1.7 as Exponent

const SHARED_S_T_PARAMETER = 9.65

const LPE_S = pow(reciprocal(SHARED_S_T_PARAMETER), LPE_B)
const LPE_T = pow(BASE_2, negative(SHARED_S_T_PARAMETER))

export {
    COMPLEXITY_EXPANDING_AND_COMPRESSING_BASE,
    LPE_B,
    LPE_S,
    LPE_T,
}
