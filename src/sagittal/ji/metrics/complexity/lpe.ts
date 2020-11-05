import {Abs, Decimal, Exponent, log, pow, Prime} from "../../../../general"
import {N2D3P9} from "../unpopularity"
import {ApotomeSlope} from "../uselessness"
import {COMPLEXITY_EXPANDING_AND_COMPRESSING_BASE, LPE_B, LPE_S_THING, LPE_T_THING} from "./constants"
import {Complexity} from "./types"

const lpe = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
): Complexity =>
    log(n2d3p9, COMPLEXITY_EXPANDING_AND_COMPRESSING_BASE)
    + pow(aas / LPE_S_THING, LPE_B)
    + pow(COMPLEXITY_EXPANDING_AND_COMPRESSING_BASE, ate - LPE_T_THING) as Complexity

export {
    lpe,
}