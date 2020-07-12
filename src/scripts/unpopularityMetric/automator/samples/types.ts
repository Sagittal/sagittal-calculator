import { Parameter, Submetric, SubmetricType } from "../../types"
import { Combination, Index } from "../../../../utilities/types"

type ParameterUnit = number & { _ParameterUnitBrand: "ParameterUnit" }

type SamplePoint = number[] & { _SamplePointBrand: "SamplePoint" }

// todo: well actually a sample coordinate is like a ParameterValueIndex yeah? reconcile that

type DynamicParameterValue = number & { _DynamicParameterValueBrand: "DynamicParameterValue" }

type ParameterValue = DynamicParameterValue | boolean | SubmetricType

type Sample = {
    submetrics: Combination<Submetric>,
    point: SamplePoint,
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
