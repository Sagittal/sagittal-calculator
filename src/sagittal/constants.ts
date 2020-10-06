import { Comma, sqrtPitch, THREE_PRIME_INDEX } from "../general"

const APOTOME = { monzo: [-11, 7] } as Comma // 2187/2048; 113.68500605771192¢

const HALF_APOTOME = sqrtPitch(APOTOME)

const APOTOME_3_EXPONENT = APOTOME.monzo![ THREE_PRIME_INDEX ]

export {
    APOTOME,
    APOTOME_3_EXPONENT,
    HALF_APOTOME,
}
