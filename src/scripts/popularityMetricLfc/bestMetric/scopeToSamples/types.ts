import {Combination, Index, KeyPath, Max, Min, Step, Window} from "../../../../general"
import {Parameter, ParameterValue, Submetric} from "../../sumOfSquares"

interface DynamicParameterValueIndicesOptions {
    dynamicParameters: DynamicParameter[],
    submetric: Submetric,
    submetricIndex: Index<Submetric>,
}

interface DynamicParameter {
    parameter: Parameter,
    submetricIndex: Index<Submetric>,
    unit: Step<ParameterValue>,
    values: ParameterValue[],
}

type SubmetricPossibility = Submetric & {_SubmetricPossibilityBrand: boolean}

type SamplePoint = KeyPath & Array<Index<ParameterValue>>

interface Sample {
    samplePoint: SamplePoint,
    submetrics: Combination<Submetric>,
}

type DynamicParameterScopeOptions = Partial<{
    max: Max<ParameterValue>,
    min: Min<ParameterValue>,
    window: Window<ParameterValue>,
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
    DynamicParameterValueIndicesOptions,
    DynamicParameter,
    SubmetricPossibility,
    Sample,
    SamplePoint,
    CombineSubmetricsPossibilitiesIntoSamplesOptions,
    DynamicParameterScopeOptions,
    SpreadAllBinSubmetricsPossibilitiesAcrossSamplesOptions,
}
