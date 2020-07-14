import { Index, Unit } from "../../../../../general"
import { Parameter, ParameterValue, Submetric } from "../../../types"

interface ComputeDynamicParameterValueIndicesOptions {
    dynamicParameters: DynamicParameter[],
    submetric: Submetric,
    submetricIndex: Index<Submetric>,
}

interface DynamicParameter {
    parameter: Parameter,
    submetricIndex: Index<Submetric>,
    unit: Unit<ParameterValue>,
    values: ParameterValue[],
}

type SubmetricPossibility = Submetric & { _SubmetricPossibilityBrand: "SubmetricPossibility" }

type ComputeResolutionOptions = Partial<{
    maximumUnit: Unit<ParameterValue>,
}>

export {
    ComputeDynamicParameterValueIndicesOptions,
    DynamicParameter,
    SubmetricPossibility,
    ComputeResolutionOptions,
}
