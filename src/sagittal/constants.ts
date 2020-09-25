import { Cents, Comma, Monzo, Pitch, Ratio, THREE_PRIME_INDEX } from "../general"

const APOTOME: Comma = {
    monzo: [-11, 7] as Monzo,
    ratio: [2187, 2048] as Ratio,
    cents: Math.log2(2187 / 2048) * 1200 as Cents, // 113.68500605771192¢
} as Comma

const HALF_APOTOME: Pitch = {
    monzo: [-5.5, 3.5] as Monzo,
    // TODO: could be cool to have a half-pitch helper or maybe just general multiply or divide
    //  which would adjust monzo, ratio, cents, number, etc. accordingly
    //  it might spare me the pain of thinking I could just divide decimals by 2 instead of taking the sqrt...
}

const APOTOME_CENTS = APOTOME.cents!

const APOTOME_3_EXPONENT = APOTOME.monzo![ THREE_PRIME_INDEX ]

export {
    APOTOME,
    APOTOME_3_EXPONENT,
    HALF_APOTOME,
    APOTOME_CENTS,
}
