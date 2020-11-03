import {computePatentVal, Ed, Max, OCTAVE_WINDOW, Prime, Val, Window} from "../../../general"

const MEDIUM_ZETA_PEAK_EDO = 217.02470 as Ed<Window<2>>
const HIGH_ZETA_PEAK_EDO = 494.01377 as Ed<Window<2>>
// Const ULTRA_ZETA_PEAK_EDO = 612
const EXTREME_ZETA_PEAK_EDO = 2459.98488 as Ed<Window<2>>
const INSANE_ZETA_PEAK_EDO = 8539.00834 as Ed<Window<2>>

// TODO: 281 has no particular meaning, it was just as high as I had on hand. Please verify none exceed that limit.
const ARBITRARY_PRIME_LIMIT_FOR_ZETA_PEAK_VALS = 281 as Max<Prime>

const MEDIUM_ZETA_PEAK_VAL: Val =
    computePatentVal({
        ed: MEDIUM_ZETA_PEAK_EDO,
        window: OCTAVE_WINDOW,
        primeLimit: ARBITRARY_PRIME_LIMIT_FOR_ZETA_PEAK_VALS,
    })
const HIGH_ZETA_PEAK_VAL: Val =
    computePatentVal({
        ed: HIGH_ZETA_PEAK_EDO,
        window: OCTAVE_WINDOW,
        primeLimit: ARBITRARY_PRIME_LIMIT_FOR_ZETA_PEAK_VALS,
    })
const EXTREME_ZETA_PEAK_VAL: Val =
    computePatentVal({
        ed: EXTREME_ZETA_PEAK_EDO,
        window: OCTAVE_WINDOW,
        primeLimit: ARBITRARY_PRIME_LIMIT_FOR_ZETA_PEAK_VALS,
    })
const INSANE_ZETA_PEAK_VAL: Val =
    computePatentVal({
        ed: INSANE_ZETA_PEAK_EDO,
        window: OCTAVE_WINDOW,
        primeLimit: ARBITRARY_PRIME_LIMIT_FOR_ZETA_PEAK_VALS,
    })

export {
    MEDIUM_ZETA_PEAK_EDO,
    MEDIUM_ZETA_PEAK_VAL,
    HIGH_ZETA_PEAK_EDO,
    HIGH_ZETA_PEAK_VAL,
    EXTREME_ZETA_PEAK_EDO,
    EXTREME_ZETA_PEAK_VAL,
    INSANE_ZETA_PEAK_EDO,
    INSANE_ZETA_PEAK_VAL,
}
