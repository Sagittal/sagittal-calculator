import { Comma, computeRealSqrt, RationalMonzo, RationalQuotient, Real, RealDecimal, THREE_PRIME_INDEX } from "../general"

const APOTOME: Comma = {
    monzo: [-11, 7] as RationalMonzo,
    quotient: [2187, 2048] as RationalQuotient,
    decimal: 2187 / 2048 as RealDecimal,    // 113.68500605771192¢
} as Comma

const HALF_APOTOME: Real = computeRealSqrt(APOTOME)

const APOTOME_DECIMAL: RealDecimal = APOTOME.decimal!

const APOTOME_3_EXPONENT = APOTOME.monzo![ THREE_PRIME_INDEX ]

export {
    APOTOME,
    APOTOME_3_EXPONENT,
    HALF_APOTOME,
    APOTOME_DECIMAL,
}
