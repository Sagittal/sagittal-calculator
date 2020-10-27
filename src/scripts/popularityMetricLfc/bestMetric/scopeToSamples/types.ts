import {Combination, Index, KeyPath, Max, Min, Step, Window} from "../../../../general"
import {Parameter} from "../../../types"
import {PopularityParameterId, Submetric} from "../../sumOfSquares"

interface DynamicParameterValueIndicesOptions {
    dynamicParameters: DynamicParameter[],
    submetric: Submetric,
    submetricIndex: Index<Submetric>,
}

interface DynamicParameter {
    parameter: PopularityParameterId,
    submetricIndex: Index<Submetric>,
    unit: Step<Parameter>,
    values: Parameter[],
}

type SubmetricPossibility = Submetric & {_SubmetricPossibilityBrand: boolean}

type SamplePoint = KeyPath & Array<Index<Parameter>>

interface Sample {
    samplePoint: SamplePoint,
    submetrics: Combination<Submetric>,
}

type DynamicParameterScopeOptions = Partial<{
    max: Max<Parameter>,
    min: Min<Parameter>,
    window: Window<Parameter>,
    center: Parameter,
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
