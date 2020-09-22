import { Abs, Cents, Copfr, Exponent, Integer, Max, Min, Prime, Sopfr } from "../../../../general"
import { APOTOME_CENTS } from "../../../constants"
import { ApotomeSlope } from "../../pitch"
import { N2D3P9 } from "../../twoThreeFreeClass"

const DEFAULT_MIN_CENTS = 0 as Min<Cents>
const DEFAULT_MAX_CENTS = APOTOME_CENTS / 2 as Max<Cents>                           // 56.8425030289¢
const DEFAULT_MAX_ATE = 15 as Max<Abs<Integer & Exponent<3 & Prime>>>
const DEFAULT_MAX_AAS = 14 as Max<Abs<ApotomeSlope>>
const DEFAULT_MAX_N2D3P9 = 307 as Max<N2D3P9>
const DEFAULT_MAX_2_3_FREE_SOPFR = 61 as Max<Sopfr<{ rough: 5 }>> // can go as high as 127 without crashing
const DEFAULT_MAX_2_3_FREE_COPFR = 555 as Max<Copfr<{ rough: 5 }>> // A silly number, unlikely to come close
const DEFAULT_MAX_PRIME_LIMIT = 47 as Max<Max<Prime>> // can be set as high as SoPFR; no sense going beyond it

export {
    DEFAULT_MIN_CENTS,
    DEFAULT_MAX_CENTS,
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_2_3_FREE_COPFR,
    DEFAULT_MAX_2_3_FREE_SOPFR,
    DEFAULT_MAX_PRIME_LIMIT,
}