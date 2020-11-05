import {Abs, Decimal, Exponent, Prime} from "../../../../src/general/math"
import {N2D3P9} from "../../../../src/sagittal/ji/metrics/unpopularity/n2d3p9"
import {ApotomeSlope} from "../../../../src/sagittal/ji/metrics/uselessness"
import {COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS} from "../../../../src/scripts/complexityMetricLfc/metrics"
import {ComplexityMetricFamilyId} from "../../../../src/scripts/complexityMetricLfc/types"
import {Parameter} from "../../../../src/scripts/types"

describe("complexityMetric", (): void => {
    const n2d3p9 = 10 as N2D3P9
    const aas = 5 as Abs<ApotomeSlope>
    const ate = 3.3 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>
    const a = 0.6 as Parameter
    const b = 1.5 as Parameter
    const c = 1.4 as Parameter
    const sE = 0.1 as Parameter
    const sP = 0.1 as Parameter
    const tE = 0.05 as Parameter
    const tP = 0.05 as Parameter

    it("lee", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.LEE].metric

        const actual = complexityMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 7.014386
        expect(actual).toBeCloseTo(expected)
    })

    it("ree", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.REE].metric

        const actual = complexityMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 7.673529
        expect(actual).toBeCloseTo(expected)
    })

    it("lpe", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.LPE].metric

        const actual = complexityMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 4.932420
        expect(actual).toBeCloseTo(expected)
    })

    it("rpe", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.RPE].metric

        const actual = complexityMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 5.591563
        expect(actual).toBeCloseTo(expected)
    })

    it("lep", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.LEP].metric

        const actual = complexityMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 6.787933
        expect(actual).toBeCloseTo(expected)
    })

    it("rep", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.REP].metric

        const actual = complexityMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 7.447077
        expect(actual).toBeCloseTo(expected)
    })

    it("lpp", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.LPP].metric

        const actual = complexityMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 4.705967
        expect(actual).toBeCloseTo(expected)
    })

    it("rpp", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.RPP].metric

        const actual = complexityMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 5.365111
        expect(actual).toBeCloseTo(expected)
    })
})
