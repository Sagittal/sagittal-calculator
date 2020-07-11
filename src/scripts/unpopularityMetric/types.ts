import { DynamicParameterValue, ParameterValue } from "./automator/samples/types"

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
    MAX = "max"
}

// todo: Include x v t still as capabilities but not in generared automatically configs
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
    // X = "x",                                         // prime constant (applied before applying exponent or base) // todo = all these commented out ones lead to bad. this one froze = [{"submetricType" ="soapf"},{"submetricType" ="soapfar","x" ={"center" =0,"range" =6,"resolution" =2},"a" ={"center" =2,"range" =4,"resolution" =2}}]
    Y = "y",                                         // term exponent
    // V = "v",                                         // term constant (applied before applying exponent, for non-zero terms)
    // T = "t",                                         // term constant (applied after applying exponent)
    NUMERATOR_IS_NUMINATOR = "numeratorIsNuminator", // numinator is determined by the original ratio's numerator, not the greater of the two results of calling the submetric on the original ratio's numerator and denominator
    MODIFIED_COUNT = "modifiedCount",                // Dave's trick where 5's get a half-resolution
}

type Submetric = {
    [ Parameter.SUBMETRIC_TYPE ]?: SubmetricType,
    [ Parameter.WEIGHT ]?: DynamicParameterValue,
    [ Parameter.WEIGHT_IS_BASE ]?: boolean,
    [ Parameter.WEIGHT_IS_EXPONENT ]?: boolean,
    [ Parameter.K ]?: DynamicParameterValue
    [ Parameter.K_IS_BASE ]?: boolean
    [ Parameter.K_IS_EXPONENT ]?: boolean
    [ Parameter.J ]?: DynamicParameterValue
    [ Parameter.J_IS_BASE ]?: boolean
    [ Parameter.J_IS_EXPONENT ]?: boolean
    [ Parameter.A ]?: DynamicParameterValue
    [ Parameter.A_IS_BASE ]?: boolean
    [ Parameter.A_IS_EXPONENT ]?: boolean
    [ Parameter.W ]?: DynamicParameterValue
    [ Parameter.Y ]?: DynamicParameterValue
    [ Parameter.NUMERATOR_IS_NUMINATOR ]?: boolean
    [ Parameter.MODIFIED_COUNT ]?: boolean
    // [Parameter.X]?: DynamicParameterValue
}

type SubmetricProperties = {
    withRepetition: boolean,
    operation: SubmetricOperation,
    usePrimeIndex?: boolean,
}

// todo: these probably goes deeper somewhere
type SampleRange = number & { _SampleRangeBrand: "SampleRange" }
type SampleResolution = number & { _SampleResolutionBrand: "SampleResolution" }
interface DynamicParameterConfig {
    center?: DynamicParameterValue,
    range?: SampleRange,
    resolution?: SampleResolution,
}

type SubmetricConfig = {
    [key in Parameter]?: ParameterValue | DynamicParameterConfig
}

export {
    Submetric,
    SubmetricType,
    SubmetricOperation,
    Parameter,
    SubmetricProperties,
    SubmetricConfig,
    DynamicParameterConfig,
    SampleRange,
    SampleResolution,
}
