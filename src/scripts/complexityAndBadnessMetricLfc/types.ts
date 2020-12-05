import {Abs, Comma, Ed, Parameter} from "@sagittal/general"
import {ApotomeSlope, Ate, CommaClassId, Complexity, N2D3P9} from "@sagittal/system"

type ComplexityParameterSet = Partial<Record<ComplexityParameterId, Parameter>>

type ComplexityMetric = (comma: Comma, complexityParameterSet: ComplexityParameterSet) => Complexity

enum ComplexityMetricFamilyId {
    LEE = "lee",
    REE = "ree",
    LPE = "lpe",
    RPE = "rpe",
    LEP = "lep",
    REP = "rep",
    LPP = "lpp",
    RPP = "rpp",
}

enum ComplexityParameterId {
    A = "a",
    B = "b",
    C = "c",
    SE = "sE",
    TE = "tE",
    SP = "sP",
    TP = "tP",
}

interface ComplexityAndBadnessMetricLfcScriptGroupSettings {
    zoneCommaEntries: Array<[CommaClassId, Comma[]]>,
    sosMode: boolean,
    complexitySearchEd: Ed<{of: Parameter}>,
}

interface MetricParameters {
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Ate,
}

export {
    ComplexityMetric,
    ComplexityParameterSet,
    ComplexityMetricFamilyId,
    ComplexityParameterId,
    ComplexityAndBadnessMetricLfcScriptGroupSettings,
    MetricParameters,
}
