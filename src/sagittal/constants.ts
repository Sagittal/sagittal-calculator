import { Comma, DecimalNotDefaultingToPotentiallyIrrational, Monzo, Pitch, Ratio, THREE_PRIME_INDEX } from "../general"

const APOTOME: Comma = {
    monzo: [-11, 7] as Monzo,
    ratio: [2187, 2048] as Ratio,
    decimal: 2187 / 2048 as DecimalNotDefaultingToPotentiallyIrrational,    // 113.68500605771192¢
} as Comma

const HALF_APOTOME: Pitch = {
    monzo: [-5.5, 3.5] as Monzo,
    // TODO: HALF-PITCH HELPER
    //  could be cool to have a half-pitch helper or maybe just general multiply or divide
    //  which would adjust monzo, ratio, cents, number, etc. accordingly
    //  it might spare me the pain of thinking I could just divide decimals by 2 instead of taking the sqrt...
    //  so find all they places where you are doing that and update them
}

const APOTOME_DECIMAL: DecimalNotDefaultingToPotentiallyIrrational = APOTOME.decimal!

const APOTOME_3_EXPONENT = APOTOME.monzo![ THREE_PRIME_INDEX ]

export {
    APOTOME,
    APOTOME_3_EXPONENT,
    HALF_APOTOME,
    APOTOME_DECIMAL,
}
