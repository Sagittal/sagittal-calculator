import { Cents, Copfr, Max, Min, Monzo } from "../../general"
import {
    DEFAULT_JI_PITCH_SCRIPT_GROUP_MAX_N2D3P9,
    DEFAULT_MAX_AAS,
    DEFAULT_MAX_ATE,
    DEFAULT_MAX_CENTS,
    DEFAULT_MIN_CENTS,
    DEFAULT_SORT_KEY,
    N2D3P9,
    TINA,
    Tina,
} from "../../sagittal"
import { JiPitchScriptGroupSettings } from "./types"

const INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS: JiPitchScriptGroupSettings = {
    minCents: DEFAULT_MIN_CENTS,
    maxCents: DEFAULT_MAX_CENTS,
    maxAte: DEFAULT_MAX_ATE,
    maxAas: DEFAULT_MAX_AAS,
    maxN2D3P9: DEFAULT_JI_PITCH_SCRIPT_GROUP_MAX_N2D3P9,
    sortKey: DEFAULT_SORT_KEY,
    commaNameOptions: {},
}

const TWO_THREE_FREE_MONZO_BASE = [0, 0] as Monzo<{ rough: 5 }>

const LIMITLESS_N2D3P9 = Infinity as Max<N2D3P9>
const LIMITLESS_2_3_FREE_COPFR = Infinity as Max<Copfr<{ rough: 5 }>>

const TINAS_TO_CHECK: Tina[] = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5] as Tina[]
const TINA_COMMAS_PLUS_MINUS_RANGE = 0.25

const TINA_COMMAS_MIN_CENTS =
    (TINAS_TO_CHECK[ 0 ] - TINA_COMMAS_PLUS_MINUS_RANGE) * TINA as Min<Cents>
const TINA_COMMAS_MAX_CENTS =
    (TINAS_TO_CHECK[ TINAS_TO_CHECK.length - 1 ] + TINA_COMMAS_PLUS_MINUS_RANGE) * TINA as Max<Cents>

const MAX_TINA_SIZES: Cents[] =
    TINAS_TO_CHECK.map((tina: Tina): Cents => TINA * (tina + TINA_COMMAS_PLUS_MINUS_RANGE) as Cents)

export {
    INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS,
    TWO_THREE_FREE_MONZO_BASE,
    LIMITLESS_N2D3P9,
    LIMITLESS_2_3_FREE_COPFR,
    TINAS_TO_CHECK,
    TINA_COMMAS_MIN_CENTS,
    TINA_COMMAS_MAX_CENTS,
    TINA_COMMAS_PLUS_MINUS_RANGE,
    MAX_TINA_SIZES,
}
