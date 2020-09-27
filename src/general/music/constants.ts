import { Monzo, Ratio, RationalNum } from "../math"
import { Cents } from "./types"

const CENTS_PER_OCTAVE: Cents = 1200 as Cents

const UNISON: RationalNum = {
    monzo: [] as Monzo,
    decimal: 1,
    ratio: [1, 1] as Ratio,
}

export {
    CENTS_PER_OCTAVE,
    UNISON,
}
