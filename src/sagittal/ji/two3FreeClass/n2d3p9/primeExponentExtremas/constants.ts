import { Exponent, Extrema, IntegerDecimal, Prime } from "../../../../../general"

const EMPTY_PRIME_EXPONENT_EXTREMA = [0, 0] as Extrema<IntegerDecimal & Exponent<Prime>>

const INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE = [
    EMPTY_PRIME_EXPONENT_EXTREMA,
    EMPTY_PRIME_EXPONENT_EXTREMA,
] as Array<Extrema<IntegerDecimal & Exponent<Prime>>>

export {
    EMPTY_PRIME_EXPONENT_EXTREMA,
    INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE,
}
