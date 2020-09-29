import { Comma, computeNumSqrt, Decimal, Num, RationalMonzo, RationalQuotient, THREE_PRIME_INDEX } from "../general"

const APOTOME: Comma = {
    monzo: [-11, 7] as RationalMonzo,
    quotient: [2187, 2048] as RationalQuotient,
    decimal: 2187 / 2048 as Decimal,    // 113.68500605771192¢
} as Comma

const HALF_APOTOME: Num = computeNumSqrt(APOTOME)

const APOTOME_DECIMAL: Decimal = APOTOME.decimal!

const APOTOME_3_EXPONENT = APOTOME.monzo![ THREE_PRIME_INDEX ]

export {
    APOTOME,
    APOTOME_3_EXPONENT,
    HALF_APOTOME,
    APOTOME_DECIMAL,
}
