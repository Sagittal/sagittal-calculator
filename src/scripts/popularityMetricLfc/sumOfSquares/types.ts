import {Index, Two3FreeClass} from "../../../general"

type Antivotes = number & {_AntivotesBrand: boolean}

interface Unpopularity {
    antivotes: Antivotes,
    two3FreeClass: Two3FreeClass,
    index: Index<Unpopularity>,
}

enum Parameter {
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
    [Parameter.WEIGHT_AS_COEFFICIENT]: ParameterValue,
    [Parameter.WEIGHT_AS_LOGARITHM_BASE]: ParameterValue,
    [Parameter.WEIGHT_AS_POWER_EXPONENT]: ParameterValue,
    [Parameter.WEIGHT_AS_POWER_BASE]: ParameterValue,
    [Parameter.K_AS_COEFFICIENT]: ParameterValue,
    [Parameter.K_AS_LOGARITHM_BASE]: ParameterValue,
    [Parameter.K_AS_POWER_EXPONENT]: ParameterValue,
    [Parameter.K_AS_POWER_BASE]: ParameterValue,
    [Parameter.J_AS_COEFFICIENT]: ParameterValue,
    [Parameter.J_AS_LOGARITHM_BASE]: ParameterValue,
    [Parameter.J_AS_POWER_EXPONENT]: ParameterValue,
    [Parameter.J_AS_POWER_BASE]: ParameterValue,
    [Parameter.A_AS_COEFFICIENT]: ParameterValue,
    [Parameter.A_AS_LOGARITHM_BASE]: ParameterValue,
    [Parameter.A_AS_POWER_EXPONENT]: ParameterValue,
    [Parameter.A_AS_POWER_BASE]: ParameterValue,
    [Parameter.W]: ParameterValue,
    [Parameter.B]: ParameterValue,
    [Parameter.X]: ParameterValue,
    [Parameter.U]: ParameterValue,
    [Parameter.Y]: ParameterValue,
    [Parameter.V]: ParameterValue,
    [Parameter.USE_NUMINATOR]: boolean,
    [Parameter.MODIFIED_COUNT]: boolean,
    [Parameter.USE_PRIME_INDEX]: boolean,
    [Parameter.WITHOUT_REPETITION]: boolean,
    [Parameter.SUM]: boolean,
    [Parameter.COUNT]: boolean,
    [Parameter.MAX]: boolean,
}>

type ParameterValue = number & {_ParameterValueBrand: boolean}

type WeightedAntivotesOptions = Partial<{
    logarithmBase: ParameterValue,
    powerExponent: ParameterValue
    powerBase: ParameterValue,
    coefficient: ParameterValue,
}>

export {
    Unpopularity,
    Antivotes,
    Parameter,
    ParameterValue,
    Submetric,
    WeightedAntivotesOptions,
}
