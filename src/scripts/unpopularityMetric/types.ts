import { Resolution, Span } from "../../general"

enum SubmetricType {
    SOAPFAR = "soapfar",
    SOAPF = "soapf",
    COAPFAR = "coapfar",
    COAPF = "coapf",
    SOAPIFAR = "soapifar",
    SOAPIF = "soapif",
    GPF = "gpf",
    GPIF = "gpif",
}

enum SubmetricOperation {
    SUM = "sum",
    COUNT = "count",
    MAX = "max",
}

enum Parameter {
    SUBMETRIC_TYPE = "submetricType",                // submetric type, which will be used to look up its properties (how it works) when computing antivotes
    WEIGHT = "weight",                               // submetric coefficient
    WEIGHT_IS_BASE = "weightIsBase",                 // use the submetric coefficient instead as base
    WEIGHT_IS_EXPONENT = "weightIsExponent",         // use the submetric coefficient instead as an exponent
    K = "k",                                         // diminuator coefficient
    K_IS_BASE = "kIsBase",                           // use the diminuator coefficient instead as a base
    K_IS_EXPONENT = "kIsExponent",                   // use the diminuator coefficient instead as an exponent
    J = "j",                                         // numinator coefficient
    J_IS_BASE = "jIsBase",                           // use the numinator coefficient instead as a base
    J_IS_EXPONENT = "jIsExponent",                   // use the numinator coefficient instead as an exponent
    A = "a",                                         // prime coefficient
    A_IS_BASE = "aIsBase",                           // use the prime coefficient instead as a base
    A_IS_EXPONENT = "aIsExponent",                   // use the prime coefficient instead as an exponent
    W = "w",                                         // prime constant (applied after applying exponent or base)
    // X = "x",                                         // prime constant (applied before applying exponent or base)
    Y = "y",                                         // prime exponent exponent
    // V = "v",                                         // prime exponent constant (applied before applying exponent, for non-zero terms)
    // T = "t",                                         // prime exponent constant (applied after applying exponent)
    NUMERATOR_IS_NUMINATOR = "numeratorIsNuminator", // numinator is determined by the original ratio's numerator, not the greater of the two results of calling the submetric on the original ratio's numerator and denominator
    MODIFIED_COUNT = "modifiedCount",                // Dave's trick where 5's get a half-resolution
}

type Submetric = Partial<{
    [ Parameter.SUBMETRIC_TYPE ]: SubmetricType,
    [ Parameter.WEIGHT ]: ParameterValue,
    [ Parameter.WEIGHT_IS_BASE ]: boolean,
    [ Parameter.WEIGHT_IS_EXPONENT ]: boolean,
    [ Parameter.K ]: ParameterValue
    [ Parameter.K_IS_BASE ]: boolean
    [ Parameter.K_IS_EXPONENT ]: boolean
    [ Parameter.J ]: ParameterValue
    [ Parameter.J_IS_BASE ]: boolean
    [ Parameter.J_IS_EXPONENT ]: boolean
    [ Parameter.A ]: ParameterValue
    [ Parameter.A_IS_BASE ]: boolean
    [ Parameter.A_IS_EXPONENT ]: boolean
    [ Parameter.W ]: ParameterValue
    [ Parameter.Y ]: ParameterValue
    [ Parameter.NUMERATOR_IS_NUMINATOR ]: boolean
    [ Parameter.MODIFIED_COUNT ]: boolean,
    // [Parameter.X]: DynamicParameterValue
}>

interface SubmetricProperties {
    operation: SubmetricOperation,
    usePrimeIndex?: boolean,
    withRepetition: boolean,
}

type ParameterValue = number & { _ParameterValueBrand: "ParameterValue" }

type DynamicParameterScope = Partial<{
    center: ParameterValue,
    resolution: Resolution<ParameterValue>,
    span: Span<ParameterValue>,
}>

interface Debug {
    all: boolean,
    submetricAntivotes: boolean,
    rankedUnpopularities: boolean,
    solver: boolean,
    newBestMetric: boolean,
}

export {
    Submetric,
    SubmetricType,
    SubmetricOperation,
    Parameter,
    SubmetricProperties,
    ParameterValue,
    DynamicParameterScope,
    Debug,
}
