import { Cents } from "./types"

const CENTS_PER_OCTAVE: Cents = 1200 as Cents

const APOTOME: Cents = Math.log2(2187 / 2048) * 1200 as Cents  // 113.68500605771192

export {
    CENTS_PER_OCTAVE,
    APOTOME,
}
