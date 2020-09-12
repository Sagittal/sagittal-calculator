import { Abs, Cents, Copfr, Exponent, Integer, Max, Min, ObjectKey, Prime, Sopfr } from "../../../general"
import { APOTOME_CENTS } from "../../constants"
import { ApotomeSlope, N2D3P9 } from "../evaluation"

// used for both find-commas and analyze-ji-pitch
const DEFAULT_MIN_CENTS = 0 as Min<Cents>
const DEFAULT_MAX_CENTS = APOTOME_CENTS / 2 as Max<Cents>
const DEFAULT_MAX_ABSOLUTE_3_EXPONENT = 15 as Max<Abs<Integer & Exponent<Prime>>>
const DEFAULT_MAX_ABSOLUTE_APOTOME_SLOPE = 14 as Max<Abs<ApotomeSlope>>
const DEFAULT_MAX_N2D3P9 = 5000 as Max<N2D3P9>
const DEFAULT_JI_PITCH_SCRIPT_GROUP_MAX_N2D3P9 = 307 as Max<N2D3P9>
const DEFAULT_SORT_KEY = "n2d3p9" as ObjectKey

// only used for find-commas
const DEFAULT_MAX_TWO_THREE_FREE_SOPFR = 61 as Max<Sopfr<5>> // seems to be able to go as high as 127 without crashing
const DEFAULT_MAX_TWO_THREE_FREE_COPFR = 555 as Max<Copfr<5>> // A silly number, unlikely to come close
const DEFAULT_MAX_PRIME_LIMIT = 47 as Max<Max<Prime>> // can be set as high as sopfr; no sense going beyond it

export {
    DEFAULT_MIN_CENTS,
    DEFAULT_MAX_CENTS,
    DEFAULT_MAX_ABSOLUTE_APOTOME_SLOPE,
    DEFAULT_JI_PITCH_SCRIPT_GROUP_MAX_N2D3P9,
    DEFAULT_MAX_ABSOLUTE_3_EXPONENT,
    DEFAULT_SORT_KEY,
    DEFAULT_MAX_TWO_THREE_FREE_COPFR,
    DEFAULT_MAX_TWO_THREE_FREE_SOPFR,
    DEFAULT_MAX_PRIME_LIMIT,
    DEFAULT_MAX_N2D3P9,
}
