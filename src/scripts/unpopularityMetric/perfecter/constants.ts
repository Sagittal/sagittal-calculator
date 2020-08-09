import { Parameter } from "../sumOfSquares"

const PARAMETER_DYNAMISMS: Record<Parameter, boolean> = {
    [ Parameter.WEIGHT_AS_COEFFICIENT ]: true,
    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: false,
    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: true,
    [ Parameter.WEIGHT_AS_POWER_BASE ]: false,
    [ Parameter.K_AS_COEFFICIENT ]: true,
    [ Parameter.K_AS_LOGARITHM_BASE ]: false,
    [ Parameter.K_AS_POWER_EXPONENT ]: true,
    [ Parameter.K_AS_POWER_BASE ]: false,
    [ Parameter.J_AS_COEFFICIENT ]: true,
    [ Parameter.J_AS_LOGARITHM_BASE ]: false,
    [ Parameter.J_AS_POWER_EXPONENT ]: true,
    [ Parameter.J_AS_POWER_BASE ]: false,
    [ Parameter.A_AS_COEFFICIENT ]: true,
    [ Parameter.A_AS_LOGARITHM_BASE ]: false,
    [ Parameter.A_AS_POWER_EXPONENT ]: true,
    [ Parameter.A_AS_POWER_BASE ]: false,
    [ Parameter.W ]: true,
    [ Parameter.B ]: true,
    [ Parameter.X ]: true,
    [ Parameter.U ]: true,
    [ Parameter.Y ]: true,
    [ Parameter.V ]: true,
    [ Parameter.USE_NUMINATOR ]: false,
    [ Parameter.MODIFIED_COUNT ]: false,
    [ Parameter.USE_PRIME_INDEX ]: false,
    [ Parameter.WITHOUT_REPETITION ]: false,
    [ Parameter.SUM ]: false,
    [ Parameter.COUNT ]: false,
    [ Parameter.MAX ]: false,
}

export {
    PARAMETER_DYNAMISMS,
}
