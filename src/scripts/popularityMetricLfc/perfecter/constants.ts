import {PopularityParameterId} from "../sumOfSquares"

const PARAMETER_DYNAMISMS: Record<PopularityParameterId, boolean> = {
    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: true,
    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: false,
    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: true,
    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: false,
    [PopularityParameterId.K_AS_COEFFICIENT]: true,
    [PopularityParameterId.K_AS_LOGARITHM_BASE]: false,
    [PopularityParameterId.K_AS_POWER_EXPONENT]: true,
    [PopularityParameterId.K_AS_POWER_BASE]: false,
    [PopularityParameterId.J_AS_COEFFICIENT]: true,
    [PopularityParameterId.J_AS_LOGARITHM_BASE]: false,
    [PopularityParameterId.J_AS_POWER_EXPONENT]: true,
    [PopularityParameterId.J_AS_POWER_BASE]: false,
    [PopularityParameterId.A_AS_COEFFICIENT]: true,
    [PopularityParameterId.A_AS_LOGARITHM_BASE]: false,
    [PopularityParameterId.A_AS_POWER_EXPONENT]: true,
    [PopularityParameterId.A_AS_POWER_BASE]: false,
    [PopularityParameterId.W]: true,
    [PopularityParameterId.B]: true,
    [PopularityParameterId.X]: true,
    [PopularityParameterId.U]: true,
    [PopularityParameterId.Y]: true,
    [PopularityParameterId.V]: true,
    [PopularityParameterId.USE_NUMINATOR]: false,
    [PopularityParameterId.MODIFIED_COUNT]: false,
    [PopularityParameterId.USE_PRIME_INDEX]: false,
    [PopularityParameterId.WITHOUT_REPETITION]: false,
    [PopularityParameterId.SUM]: false,
    [PopularityParameterId.COUNT]: false,
    [PopularityParameterId.MAX]: false,
}

export {
    PARAMETER_DYNAMISMS,
}
