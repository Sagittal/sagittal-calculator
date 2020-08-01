import { EnumHash, Resolution, Span } from "../../general"

enum Parameter {
    WEIGHT_AS_COEFFICIENT = "weightAsCoefficient",   // coefficient used for submetric
    WEIGHT_AS_BASE = "weightAsBase",                 // base used for submetric
    WEIGHT_AS_EXPONENT = "weightAsExponent",         // exponent used for submetric
    K_AS_COEFFICIENT = "kAsCoefficient",             // coefficient used for diminuator
    K_AS_BASE = "kAsBase",                           // base used for diminuator
    K_AS_EXPONENT = "kAsExponent",                   // exponent used for diminuator
    J_AS_COEFFICIENT = "jAsCoefficient",             // coefficient used for numinator
    J_AS_BASE = "jAsBase",                           // base used for numinator
    J_AS_EXPONENT = "jAsExponent",                   // exponent used for numinator
    A_AS_COEFFICIENT = "aAsCoefficient",             // coefficient used for prime
    A_AS_BASE = "aAsBase",                           // base used for prime
    A_AS_EXPONENT = "aAsExponent",                   // exponent used for prime
    W = "w",                                         // prime constant (applied after applying exponent or base)
    X = "x",                                         // prime constant (applied before applying exponent or base)
    Y = "y",                                         // prime exponent exponent
    // V = "v",                                         // prime exponent constant (applied before applying exponent, for non-zero terms)
    // T = "t",                                         // prime exponent constant (applied after applying exponent)
    USE_NUMINATOR = "useNuminator",                  // reorient the ratio to use as its numerator the greater of the two results (the numinator) of calling the submetric on the original ratio's numerator and denominator
    MODIFIED_COUNT = "modifiedCount",                // Dave's trick where 5's get a half-resolution
    USE_PRIME_INDEX = "usePrimeIndex",               // use the prime index function instead of using the primes directly
    WITHOUT_REPETITION = "withoutRepetition",        // send the prime exponent to 1 if abs is >0 and 0 if 0
    SUM = "sum",                                     // operation to do on the monzo - sum (one of sum, count, or max must be provided)
    COUNT = "count",                                 // operation to do on the monzo - count (one of sum, count, or max must be provided)
    MAX = "max",                                     // operation to do on the monzo - max (one of sum, count, or max must be provided)
}

type Submetric = Partial<{
    [ Parameter.WEIGHT_AS_COEFFICIENT ]: ParameterValue,
    [ Parameter.WEIGHT_AS_BASE ]: ParameterValue,
    [ Parameter.WEIGHT_AS_EXPONENT ]: ParameterValue,
    [ Parameter.K_AS_COEFFICIENT ]: ParameterValue
    [ Parameter.K_AS_BASE ]: ParameterValue
    [ Parameter.K_AS_EXPONENT ]: ParameterValue
    [ Parameter.J_AS_COEFFICIENT ]: ParameterValue
    [ Parameter.J_AS_BASE ]: ParameterValue
    [ Parameter.J_AS_EXPONENT ]: ParameterValue
    [ Parameter.A_AS_COEFFICIENT ]: ParameterValue
    [ Parameter.A_AS_BASE ]: ParameterValue
    [ Parameter.A_AS_EXPONENT ]: ParameterValue
    [ Parameter.W ]: ParameterValue
    [ Parameter.Y ]: ParameterValue
    [ Parameter.USE_NUMINATOR ]: boolean
    [ Parameter.MODIFIED_COUNT ]: boolean,
    [ Parameter.X ]: ParameterValue,
    [ Parameter.USE_PRIME_INDEX ]: boolean,
    [ Parameter.WITHOUT_REPETITION ]: boolean,
    [ Parameter.SUM ]: boolean,
    [ Parameter.COUNT ]: boolean,
    [ Parameter.MAX ]: boolean,
}>

type ParameterValue = number & { _ParameterValueBrand: "ParameterValue" }

type DynamicParameterScope = Partial<{
    center: ParameterValue,
    resolution: Resolution<ParameterValue>,
    span: Span<ParameterValue>,
}>

// type DebugTarget =
    // "all" |
    // "submetricAntivotes" |
    // "rankedUnpopularities" |
    // "solver" |
    // "newBestMetric" |
    // "localMinima" |
    // "scope" |
    // "sumOfSquares" |
    // "errors" |
    // "kills"

enum DebugTarget {
    ALL = "ALL",
    SUBMETRIC_ANTIVOTES = "SUBMETRIC_ANTIVOTES",
    RANKED_UNPOPULARITIES = "RANKED_UNPOPULARITIES",
    SOLVER = "SOLVER",
    POPULATION = "POPULATION",
    NEW_BEST_METRIC = "NEW_BEST_METRIC",
    LOCAL_MINIMUM = "LOCAL_MINIMUM",
    SCOPE = "SCOPE",
    SUM_OF_SQUARES = "SUM_OF_SQUARES",
    ERRORS = "ERRORS",
    KILLS = "KILLS", // todo should this go back to timeouts?
}

type Debug = EnumHash<DebugTarget, boolean>

type DebugColor = "green" | "red" | "yellow" | "cyan" | "blue" | "white" // todo this is redundant kind of with something else

export {
    Submetric,
    Parameter,
    ParameterValue,
    DynamicParameterScope,
    Debug,
    DebugTarget,
    DebugColor,
}
