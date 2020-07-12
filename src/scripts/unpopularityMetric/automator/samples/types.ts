import { Parameter, Submetric, SubmetricType } from "../../types"
import { Combination, Index } from "../../../../utilities/types"

type ParameterUnit = number & { _ParameterUnitBrand: "ParameterUnit" }

type SamplePoint = number[] & { _SamplePointBrand: "SamplePoint" }

// todo: well actually a sample coordinate is like a ParameterValueIndex yeah? reconcile that

type DynamicParameterValue = number & { _DynamicParameterValueBrand: "DynamicParameterValue" }

type ParameterValue = DynamicParameterValue | boolean | SubmetricType

type SubmetricValue = { [key in Parameter]?: ParameterValue } // todo: and how does this relate to Submetric? isn't it just the same? i wouldn't be super cavalier about consolidating them though cuz isn't there a subtle difference, a slicing and dicing? maybe refer to your draw.io again? or review some test descriptiopns

type Sample = {
    submetrics: Combination<Submetric>,
    point: SamplePoint,
}

interface ComputeParameterValueIndicesParameters {
    dynamicParameters: DynamicParameter[],
    submetricValue: SubmetricValue,
    submetricIndex: Index<Submetric>, // todo: shite, maybe some of these so-called "combinations" of submetrics actually DO matter the order
}

// todo: I failed to parameterize all of the Index types

interface DynamicParameter {
    submetricIndex: Index,
    parameter: Parameter,
    values: DynamicParameterValue[],
    unit: ParameterUnit,
}

interface DynamicParameterConfig {
    center?: DynamicParameterValue,
    range?: SampleRange,
    resolution?: SampleResolution,
}

type SampleRange = number & { _SampleRangeBrand: "SampleRange" }
type SampleResolution = number & { _SampleResolutionBrand: "SampleResolution" }

export {
    Sample,
    ComputeParameterValueIndicesParameters,
    SubmetricValue,
    SamplePoint,
    DynamicParameter,
    ParameterUnit,
    ParameterValue,
    DynamicParameterValue,
    DynamicParameterConfig,
    SampleRange,
    SampleResolution,
}
