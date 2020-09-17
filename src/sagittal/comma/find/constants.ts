import { Abs, Cents, Copfr, Exponent, Integer, Max, Min, Prime, Sopfr } from "../../../general"
import { APOTOME_CENTS } from "../../constants"
import { ApotomeSlope, N2D3P9 } from "../evaluation"

const DEFAULT_MIN_CENTS = 0 as Min<Cents>
const DEFAULT_MAX_CENTS = APOTOME_CENTS / 2 as Max<Cents>                           // 56.8425030289¢
const DEFAULT_MAX_ATE = 15 as Max<Abs<3 & Integer & Exponent<Prime>>>
const DEFAULT_MAX_AAS = 14 as Max<Abs<ApotomeSlope>>
const DEFAULT_MAX_N2D3P9 = 307 as Max<N2D3P9>
const DEFAULT_MAX_TWO_THREE_FREE_SOPFR = 61 as Max<Sopfr<{ rough: 5 }>> // can go as high as 127 without crashing
const DEFAULT_MAX_TWO_THREE_FREE_COPFR = 555 as Max<Copfr<{ rough: 5 }>> // A silly number, unlikely to come close
const DEFAULT_MAX_PRIME_LIMIT = 47 as Max<Max<Prime>> // can be set as high as SoPFR; no sense going beyond it

const DEFAULT_FIND_COMMAS_OPTIONS = {
    max23FreeSopfr: DEFAULT_MAX_TWO_THREE_FREE_SOPFR,
    max23FreeCopfr: DEFAULT_MAX_TWO_THREE_FREE_COPFR,
    maxPrimeLimit: DEFAULT_MAX_PRIME_LIMIT,
    maxN2D3P9: DEFAULT_MAX_N2D3P9,
    minCents: DEFAULT_MIN_CENTS,
    maxCents: DEFAULT_MAX_CENTS,
    maxAas: DEFAULT_MAX_AAS,
    maxAte: DEFAULT_MAX_ATE,
}

export {
    DEFAULT_MIN_CENTS,
    DEFAULT_MAX_CENTS,
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_TWO_THREE_FREE_COPFR,
    DEFAULT_MAX_TWO_THREE_FREE_SOPFR,
    DEFAULT_MAX_PRIME_LIMIT,
    DEFAULT_FIND_COMMAS_OPTIONS,
}
