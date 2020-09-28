import { Comma, Decimal, Num, RationalMonzo, RationalQuotient, THREE_PRIME_INDEX } from "../general"

const APOTOME: Comma = {
    monzo: [-11, 7] as RationalMonzo,
    quotient: [2187, 2048] as RationalQuotient,
    decimal: 2187 / 2048 as Decimal,    // 113.68500605771192¢
} as Comma

const HALF_APOTOME: Num = {
    monzo: [-5.5, 3.5] as RationalMonzo,
    // TODO: HALF-PITCH HELPER
    //  Could be cool to have a half-pitch helper or maybe just general multiply or divide
    //  Which would adjust monzo, quotient, cents, number, etc. accordingly
    //  It might spare me the pain of thinking I could just divide decimals by 2 instead of taking the sqrt...
    //  So find all they places where you are doing that and update them
}

const APOTOME_DECIMAL: Decimal = APOTOME.decimal!

const APOTOME_3_EXPONENT = APOTOME.monzo![ THREE_PRIME_INDEX ]

export {
    APOTOME,
    APOTOME_3_EXPONENT,
    HALF_APOTOME,
    APOTOME_DECIMAL,
}
