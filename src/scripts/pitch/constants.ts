import { Abs, Cents, Exponent, Filename, Max, Min, ObjectKey, Prime } from "../../general"
import { ApotomeSlope, MAX_SINGLE_SHAFT_CENTS, N2D3P9 } from "../../sagittal"

const PITCH_SCRIPT_GROUP = "pitch" as Filename

const DEFAULT_MIN_CENTS = 0 as Min<Cents>
const DEFAULT_MAX_CENTS = MAX_SINGLE_SHAFT_CENTS
const DEFAULT_MAX_ABSOLUTE_THREE_EXPONENT = 15 as Max<Abs<Exponent<Prime>>>
const DEFAULT_MAX_ABSOLUTE_APOTOME_SLOPE = 14 as Max<Abs<ApotomeSlope>>
const DEFAULT_PITCH_SCRIPT_GROUP_MAX_N2D3P9 = 307 as Max<N2D3P9>
const DEFAULT_SORT_KEY = "n2d3p9" as ObjectKey

export {
    PITCH_SCRIPT_GROUP,
    DEFAULT_MIN_CENTS,
    DEFAULT_MAX_CENTS,
    DEFAULT_MAX_ABSOLUTE_APOTOME_SLOPE,
    DEFAULT_PITCH_SCRIPT_GROUP_MAX_N2D3P9,
    DEFAULT_MAX_ABSOLUTE_THREE_EXPONENT,
    DEFAULT_SORT_KEY,
}
