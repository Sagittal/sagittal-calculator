import { Index, Ratio } from "../../../general"

type UnpopularityRank = number & { _UnpopularityRankBrand: "UnpopularityRank" }
type PopularityRank = number & { _PopularityRankBrand: "PopularityRank" }
type Votes = number & { _VotesBrand: "Votes" }
type Antivotes = number & { _AntivotesBrand: "Antivotes" }

interface Unpopularity {
    antivotes: Antivotes,
    fiveRoughRatio: Ratio,
    index: Index<Unpopularity>,
}

interface RankedUnpopularity extends Unpopularity {
    rank: UnpopularityRank,
}

interface Popularity {
    fiveRoughRatio: Ratio,
    rank: PopularityRank,
    votes: Votes,
}

enum Parameter {
    WEIGHT_AS_COEFFICIENT = "weightAsCoefficient",   // coefficient used for submetric
    WEIGHT_AS_BASE = "weightAsBase",                 // base used for submetric
    WEIGHT_AS_EXPONENT = "weightAsExponent",         // exponent used for submetric
    K_AS_COEFFICIENT = "kAsCoefficient",             // coefficient used for d
    K_AS_BASE = "kAsBase",                           // base used for d
    K_AS_EXPONENT = "kAsExponent",                   // exponent used for d
    J_AS_COEFFICIENT = "jAsCoefficient",             // coefficient used for n
    J_AS_BASE = "jAsBase",                           // base used for n
    J_AS_EXPONENT = "jAsExponent",                   // exponent used for n
    A_AS_COEFFICIENT = "aAsCoefficient",             // coefficient used for prime
    A_AS_BASE = "aAsBase",                           // base used for prime
    A_AS_EXPONENT = "aAsExponent",                   // exponent used for prime
    W = "w",                                         // prime constant (applied after applying exponent or base)
    B = "b",                                         // prime constant (applied after applying exponent or base), but only applied to d and overriding w if present
    X = "x",                                         // prime constant (applied before applying exponent or base)
    U = "u",                                         // prime constant (applied before applying exponent or base), but only applied to d and overriding x if present
    Y = "y",                                         // prime exponent exponent
    V = "v",                                         // prime exponent exponent, but only applied to d and overriding y if present
    // S = "s",                                         // prime exponent constant (applied before applying exponent, for non-zero terms)
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
    [ Parameter.B ]: ParameterValue
    [ Parameter.X ]: ParameterValue,
    [ Parameter.U ]: ParameterValue,
    [ Parameter.Y ]: ParameterValue
    [ Parameter.V ]: ParameterValue
    [ Parameter.USE_NUMINATOR ]: boolean
    [ Parameter.MODIFIED_COUNT ]: boolean,
    [ Parameter.USE_PRIME_INDEX ]: boolean,
    [ Parameter.WITHOUT_REPETITION ]: boolean,
    [ Parameter.SUM ]: boolean,
    [ Parameter.COUNT ]: boolean,
    [ Parameter.MAX ]: boolean,
}>

type ParameterValue = number & { _ParameterValueBrand: "ParameterValue" }

export {
    Unpopularity,
    UnpopularityRank,
    Popularity,
    Votes,
    PopularityRank,
    Antivotes,
    RankedUnpopularity,
    Parameter,
    ParameterValue,
    Submetric,
}
