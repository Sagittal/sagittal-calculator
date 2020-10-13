import { Comma, halfScamon, THREE_PRIME_INDEX } from "../general"

const APOTOME = { monzo: [-11, 7] } as Comma //   2187/2048         113.6850060577¢

const HALF_APOTOME = halfScamon(APOTOME)     // √(2187/2048)         56.8425030289¢

const APOTOME_3_EXPONENT = APOTOME.monzo![ THREE_PRIME_INDEX ]

export {
    APOTOME,
    APOTOME_3_EXPONENT,
    HALF_APOTOME,
}
