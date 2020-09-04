import { Abs, Cents, Copfr, Exponent, Filename, Max, Min, ObjectKey, Prime, Sopfr } from "../../general"
import { ApotomeSlope, MAX_SINGLE_SHAFT_CENTS, N2D3P9 } from "../../sagittal"

const PITCH_SCRIPT_GROUP = "pitch" as Filename

// used for both find-commas and analyze-rational-pitch
const DEFAULT_MIN_CENTS = 0 as Min<Cents>
const DEFAULT_MAX_CENTS = MAX_SINGLE_SHAFT_CENTS
const DEFAULT_MAX_ABSOLUTE_THREE_EXPONENT = 15 as Max<Abs<Exponent<Prime>>>
const DEFAULT_MAX_ABSOLUTE_APOTOME_SLOPE = 14 as Max<Abs<ApotomeSlope>>
const DEFAULT_PITCH_SCRIPT_GROUP_MAX_N2D3P9 = 307 as Max<N2D3P9>
const DEFAULT_SORT_KEY = "n2d3p9" as ObjectKey

// only used for find-commas
const DEFAULT_MAX_FIVE_ROUGH_SOPFR = 61 as Max<Sopfr<5>> // seems to be able to go as high as 127 without crashing
const DEFAULT_MAX_FIVE_ROUGH_COPFR = 555 as Max<Copfr<5>> // A silly number, unlikely to come close
const DEFAULT_MAX_PRIME_LIMIT = 47 as Max<Max<Exponent<Prime>>> // can be set as high as sopfr; no sense going beyond it

export {
    PITCH_SCRIPT_GROUP,
    DEFAULT_MIN_CENTS,
    DEFAULT_MAX_CENTS,
    DEFAULT_MAX_ABSOLUTE_APOTOME_SLOPE,
    DEFAULT_PITCH_SCRIPT_GROUP_MAX_N2D3P9,
    DEFAULT_MAX_ABSOLUTE_THREE_EXPONENT,
    DEFAULT_SORT_KEY,
    DEFAULT_MAX_FIVE_ROUGH_COPFR,
    DEFAULT_MAX_FIVE_ROUGH_SOPFR,
    DEFAULT_MAX_PRIME_LIMIT,
}
