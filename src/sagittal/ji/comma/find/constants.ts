import {
    Abs,
    Comma,
    computeNumSqrt,
    Copfr,
    Exponent,
    IntegerDecimal,
    Max,
    Min,
    Prime,
    Sopfr,
} from "../../../../general"
import { APOTOME } from "../../../constants"
import { UNISON } from "../../../notations"
import { ApotomeSlope } from "../../pitch"
import { N2D3P9 } from "../../two3FreeClass"

const DEFAULT_LOWER_BOUND = UNISON as Comma as Min<Comma>                         //  0.0000000000¢
const DEFAULT_UPPER_BOUND = computeNumSqrt(APOTOME) as Max<Comma>                 // 56.8425030289¢
const DEFAULT_MAX_ATE = 15 as Max<Abs<IntegerDecimal & Exponent<3 & Prime>>>
const DEFAULT_MAX_AAS = 14 as Max<Abs<ApotomeSlope>>
const DEFAULT_MAX_N2D3P9 = 307 as Max<N2D3P9>
const DEFAULT_MAX_2_3_FREE_SOPFR = 61 as Max<Sopfr<{ rough: 5 }>> // Can go as high as 127 without crashing
const DEFAULT_MAX_2_3_FREE_COPFR = 555 as Max<Copfr<{ rough: 5 }>> // A silly number, unlikely to come close
const DEFAULT_MAX_PRIME_LIMIT = 47 as Max<Max<Prime>> // Can be set as high as SoPFR; no sense going beyond it

export {
    DEFAULT_LOWER_BOUND,
    DEFAULT_UPPER_BOUND,
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_2_3_FREE_COPFR,
    DEFAULT_MAX_2_3_FREE_SOPFR,
    DEFAULT_MAX_PRIME_LIMIT,
}
