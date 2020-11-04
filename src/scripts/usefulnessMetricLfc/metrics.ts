// tslint:disable max-line-length

import {Abs, Decimal, Exponent, Prime} from "../../general"
import {ApotomeSlope, N2D3P9} from "../../sagittal"
import {DEFAULT_USEFULNESS_PARAMETER_VALUE} from "./constants"
import {
    UsefulnessMetric,
    UsefulnessMetricFamilyId,
    UsefulnessParameterId,
    UsefulnessParameterSet,
    UsefulnessScore,
} from "./types"

const lee = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {sE = DEFAULT_USEFULNESS_PARAMETER_VALUE, tE = DEFAULT_USEFULNESS_PARAMETER_VALUE}: UsefulnessParameterSet,
): UsefulnessScore => {
    return Math.log2(n2d3p9) + sE * 2 ** aas + tE * 2 ** ate as UsefulnessScore
}

const ree = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {a = DEFAULT_USEFULNESS_PARAMETER_VALUE, sE = DEFAULT_USEFULNESS_PARAMETER_VALUE, tE = DEFAULT_USEFULNESS_PARAMETER_VALUE}: UsefulnessParameterSet,
): UsefulnessScore => {
    return n2d3p9 ** a + sE * 2 ** aas + tE * 2 ** ate as UsefulnessScore
}

const lpe = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {b = DEFAULT_USEFULNESS_PARAMETER_VALUE, sP = DEFAULT_USEFULNESS_PARAMETER_VALUE, tE = DEFAULT_USEFULNESS_PARAMETER_VALUE}: UsefulnessParameterSet,
): UsefulnessScore => {
    return Math.log2(n2d3p9) + sP * aas ** b + tE * 2 ** ate as UsefulnessScore
}

const rpe = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {a = DEFAULT_USEFULNESS_PARAMETER_VALUE, b = DEFAULT_USEFULNESS_PARAMETER_VALUE, sP = DEFAULT_USEFULNESS_PARAMETER_VALUE, tE = DEFAULT_USEFULNESS_PARAMETER_VALUE}: UsefulnessParameterSet,
): UsefulnessScore => {
    return n2d3p9 ** a + sP * aas ** b + tE * 2 ** ate as UsefulnessScore
}

const lep = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {c = DEFAULT_USEFULNESS_PARAMETER_VALUE, sE = DEFAULT_USEFULNESS_PARAMETER_VALUE, tP = DEFAULT_USEFULNESS_PARAMETER_VALUE}: UsefulnessParameterSet,
): UsefulnessScore => {
    return Math.log2(n2d3p9) + sE * 2 ** aas + tP * ate ** c as UsefulnessScore
}

const rep = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {a = DEFAULT_USEFULNESS_PARAMETER_VALUE, c = DEFAULT_USEFULNESS_PARAMETER_VALUE, sE = DEFAULT_USEFULNESS_PARAMETER_VALUE, tP = DEFAULT_USEFULNESS_PARAMETER_VALUE}: UsefulnessParameterSet,
): UsefulnessScore => {
    return n2d3p9 ** a + sE * 2 ** aas + tP * ate ** c as UsefulnessScore
}

const lpp = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {b = DEFAULT_USEFULNESS_PARAMETER_VALUE, c = DEFAULT_USEFULNESS_PARAMETER_VALUE, sP = DEFAULT_USEFULNESS_PARAMETER_VALUE, tP = DEFAULT_USEFULNESS_PARAMETER_VALUE}: UsefulnessParameterSet,
): UsefulnessScore => {
    return Math.log2(n2d3p9) + sP * aas ** b + tP * ate ** c as UsefulnessScore
}

const rpp = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    {a = DEFAULT_USEFULNESS_PARAMETER_VALUE, b = DEFAULT_USEFULNESS_PARAMETER_VALUE, c = DEFAULT_USEFULNESS_PARAMETER_VALUE, sP = DEFAULT_USEFULNESS_PARAMETER_VALUE, tP = DEFAULT_USEFULNESS_PARAMETER_VALUE}: UsefulnessParameterSet,
): UsefulnessScore => {
    return n2d3p9 ** a + sP * aas ** b + tP * ate ** c as UsefulnessScore
}

const USEFULNESS_METRIC_FAMILIES_WITH_PARAMETERS: Record<UsefulnessMetricFamilyId, {metric: UsefulnessMetric, parameters: UsefulnessParameterId[]}> = {
    [UsefulnessMetricFamilyId.LEE]: {     // Lb(N2D3P9) + t × 2^ATE + s × 2^AAS
        metric: lee,
        parameters: [UsefulnessParameterId.SE, UsefulnessParameterId.TE],
    },
    [UsefulnessMetricFamilyId.REE]: {     // N2D3P9^a + t × 2^ATE + s × 2^AAS
        metric: ree,
        parameters: [UsefulnessParameterId.A, UsefulnessParameterId.SE, UsefulnessParameterId.TE],
    },
    [UsefulnessMetricFamilyId.LPE]: {     // Lb(N2D3P9) + t × ATE^b + s × 2^AAS
        metric: lpe,
        parameters: [UsefulnessParameterId.B, UsefulnessParameterId.SP, UsefulnessParameterId.TE],
    },
    [UsefulnessMetricFamilyId.RPE]: {     // N2D3P9^a + t × ATE^b + s × 2^AAS
        metric: rpe,
        parameters: [UsefulnessParameterId.A, UsefulnessParameterId.B, UsefulnessParameterId.SP, UsefulnessParameterId.TE],
    },
    [UsefulnessMetricFamilyId.LEP]: {     // Lb(N2D3P9) + t × 2^ATE + s × AAS^c
        metric: lep,
        parameters: [UsefulnessParameterId.SE, UsefulnessParameterId.C, UsefulnessParameterId.TP],
    },
    [UsefulnessMetricFamilyId.REP]: {     // N2D3P9^a + t × 2^ATE + s × AAS^c
        metric: rep,
        parameters: [UsefulnessParameterId.A, UsefulnessParameterId.SE, UsefulnessParameterId.C, UsefulnessParameterId.TP],
    },
    [UsefulnessMetricFamilyId.LPP]: {     // Lb(N2D3P9) + t × ATE^b + s × AAS^c
        metric: lpp,
        parameters: [UsefulnessParameterId.B, UsefulnessParameterId.SP, UsefulnessParameterId.C, UsefulnessParameterId.TP],
    },
    [UsefulnessMetricFamilyId.RPP]: {     // N2D3P9^a + t × ATE^b + s × AAS^c
        metric: rpp,
        parameters: [UsefulnessParameterId.A, UsefulnessParameterId.B, UsefulnessParameterId.SP, UsefulnessParameterId.C, UsefulnessParameterId.TP],
    },
}

export {
    USEFULNESS_METRIC_FAMILIES_WITH_PARAMETERS,
}
