import {Abs, Comma, Decimal, Ed, Exponent, Parameter, Prime} from "../../general"
import {ApotomeSlope, CommaClassId, Complexity, N2D3P9} from "../../sagittal"

type ComplexityParameterSet = Partial<Record<ComplexityParameterId, Parameter>>

type ComplexityMetric = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    complexityParameterSet: ComplexityParameterSet,
) => Complexity

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

interface ComplexityMetricLfcScriptGroupSettings {
    zoneCommaEntries: Array<[CommaClassId, Comma[]]>,
    sosMode: boolean,
    complexitySearchEd: Ed<Parameter>,
}

export {
    ComplexityMetric,
    ComplexityParameterSet,
    ComplexityMetricFamilyId,
    ComplexityParameterId,
    ComplexityMetricLfcScriptGroupSettings,
}
