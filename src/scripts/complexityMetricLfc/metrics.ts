// tslint:disable max-line-length

import {Abs, Decimal, Exponent, Prime} from "../../general"
import {ApotomeSlope, Complexity, N2D3P9} from "../../sagittal"
import {DEFAULT_COMPLEXITY_PARAMETER_VALUE} from "./constants"
import {
    ComplexityMetric,
    ComplexityMetricFamilyId,
    ComplexityParameterId,
    ComplexityParameterSet,
} from "./types"

const lee = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {sE = DEFAULT_COMPLEXITY_PARAMETER_VALUE, tE = DEFAULT_COMPLEXITY_PARAMETER_VALUE}: ComplexityParameterSet,
): Complexity => {
    return Math.log2(n2d3p9) + sE * 2 ** aas + tE * 2 ** ate as Complexity
}

const ree = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {a = DEFAULT_COMPLEXITY_PARAMETER_VALUE, sE = DEFAULT_COMPLEXITY_PARAMETER_VALUE, tE = DEFAULT_COMPLEXITY_PARAMETER_VALUE}: ComplexityParameterSet,
): Complexity => {
    return n2d3p9 ** a + sE * 2 ** aas + tE * 2 ** ate as Complexity
}

const lpe = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {b = DEFAULT_COMPLEXITY_PARAMETER_VALUE, sP = DEFAULT_COMPLEXITY_PARAMETER_VALUE, tE = DEFAULT_COMPLEXITY_PARAMETER_VALUE}: ComplexityParameterSet,
): Complexity => {
    return Math.log2(n2d3p9) + sP * aas ** b + tE * 2 ** ate as Complexity
}

const rpe = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {a = DEFAULT_COMPLEXITY_PARAMETER_VALUE, b = DEFAULT_COMPLEXITY_PARAMETER_VALUE, sP = DEFAULT_COMPLEXITY_PARAMETER_VALUE, tE = DEFAULT_COMPLEXITY_PARAMETER_VALUE}: ComplexityParameterSet,
): Complexity => {
    return n2d3p9 ** a + sP * aas ** b + tE * 2 ** ate as Complexity
}

const lep = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {c = DEFAULT_COMPLEXITY_PARAMETER_VALUE, sE = DEFAULT_COMPLEXITY_PARAMETER_VALUE, tP = DEFAULT_COMPLEXITY_PARAMETER_VALUE}: ComplexityParameterSet,
): Complexity => {
    return Math.log2(n2d3p9) + sE * 2 ** aas + tP * ate ** c as Complexity
}

const rep = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {a = DEFAULT_COMPLEXITY_PARAMETER_VALUE, c = DEFAULT_COMPLEXITY_PARAMETER_VALUE, sE = DEFAULT_COMPLEXITY_PARAMETER_VALUE, tP = DEFAULT_COMPLEXITY_PARAMETER_VALUE}: ComplexityParameterSet,
): Complexity => {
    return n2d3p9 ** a + sE * 2 ** aas + tP * ate ** c as Complexity
}

const lpp = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {b = DEFAULT_COMPLEXITY_PARAMETER_VALUE, c = DEFAULT_COMPLEXITY_PARAMETER_VALUE, sP = DEFAULT_COMPLEXITY_PARAMETER_VALUE, tP = DEFAULT_COMPLEXITY_PARAMETER_VALUE}: ComplexityParameterSet,
): Complexity => {
    return Math.log2(n2d3p9) + sP * aas ** b + tP * ate ** c as Complexity
}

const rpp = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {a = DEFAULT_COMPLEXITY_PARAMETER_VALUE, b = DEFAULT_COMPLEXITY_PARAMETER_VALUE, c = DEFAULT_COMPLEXITY_PARAMETER_VALUE, sP = DEFAULT_COMPLEXITY_PARAMETER_VALUE, tP = DEFAULT_COMPLEXITY_PARAMETER_VALUE}: ComplexityParameterSet,
): Complexity => {
    return n2d3p9 ** a + sP * aas ** b + tP * ate ** c as Complexity
}

const COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS: Record<ComplexityMetricFamilyId, {metric: ComplexityMetric, parameters: ComplexityParameterId[]}> = {
    [ComplexityMetricFamilyId.LEE]: {     // Lb(N2D3P9) + t × 2^ATE + s × 2^AAS
        metric: lee,
        parameters: [ComplexityParameterId.SE, ComplexityParameterId.TE],
    },
    [ComplexityMetricFamilyId.REE]: {     // N2D3P9^a + t × 2^ATE + s × 2^AAS
        metric: ree,
        parameters: [ComplexityParameterId.A, ComplexityParameterId.SE, ComplexityParameterId.TE],
    },
    [ComplexityMetricFamilyId.LPE]: {     // Lb(N2D3P9) + t × ATE^b + s × 2^AAS
        metric: lpe,
        parameters: [ComplexityParameterId.B, ComplexityParameterId.SP, ComplexityParameterId.TE],
    },
    [ComplexityMetricFamilyId.RPE]: {     // N2D3P9^a + t × ATE^b + s × 2^AAS
        metric: rpe,
        parameters: [ComplexityParameterId.A, ComplexityParameterId.B, ComplexityParameterId.SP, ComplexityParameterId.TE],
    },
    [ComplexityMetricFamilyId.LEP]: {     // Lb(N2D3P9) + t × 2^ATE + s × AAS^c
        metric: lep,
        parameters: [ComplexityParameterId.SE, ComplexityParameterId.C, ComplexityParameterId.TP],
    },
    [ComplexityMetricFamilyId.REP]: {     // N2D3P9^a + t × 2^ATE + s × AAS^c
        metric: rep,
        parameters: [ComplexityParameterId.A, ComplexityParameterId.SE, ComplexityParameterId.C, ComplexityParameterId.TP],
    },
    [ComplexityMetricFamilyId.LPP]: {     // Lb(N2D3P9) + t × ATE^b + s × AAS^c
        metric: lpp,
        parameters: [ComplexityParameterId.B, ComplexityParameterId.SP, ComplexityParameterId.C, ComplexityParameterId.TP],
    },
    [ComplexityMetricFamilyId.RPP]: {     // N2D3P9^a + t × ATE^b + s × AAS^c
        metric: rpp,
        parameters: [ComplexityParameterId.A, ComplexityParameterId.B, ComplexityParameterId.SP, ComplexityParameterId.C, ComplexityParameterId.TP],
    },
}

export {
    COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS,
}
