import {Monzo} from "../../../general"
import {
    DEFAULT_LOWER_BOUND,
    DEFAULT_MAX_2_3_FREE_COPFR,
    DEFAULT_MAX_2_3_FREE_SOPFR,
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_N2D3P9,
    DEFAULT_MAX_PRIME_LIMIT,
    DEFAULT_UPPER_BOUND,
} from "../../../sagittal"
import {FindCommasSettings} from "./types"

const DEFAULT_FIND_COMMAS_SETTINGS: FindCommasSettings = {
    max23FreeSopfr: DEFAULT_MAX_2_3_FREE_SOPFR,
    max23FreeCopfr: DEFAULT_MAX_2_3_FREE_COPFR,
    maxPrimeLimit: DEFAULT_MAX_PRIME_LIMIT,
    maxN2D3P9: DEFAULT_MAX_N2D3P9,
    lowerBound: DEFAULT_LOWER_BOUND,
    upperBound: DEFAULT_UPPER_BOUND,
    maxAas: DEFAULT_MAX_AAS,
    maxAte: DEFAULT_MAX_ATE,
}

const TWO_3_FREE_MONZO_BASE = [0, 0] as Monzo<{rational: true, rough: 5}>

export {
    DEFAULT_FIND_COMMAS_SETTINGS,
    TWO_3_FREE_MONZO_BASE,
}
