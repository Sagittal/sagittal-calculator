import {Comma, Parameter} from "../../../../src/general"
import {COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS} from "../../../../src/scripts/complexityAndBadnessMetricLfc/metrics"
import {ComplexityMetricFamilyId} from "../../../../src/scripts/complexityAndBadnessMetricLfc/types"

describe("complexityMetric", (): void => {
    const comma = {monzo: [12, -4, 0, -2]} as Comma     // N2D3P9 = 10, AAS = 7.357, ATE = 4

    const a = 0.6 as Parameter
    const b = 1.5 as Parameter
    const c = 1.4 as Parameter
    const sE = 0.1 as Parameter
    const sP = 0.1 as Parameter
    const tE = 0.05 as Parameter
    const tP = 0.05 as Parameter

    it("lee", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.LEE].metric

        const actual = complexityMetric(comma, {a, b, c, sE, tE, sP, tP})

        const expected = 20.451536
        expect(actual).toBeCloseTo(expected)
    })

    it("ree", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.REE].metric

        const actual = complexityMetric(comma, {a, b, c, sE, tE, sP, tP})

        const expected = 21.066582
        expect(actual).toBeCloseTo(expected)
    })

    it("lpe", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.LPE].metric

        const actual = complexityMetric(comma, {a, b, c, sE, tE, sP, tP})

        const expected = 6.047840
        expect(actual).toBeCloseTo(expected)
    })

    it("rpe", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.RPE].metric

        const actual = complexityMetric(comma, {a, b, c, sE, tE, sP, tP})

        const expected = 6.662885
        expect(actual).toBeCloseTo(expected)
    })

    it("lep", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.LEP].metric

        const actual = complexityMetric(comma, {a, b, c, sE, tE, sP, tP})

        const expected = 19.999757
        expect(actual).toBeCloseTo(expected)
    })

    it("rep", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.REP].metric

        const actual = complexityMetric(comma, {a, b, c, sE, tE, sP, tP})

        const expected = 20.614802
        expect(actual).toBeCloseTo(expected)
    })

    it("lpp", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.LPP].metric

        const actual = complexityMetric(comma, {a, b, c, sE, tE, sP, tP})

        const expected = 5.596060
        expect(actual).toBeCloseTo(expected)
    })

    it("rpp", (): void => {
        const complexityMetric = COMPLEXITY_METRIC_FAMILIES_WITH_PARAMETERS[ComplexityMetricFamilyId.RPP].metric

        const actual = complexityMetric(comma, {a, b, c, sE, tE, sP, tP})

        const expected = 6.211105
        expect(actual).toBeCloseTo(expected)
    })
})
