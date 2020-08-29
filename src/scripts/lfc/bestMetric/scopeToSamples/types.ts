import { Combination, Index, Max, Min, Span, Unit } from "../../../../general"
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

type ComputeDynamicParameterScopeOptions = Partial<{
    max: Max<ParameterValue>,
    min: Min<ParameterValue>,
    span: Span<ParameterValue>,
    center: ParameterValue,
}>

interface CombineSubmetricsPossibilitiesIntoSamplesOptions {
    dynamicParameters: DynamicParameter[],
    submetricsPossibilities: Array<Combination<SubmetricPossibility>>
}

interface SpreadAllBinSubmetricsPossibilitiesAcrossSamplesOptions {
    samples: Sample[],
    allBinSubmetricPossibilities: SubmetricPossibility[]
    dynamicParameters: DynamicParameter[],
}

export {
    ComputeDynamicParameterValueIndicesOptions,
    DynamicParameter,
    SubmetricPossibility,
    Sample,
    SamplePoint,
    CombineSubmetricsPossibilitiesIntoSamplesOptions,
    ComputeDynamicParameterScopeOptions,
    SpreadAllBinSubmetricsPossibilitiesAcrossSamplesOptions,
}
