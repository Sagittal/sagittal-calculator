import {Decimal, Exponent, Extrema, Prime} from "@sagittal/general"

const EMPTY_PRIME_EXPONENT_EXTREMA = [0, 0] as Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>

const INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE = [
    EMPTY_PRIME_EXPONENT_EXTREMA,
    EMPTY_PRIME_EXPONENT_EXTREMA,
] as Array<Extrema<{of: Decimal<{integer: true}> & Exponent<Prime>}>>

export {
    EMPTY_PRIME_EXPONENT_EXTREMA,
    INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE,
}
