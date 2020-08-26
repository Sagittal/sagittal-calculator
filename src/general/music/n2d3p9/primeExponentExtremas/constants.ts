import { Exponent, Max, Numerator, Prime } from "../../../math"
import { Extrema } from "../../../types"

const INITIAL_MAX_NUMERATOR_PRIME_EXPONENTS_FOR_TWO_AND_THREE = [0, 0] as Array<Max<Exponent<Prime<Numerator>>>>

const EMPTY_PRIME_EXPONENT_EXTREMA = [0, 0] as Extrema<Exponent<Prime>>

const INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE = [
    EMPTY_PRIME_EXPONENT_EXTREMA,
    EMPTY_PRIME_EXPONENT_EXTREMA
] as Array<Extrema<Exponent<Prime>>>

export {
    INITIAL_MAX_NUMERATOR_PRIME_EXPONENTS_FOR_TWO_AND_THREE,
    EMPTY_PRIME_EXPONENT_EXTREMA,
    INITIAL_PRIME_EXPONENT_EXTREMAS_FOR_TWO_AND_THREE,
}
