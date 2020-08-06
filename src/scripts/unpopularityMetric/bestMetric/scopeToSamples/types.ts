import { Combination, Index, Unit } from "../../../../general"
import { Parameter, ParameterValue, Submetric } from "../../sumOfSquares"

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

type SamplePoint = Array<Index<ParameterValue>> & { _SamplePointBrand: "SamplePoint" }

interface Sample {
    samplePoint: SamplePoint,
    submetrics: Combination<Submetric>,
}

export {
    ComputeDynamicParameterValueIndicesOptions,
    DynamicParameter,
    SubmetricPossibility,
    Sample,
    SamplePoint,
}
