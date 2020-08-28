import { Monzo, Prime, Ratio, Sopfr, THREE_PRIME_INDEX } from "../math"
import { Name } from "../types"
import { N2D3P9 } from "./n2d3p9"
import { ApotomeSlope, Cents, Comma } from "./types"

const CENTS_PER_OCTAVE: Cents = 1200 as Cents

const APOTOME: Comma = {
    apotomeSlope: 0 as ApotomeSlope,
    cents: 113.68500605771192 as Cents,
    name: "apotome" as Name<Comma>,
    fiveRoughSopfr: 0 as Sopfr<5>,
    limit: 3 as Prime,
    monzo: [ -11, 7 ] as Monzo,
    ratio: [ 2187, 2048 ] as Ratio,
    n2d3p9: 1 as N2D3P9,
}

const APOTOME_CENTS: Cents = APOTOME.cents                      // Math.log2(2187 / 2048) * 1200 = 113.68500605771192

const APOTOME_THREE_EXPONENT = APOTOME.monzo[THREE_PRIME_INDEX] // 7

export {
    APOTOME_THREE_EXPONENT,
    CENTS_PER_OCTAVE,
    APOTOME_CENTS,
    APOTOME,
}
