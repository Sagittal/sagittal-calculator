import {Abs, Decimal, Exponent, Prime} from "../../../../src/general/math"
import {ApotomeSlope} from "../../../../src/sagittal/ji/pitch"
import {N2D3P9} from "../../../../src/sagittal/ji/two3FreeClass/n2d3p9"
import {Parameter} from "../../../../src/scripts/types"
import {USEFULNESS_METRICS_WITH_PARAMETERS} from "../../../../src/scripts/usefulnessMetricLfc/metrics"
import {UsefulnessMetricId} from "../../../../src/scripts/usefulnessMetricLfc/types"

describe("usefulnessMetric", (): void => {
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
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.LEE].metric

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 7.014386
        expect(actual).toBeCloseTo(expected)
    })

    it("ree", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.REE].metric

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 7.673529
        expect(actual).toBeCloseTo(expected)
    })

    it("lpe", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.LPE].metric

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 4.932420
        expect(actual).toBeCloseTo(expected)
    })

    it("rpe", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.RPE].metric

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 5.591563
        expect(actual).toBeCloseTo(expected)
    })

    it("lep", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.LEP].metric

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 6.787933
        expect(actual).toBeCloseTo(expected)
    })

    it("rep", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.REP].metric

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 7.447077
        expect(actual).toBeCloseTo(expected)
    })

    it("lpp", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.LPP].metric

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 4.705967
        expect(actual).toBeCloseTo(expected)
    })

    it("rpp", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.RPP].metric

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 5.365111
        expect(actual).toBeCloseTo(expected)
    })
})
