import { DynamicParameterValue, Parameter, Submetric } from "../../../types"
import { Combination, Index } from "../../../../../utilities/types"

type ParameterUnit = number & { _ParameterUnitBrand: "ParameterUnit" }

type SamplePoint = Index<DynamicParameterValue>[] & { _SamplePointBrand: "SamplePoint" }

type Sample = {
    submetrics: Combination<Submetric>,
    samplePoint: SamplePoint,
}

interface ComputeDynamicParameterValueIndicesOptions {
    dynamicParameters: DynamicParameter[],
    submetric: Submetric,
    submetricIndex: Index<Submetric>,
}

interface DynamicParameter {
    submetricIndex: Index<Submetric>,
    parameter: Parameter,
    values: DynamicParameterValue[],
    unit: ParameterUnit,
}

type SampleRange = number & { _SampleRangeBrand: "SampleRange" }
type SampleResolution = number & { _SampleResolutionBrand: "SampleResolution" }

type SubmetricPossibility = Submetric & { _SubmetricPossibilityBrand: "SubmetricPossibility" }

export {
    Sample,
    ComputeDynamicParameterValueIndicesOptions,
    SamplePoint,
    DynamicParameter,
    ParameterUnit,
    SampleRange,
    SampleResolution,
    SubmetricPossibility,
}
