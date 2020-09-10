import { Cents } from "../general"

const APOTOME_CENTS: Cents = Math.log2(2187 / 2048) * 1200 as Cents // 113.68500605771192

const APOTOME_THREE_EXPONENT = 7

export {
    APOTOME_CENTS,
    APOTOME_THREE_EXPONENT,
}
