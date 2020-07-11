import { Parameter, Submetric, SubmetricType } from "../../types"
import { Combination, Index } from "../../../../utilities/types"

type ParameterUnit = number & { _ParameterUnitBrand: "ParameterUnit" }

type SamplePoint = number[] & { _SamplePointBrand: "SamplePoint" }

// todo: well actually a sample coordinate is like a ParameterValueIndex yeah? reconcile that

type DynamicParameterValue = number & { _DynamicParameterValueBrand: "DynamicParameterValue" }

type ParameterValue = DynamicParameterValue | boolean | SubmetricType

type SubmetricValue = { [key in Parameter]?: ParameterValue }

type Sample = {
    submetrics: Combination<Submetric>,
    point: SamplePoint,
}

interface ComputeParameterValueIndicesParameters {
    dynamicParameters: DynamicParameter[],
    submetricValue: SubmetricValue,
    submetricIndex: Index,
}

interface DynamicParameter {
    submetricIndex: Index,
    parameter: Parameter,
    values: DynamicParameterValue[],
    unit: ParameterUnit,
}

export {
    Sample,
    ComputeParameterValueIndicesParameters,
    SubmetricValue,
    SamplePoint,
    DynamicParameter,
    ParameterUnit,
    ParameterValue,
    DynamicParameterValue,
}
