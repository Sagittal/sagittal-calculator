import { Index, TwoThreeFreeClass } from "../../../general"

type Antivotes = number & { _AntivotesBrand: boolean }

interface Unpopularity {
    antivotes: Antivotes,
    twoThreeFreeClass: TwoThreeFreeClass,
    index: Index<Unpopularity>,
}

enum Parameter {
    // coefficient used for submetric
    WEIGHT_AS_COEFFICIENT = "weightAsCoefficient",
    // logarithm base used for submetric
    WEIGHT_AS_LOGARITHM_BASE = "weightAsLogarithmBase",
    // power exponent used for submetric
    WEIGHT_AS_POWER_EXPONENT = "weightAsPowerExponent",
    // power base used for submetric
    WEIGHT_AS_POWER_BASE = "weightAsPowerBase",
    // coefficient used for d
    K_AS_COEFFICIENT = "kAsCoefficient",
    // logarithm base used for d
    K_AS_LOGARITHM_BASE = "kAsLogarithmBase",
    // power exponent used for d
    K_AS_POWER_EXPONENT = "kAsPowerExponent",
    // power base used for d
    K_AS_POWER_BASE = "kAsPowerBase",
    // coefficient used for n
    J_AS_COEFFICIENT = "jAsCoefficient",
    // logarithm base used for n
    J_AS_LOGARITHM_BASE = "jAsLogarithmBase",
    // power exponent used for n
    J_AS_POWER_EXPONENT = "jAsPowerExponent",
    // power base used for n
    J_AS_POWER_BASE = "jAsPowerBase",
    // coefficient used for prime
    A_AS_COEFFICIENT = "aAsCoefficient",
    // logarithm base used for prime
    A_AS_LOGARITHM_BASE = "aAsLogarithmBase",
    // power exponent used for prime
    A_AS_POWER_EXPONENT = "aAsPowerExponent",
    // power base used for prime
    A_AS_POWER_BASE = "aAsPowerBase",
    // prime constant (applied after applying exponent or base)
    W = "w",
    // prime constant (applied after applying exponent or base), but only applied to d and overriding w if format
    B = "b",
    // prime constant (applied before applying exponent or base)
    X = "x",
    // prime constant (applied before applying exponent or base), but only applied to d and overriding x if format
    U = "u",
    // prime exponent exponent
    Y = "y",
    // prime exponent exponent, but only applied to d and overriding y if format
    V = "v",
    // reorient the ratio to use as its numerator the greater of the two results (the numinator)
    // of calling the submetric on the original ratio's numerator and denominator
    USE_NUMINATOR = "useNuminator",
    // Dave's trick where 5's get a half-count
    MODIFIED_COUNT = "modifiedCount",
    // use the prime index function instead of using the primes directly
    USE_PRIME_INDEX = "usePrimeIndex",
    // send the prime exponent to 1 if abs is >0 and 0 if 0
    WITHOUT_REPETITION = "withoutRepetition",
    // operation to do on the monzo - sum (one of sum, count, or max must be provided)
    SUM = "sum",
    // operation to do on the monzo - count (one of sum, count, or max must be provided)
    COUNT = "count",
    // operation to do on the monzo - max (one of sum, count, or max must be provided)
    MAX = "max",
}

type Submetric = Partial<{
    [ Parameter.WEIGHT_AS_COEFFICIENT ]: ParameterValue,
    [ Parameter.WEIGHT_AS_LOGARITHM_BASE ]: ParameterValue,
    [ Parameter.WEIGHT_AS_POWER_EXPONENT ]: ParameterValue,
    [ Parameter.WEIGHT_AS_POWER_BASE ]: ParameterValue,
    [ Parameter.K_AS_COEFFICIENT ]: ParameterValue,
    [ Parameter.K_AS_LOGARITHM_BASE ]: ParameterValue,
    [ Parameter.K_AS_POWER_EXPONENT ]: ParameterValue,
    [ Parameter.K_AS_POWER_BASE ]: ParameterValue,
    [ Parameter.J_AS_COEFFICIENT ]: ParameterValue,
    [ Parameter.J_AS_LOGARITHM_BASE ]: ParameterValue,
    [ Parameter.J_AS_POWER_EXPONENT ]: ParameterValue,
    [ Parameter.J_AS_POWER_BASE ]: ParameterValue,
    [ Parameter.A_AS_COEFFICIENT ]: ParameterValue,
    [ Parameter.A_AS_LOGARITHM_BASE ]: ParameterValue,
    [ Parameter.A_AS_POWER_EXPONENT ]: ParameterValue,
    [ Parameter.A_AS_POWER_BASE ]: ParameterValue,
    [ Parameter.W ]: ParameterValue,
    [ Parameter.B ]: ParameterValue,
    [ Parameter.X ]: ParameterValue,
    [ Parameter.U ]: ParameterValue,
    [ Parameter.Y ]: ParameterValue,
    [ Parameter.V ]: ParameterValue,
    [ Parameter.USE_NUMINATOR ]: boolean,
    [ Parameter.MODIFIED_COUNT ]: boolean,
    [ Parameter.USE_PRIME_INDEX ]: boolean,
    [ Parameter.WITHOUT_REPETITION ]: boolean,
    [ Parameter.SUM ]: boolean,
    [ Parameter.COUNT ]: boolean,
    [ Parameter.MAX ]: boolean,
}>

type ParameterValue = number & { _ParameterValueBrand: boolean }

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
