import { ParameterPoint } from "./submetricCombinations/types"

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
    // X = "x",                                         // prime constant (applied before applying exponent or base) // todo = all these commented out ones lead to bad. this one froze = [{"submetricType" ="soapf"},{"submetricType" ="soapfar","x" ={"center" =0,"range" =6,"count" =2},"a" ={"center" =2,"range" =4,"count" =2}}]
    Y = "y",                                         // term exponent
    // V = "v",                                         // term constant (applied before applying exponent, for non-zero terms)
    // T = "t",                                         // term constant (applied after applying exponent)
    NUMERATOR_IS_NUMINATOR = "numeratorIsNuminator", // numinator is determined by the original ratio's numerator, not the greater of the two results of calling the submetric on the original ratio's numerator and denominator
    MODIFIED_COUNT = "modifiedCount",                // Dave's trick where 5's get a half-count
}

type Submetric = {
    [Parameter.SUBMETRIC_TYPE]?: SubmetricType,
    [Parameter.WEIGHT]?: number,
    [Parameter.WEIGHT_IS_BASE]?: boolean,
    [Parameter.WEIGHT_IS_EXPONENT]?: boolean,
    [Parameter.K]?: number
    [Parameter.K_IS_BASE]?: boolean
    [Parameter.K_IS_EXPONENT]?: boolean
    [Parameter.J]?: number
    [Parameter.J_IS_BASE]?: boolean
    [Parameter.J_IS_EXPONENT]?: boolean
    [Parameter.A]?: number
    [Parameter.A_IS_BASE]?: boolean
    [Parameter.A_IS_EXPONENT]?: boolean
    [Parameter.W]?: number
    [Parameter.Y]?: number
    [Parameter.NUMERATOR_IS_NUMINATOR]?: boolean
    [Parameter.MODIFIED_COUNT]?: boolean
    // [Parameter.X]?: number
}

type SubmetricProperties = {
    withRepetition: boolean,
    operation: SubmetricOperation,
    usePrimeIndex?: boolean,
}

type ParameterType = number | boolean | SubmetricType // todo: relationship w/ SubmetricPoint? should this be a ParameterPoint or something?

type Configs = SubmetricConfigs[] // todo: MetricConfigs ?

type SubmetricConfigs = {
    [key in Parameter]?: ParameterType | ParameterConfig
}

type ParameterConfigs = { [ key in Parameter ]?: ParameterType | ParameterConfig }

interface ParameterConfig {
    center?: number,
    range?: number,
    count?: number,
}

interface DynamicParameter {
    submetricIndex: number,
    parameter: Parameter,
    parameterPoints: ParameterPoint[],
    unit: number,
}

export {
    Submetric,
    SubmetricType,
    SubmetricOperation,
    Parameter,
    SubmetricProperties,
    Configs,
    SubmetricConfigs,
    ParameterConfig,
    DynamicParameter,
    ParameterType,
    ParameterConfigs,
}
