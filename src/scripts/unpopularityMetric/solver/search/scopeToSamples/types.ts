import { DynamicParameterValue, Parameter, Submetric } from "../../../types"
import { Combination, Index, Unit } from "../../../../../utilities/types"

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
    unit: Unit<DynamicParameterValue>,
}

type SubmetricPossibility = Submetric & { _SubmetricPossibilityBrand: "SubmetricPossibility" }

export {
    Sample,
    ComputeDynamicParameterValueIndicesOptions,
    SamplePoint,
    DynamicParameter,
    SubmetricPossibility,
}
