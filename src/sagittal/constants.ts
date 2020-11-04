import {APOTOME, halfScamon, THREE_PRIME_INDEX} from "../general"

const HALF_APOTOME = halfScamon(APOTOME)                        // √(2187/2048)         56.8425030289¢

const APOTOME_3_EXPONENT = APOTOME.monzo![THREE_PRIME_INDEX]

export {
    APOTOME_3_EXPONENT,
    HALF_APOTOME,
}
