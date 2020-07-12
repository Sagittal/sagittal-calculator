import { Parameter, Submetric, SubmetricType } from "../../types"
import { Combination, Index } from "../../../../utilities/types"

type ParameterUnit = number & { _ParameterUnitBrand: "ParameterUnit" }

type SamplePoint = Index<DynamicParameterValue>[] & { _SamplePointBrand: "SamplePoint" }

type DynamicParameterValue = number & { _DynamicParameterValueBrand: "DynamicParameterValue" }

type ParameterValue = DynamicParameterValue | boolean | SubmetricType

type Sample = {
    submetrics: Combination<Submetric>,
    samplePoint: SamplePoint,
}

interface ComputeDynamicParameterValueIndicesParameters {
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

interface DynamicParameterSampleConfig {
    center?: DynamicParameterValue,
    range?: SampleRange,
    resolution?: SampleResolution,
}

type SampleRange = number & { _SampleRangeBrand: "SampleRange" }
type SampleResolution = number & { _SampleResolutionBrand: "SampleResolution" }

export {
    Sample,
    ComputeDynamicParameterValueIndicesParameters,
    SamplePoint,
    DynamicParameter,
    ParameterUnit,
    ParameterValue,
    DynamicParameterValue,
    DynamicParameterSampleConfig,
    SampleRange,
    SampleResolution,
}
