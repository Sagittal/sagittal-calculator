import { Cents, computePitchFromCents, Copfr, Max, Min, Scamon } from "../../../general"
import { N2D3P9, TINA, Tina } from "../../../sagittal"

const INFINITE_N2D3P9 = Infinity as Max<N2D3P9>
const INFINITE_2_3_FREE_COPFR = Infinity as Max<Copfr<{ rough: 5 }>>

const TINAS_TO_CHECK: Tina[] = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5] as Tina[]
const TINA_COMMAS_PLUS_MINUS_RANGE = 0.25

const TINA_COMMAS_LOWER_BOUND = computePitchFromCents(
    (TINAS_TO_CHECK[ 0 ] - TINA_COMMAS_PLUS_MINUS_RANGE) * TINA as Cents,
) as Min<Scamon<{ rational: false }>>
const TINA_COMMAS_UPPER_BOUND = computePitchFromCents(
    (TINAS_TO_CHECK[ TINAS_TO_CHECK.length - 1 ] + TINA_COMMAS_PLUS_MINUS_RANGE) * TINA as Cents,
) as Max<Scamon<{ rational: false }>>

const MAX_TINA_SIZES: Cents[] =
    TINAS_TO_CHECK.map((tina: Tina): Cents => TINA * (tina + TINA_COMMAS_PLUS_MINUS_RANGE) as Cents)

export {
    INFINITE_N2D3P9,
    INFINITE_2_3_FREE_COPFR,
    TINAS_TO_CHECK,
    TINA_COMMAS_LOWER_BOUND,
    TINA_COMMAS_UPPER_BOUND,
    TINA_COMMAS_PLUS_MINUS_RANGE,
    MAX_TINA_SIZES,
}
