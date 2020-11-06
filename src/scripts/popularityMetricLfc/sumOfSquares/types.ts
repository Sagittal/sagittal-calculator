import {Index, Parameter, Score, Two3FreeClass} from "../../../general"

interface LfcUnpopularityEstimate {
    antivotes: Score<LfcUnpopularityEstimate>,
    two3FreeClass: Two3FreeClass,
    index: Index<LfcUnpopularityEstimate>,
}

enum PopularityParameterId {
    // Coefficient used for submetric
    WEIGHT_AS_COEFFICIENT = "weightAsCoefficient",
    // Logarithm base used for submetric
    WEIGHT_AS_LOGARITHM_BASE = "weightAsLogarithmBase",
    // Power exponent used for submetric
    WEIGHT_AS_POWER_EXPONENT = "weightAsPowerExponent",
    // Power base used for submetric
    WEIGHT_AS_POWER_BASE = "weightAsPowerBase",
    // Coefficient used for d
    K_AS_COEFFICIENT = "kAsCoefficient",
    // Logarithm base used for d
    K_AS_LOGARITHM_BASE = "kAsLogarithmBase",
    // Power exponent used for d
    K_AS_POWER_EXPONENT = "kAsPowerExponent",
    // Power base used for d
    K_AS_POWER_BASE = "kAsPowerBase",
    // Coefficient used for n
    J_AS_COEFFICIENT = "jAsCoefficient",
    // Logarithm base used for n
    J_AS_LOGARITHM_BASE = "jAsLogarithmBase",
    // Power exponent used for n
    J_AS_POWER_EXPONENT = "jAsPowerExponent",
    // Power base used for n
    J_AS_POWER_BASE = "jAsPowerBase",
    // Coefficient used for prime
    A_AS_COEFFICIENT = "aAsCoefficient",
    // Logarithm base used for prime
    A_AS_LOGARITHM_BASE = "aAsLogarithmBase",
    // Power exponent used for prime
    A_AS_POWER_EXPONENT = "aAsPowerExponent",
    // Power base used for prime
    A_AS_POWER_BASE = "aAsPowerBase",
    // Prime constant (applied after applying exponent or base)
    W = "w",
    // Prime constant (applied after applying exponent or base), but only applied to d and overriding w if format
    B = "b",
    // Prime constant (applied before applying exponent or base)
    X = "x",
    // Prime constant (applied before applying exponent or base), but only applied to d and overriding x if format
    U = "u",
    // Prime exponent exponent
    Y = "y",
    // Prime exponent exponent, but only applied to d and overriding y if format
    V = "v",
    // Reorient the 2,3-free class to use as its numerator the greater of the two results (the numinator)
    // Of calling the submetric on the original 2,3-free class's numerator and denominator
    USE_NUMINATOR = "useNuminator",
    // Dave's trick where 5's get a half-count
    MODIFIED_COUNT = "modifiedCount",
    // Use the prime index function instead of using the primes directly
    USE_PRIME_INDEX = "usePrimeIndex",
    // Send the prime exponent to 1 if abs is >0 and 0 if 0
    WITHOUT_REPETITION = "withoutRepetition",
    // Operation to do on the monzo - sum (one of sum, count, or max must be provided)
    SUM = "sum",
    // Operation to do on the monzo - count (one of sum, count, or max must be provided)
    COUNT = "count",
    // Operation to do on the monzo - max (one of sum, count, or max must be provided)
    MAX = "max",
}

type Submetric = Partial<{
    [PopularityParameterId.WEIGHT_AS_COEFFICIENT]: Parameter,
    [PopularityParameterId.WEIGHT_AS_LOGARITHM_BASE]: Parameter,
    [PopularityParameterId.WEIGHT_AS_POWER_EXPONENT]: Parameter,
    [PopularityParameterId.WEIGHT_AS_POWER_BASE]: Parameter,
    [PopularityParameterId.K_AS_COEFFICIENT]: Parameter,
    [PopularityParameterId.K_AS_LOGARITHM_BASE]: Parameter,
    [PopularityParameterId.K_AS_POWER_EXPONENT]: Parameter,
    [PopularityParameterId.K_AS_POWER_BASE]: Parameter,
    [PopularityParameterId.J_AS_COEFFICIENT]: Parameter,
    [PopularityParameterId.J_AS_LOGARITHM_BASE]: Parameter,
    [PopularityParameterId.J_AS_POWER_EXPONENT]: Parameter,
    [PopularityParameterId.J_AS_POWER_BASE]: Parameter,
    [PopularityParameterId.A_AS_COEFFICIENT]: Parameter,
    [PopularityParameterId.A_AS_LOGARITHM_BASE]: Parameter,
    [PopularityParameterId.A_AS_POWER_EXPONENT]: Parameter,
    [PopularityParameterId.A_AS_POWER_BASE]: Parameter,
    [PopularityParameterId.W]: Parameter,
    [PopularityParameterId.B]: Parameter,
    [PopularityParameterId.X]: Parameter,
    [PopularityParameterId.U]: Parameter,
    [PopularityParameterId.Y]: Parameter,
    [PopularityParameterId.V]: Parameter,
    [PopularityParameterId.USE_NUMINATOR]: boolean,
    [PopularityParameterId.MODIFIED_COUNT]: boolean,
    [PopularityParameterId.USE_PRIME_INDEX]: boolean,
    [PopularityParameterId.WITHOUT_REPETITION]: boolean,
    [PopularityParameterId.SUM]: boolean,
    [PopularityParameterId.COUNT]: boolean,
    [PopularityParameterId.MAX]: boolean,
}>

type WeightedAntivotesOptions = Partial<{
    logarithmBase: Parameter,
    powerExponent: Parameter
    powerBase: Parameter,
    coefficient: Parameter,
}>

export {
    LfcUnpopularityEstimate,
    PopularityParameterId,
    Submetric,
    WeightedAntivotesOptions,
}
