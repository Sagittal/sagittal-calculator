import {Abs, Decimal, Exponent, Prime} from "../../../../src/general/math"
import {ApotomeSlope} from "../../../../src/sagittal/ji/pitch"
import {N2D3P9} from "../../../../src/sagittal/ji/two3FreeClass/n2d3p9"
import {ParameterValue} from "../../../../src/scripts/types"
import {USEFULNESS_METRICS_WITH_PARAMETERS} from "../../../../src/scripts/usefulnessMetricLfc/metrics"
import {UsefulnessMetricId} from "../../../../src/scripts/usefulnessMetricLfc/types"

describe("usefulnessMetric", (): void => {
    const n2d3p9 = 10 as N2D3P9
    const aas = 5 as Abs<ApotomeSlope>
    const ate = 3.3 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>
    const a = 0.6 as ParameterValue
    const b = 1.5 as ParameterValue
    const c = 1.4 as ParameterValue
    const sE = 0.1 as ParameterValue
    const sP = 0.1 as ParameterValue
    const tE = 0.05 as ParameterValue
    const tP = 0.05 as ParameterValue

    it("lee", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.LEE][0]

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 7.014386
        expect(actual).toBeCloseTo(expected)
    })

    it("ree", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.REE][0]

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 7.673529
        expect(actual).toBeCloseTo(expected)
    })

    it("lpe", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.LPE][0]

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 4.932420
        expect(actual).toBeCloseTo(expected)
    })

    it("rpe", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.RPE][0]

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 5.591563
        expect(actual).toBeCloseTo(expected)
    })

    it("lep", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.LEP][0]

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 6.787933
        expect(actual).toBeCloseTo(expected)
    })

    it("rep", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.REP][0]

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 7.447077
        expect(actual).toBeCloseTo(expected)
    })

    it("lpp", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.LPP][0]

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 4.705967
        expect(actual).toBeCloseTo(expected)
    })

    it("rpp", (): void => {
        const usefulnessMetric = USEFULNESS_METRICS_WITH_PARAMETERS[UsefulnessMetricId.RPP][0]

        const actual = usefulnessMetric(n2d3p9, aas, ate, {a, b, c, sE, tE, sP, tP})

        const expected = 5.365111
        expect(actual).toBeCloseTo(expected)
    })
})
