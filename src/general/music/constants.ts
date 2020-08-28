import { Exponent, Prime } from "../math"
import { Cents } from "./types"

const CENTS_PER_OCTAVE: Cents = 1200 as Cents

// TODO: this should actually be a Ji interval that you get cents from.
//  that way you could actually grab its 3-exponent off of it in apotomeSlope.ts
const APOTOME: Cents = Math.log2(2187 / 2048) * 1200 as Cents  // 113.68500605771192

const APOTOME_THREE_EXPONENT = 7 as Exponent<Prime>

export {
    APOTOME_THREE_EXPONENT,
    CENTS_PER_OCTAVE,
    APOTOME,
}
