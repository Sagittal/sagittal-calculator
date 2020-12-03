import {Abs, Copfr, Exclusive, Max, Min, Prime, Scamon, Sopfr, Zone} from "../../../general"
import {HALF_APOTOME} from "../../constants"
import {ApotomeSlope, Ate, MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN} from "../badness"

const DEFAULT_LOWER_BOUND = {monzo: [] as unknown[]} as Min<Scamon>                                //  0.0000000000¢
const DEFAULT_UPPER_BOUND = HALF_APOTOME as Scamon as Max<Scamon>                                  // 56.8425030289¢
const DEFAULT_EXCLUSIVE: Exclusive = false
const DEFAULT_ZONE = {
    extrema: [DEFAULT_LOWER_BOUND, DEFAULT_UPPER_BOUND],
    exclusive: DEFAULT_EXCLUSIVE,
} as Zone
const DEFAULT_MAX_ATE = 20 as Max<Ate>
const DEFAULT_MAX_AAS = 20 as Max<Abs<ApotomeSlope>>
const DEFAULT_MAX_N2D3P9 = MAX_N2D3P9_FOR_WHICH_POSSIBLE_NUMERATORS_ARE_KNOWN
const DEFAULT_MAX_2_3_FREE_SOPFR = 61 as Max<Sopfr<{rough: 5}>> // Can go as high as 127 without crashing
const DEFAULT_MAX_2_3_FREE_COPFR = 555 as Max<Copfr<{rough: 5}>> // A silly number, unlikely to come close
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
    DEFAULT_ZONE,
    DEFAULT_EXCLUSIVE,
}
