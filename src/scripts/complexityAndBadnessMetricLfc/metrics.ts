// tslint:disable max-line-length

import {Comma, compute23FreeClass} from "@sagittal/general"
import {Complexity, computeAas, computeAte, computeN2D3P9} from "@sagittal/system"
import {DEFAULT_COMPLEXITY_PARAMETER_VALUE} from "./constants"
import {
    ComplexityMetric,
    ComplexityMetricFamilyId,
    ComplexityParameterId,
    ComplexityParameterSet,
    MetricParameters,
} from "./types"

const computeMetricParameters = (comma: Comma): MetricParameters => {
    const n2d3p9 = computeN2D3P9(compute23FreeClass(comma))
    const aas = computeAas(comma)
    const ate = computeAte(comma)

    return {
        n2d3p9,
        aas,
        ate,
    }
}

const lee = (
    comma: Comma,
    {sE = DEFAULT_COMPLEXITY_PARAMETER_VALUE, tE = DEFAULT_COMPLEXITY_PARAMETER_VALUE}: ComplexityParameterSet,
): Complexity => {
    const {n2d3p9, aas, ate} = computeMetricParameters(comma)

    return Math.log2(n2d3p9) + sE * 2 ** aas + tE * 2 ** ate as Complexity
}

const ree = (
    comma: Comma,
    {
        a = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        sE = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        tE = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
    }: ComplexityParameterSet,
): Complexity => {
    const {n2d3p9, aas, ate} = computeMetricParameters(comma)

    return n2d3p9 ** a + sE * 2 ** aas + tE * 2 ** ate as Complexity
}

const lpe = (
    comma: Comma,
    {
        b = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        sP = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        tE = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
    }: ComplexityParameterSet,
): Complexity => {
    const {n2d3p9, aas, ate} = computeMetricParameters(comma)

    return Math.log2(n2d3p9) + sP * aas ** b + tE * 2 ** ate as Complexity
}

const rpe = (
    comma: Comma,
    {
        a = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        b = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        sP = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        tE = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
    }: ComplexityParameterSet,
): Complexity => {
    const {n2d3p9, aas, ate} = computeMetricParameters(comma)

    return n2d3p9 ** a + sP * aas ** b + tE * 2 ** ate as Complexity
}

const lep = (
    comma: Comma,
    {
        c = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        sE = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        tP = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
    }: ComplexityParameterSet,
): Complexity => {
    const {n2d3p9, aas, ate} = computeMetricParameters(comma)

    return Math.log2(n2d3p9) + sE * 2 ** aas + tP * ate ** c as Complexity
}

const rep = (
    comma: Comma,
    {
        a = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        c = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        sE = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        tP = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
    }: ComplexityParameterSet,
): Complexity => {
    const {n2d3p9, aas, ate} = computeMetricParameters(comma)

    return n2d3p9 ** a + sE * 2 ** aas + tP * ate ** c as Complexity
}

const lpp = (
    comma: Comma,
    {
        b = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        c = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        sP = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        tP = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
    }: ComplexityParameterSet,
): Complexity => {
    const {n2d3p9, aas, ate} = computeMetricParameters(comma)

    return Math.log2(n2d3p9) + sP * aas ** b + tP * ate ** c as Complexity
}

const rpp = (
    comma: Comma,
    {
        a = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        b = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        c = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        sP = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
        tP = DEFAULT_COMPLEXITY_PARAMETER_VALUE,
    }: ComplexityParameterSet,
): Complexity => {
    const {n2d3p9, aas, ate} = computeMetricParameters(comma)

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
