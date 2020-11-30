import {
    BLANK,
    Combination,
    dig,
    Direction,
    EMPTY_MONZO,
    Grade,
    Index,
    KeyPath,
    Monzo,
    Ms,
    Name,
    Obj,
    Two3FreeClass,
} from "../../../../../src/general"
import * as doOnNextEventLoop from "../../../../../src/general/code/doOnNextEventLoop"
import {Metric, Sample, SamplePoint, SumsOfSquares} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {computeSumOfSquaresAndMaybeUpdateBestMetric} from "../../../../../src/scripts/popularityMetricLfc/bestMetric/sumOfSquares"
import {bestMetrics} from "../../../../../src/scripts/popularityMetricLfc/globals"
import {
    computeUnpopularities,
    LfcUnpopularityEstimate,
    PopularityParameterId,
    Submetric,
} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import * as unpopularities from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares/unpopularities"

describe("computeSumOfSquaresAndMaybeUpdateBestMetric", (): void => {
    const sample = {
        samplePoint: [1, 0] as SamplePoint,
        submetrics: [{
            [PopularityParameterId.SUM]: true,
            [PopularityParameterId.K_AS_POWER_EXPONENT]: 1.469021,
            [PopularityParameterId.J_AS_POWER_EXPONENT]: 1.367326,
        }] as Combination<Submetric>,
    }
    const metricName = "{jAsPowerExponent,kAsPowerExponent,sum}" as Name<Metric>
    const indentation = BLANK
    const onlyBetterThanSopfgtt = true
    const sumsOfSquares = [] as SumsOfSquares
    const spreadDynamicParameters = [PopularityParameterId.A_AS_LOGARITHM_BASE]
    const index = 3 as Index<Sample>

    const options = {
        indentation,
        sumsOfSquares,
        onlyBetterThanSopfgtt,
        metricName,
        index,
    }

    it("updates the best metric when the SoS beats the current best metric", async (): Promise<void> => {
        await computeSumOfSquaresAndMaybeUpdateBestMetric(sample, options)

        const expected = {
            sumOfSquares: 0.007969,
            submetrics: [{
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.K_AS_POWER_EXPONENT]: 1.469021,
                [PopularityParameterId.J_AS_POWER_EXPONENT]: 1.367326,
            }] as Combination<Submetric>,
            name: metricName,
        } as Metric
        expect(bestMetrics.get(metricName)).toBeCloseToObject(expected)
    })

    it("saves the spread dynamic parameters with the metric, if any", async (): Promise<void> => {
        await computeSumOfSquaresAndMaybeUpdateBestMetric(sample, {...options, spreadDynamicParameters})

        const expected = {
            sumOfSquares: 0.007969,
            submetrics: [{
                [PopularityParameterId.SUM]: true,
                [PopularityParameterId.K_AS_POWER_EXPONENT]: 1.469021,
                [PopularityParameterId.J_AS_POWER_EXPONENT]: 1.367326,
            }] as Combination<Submetric>,
            name: metricName,
            spreadDynamicParameters,
        } as Metric
        expect(bestMetrics.get(metricName)).toBeCloseToObject(expected)
    })

    it("schedules the work according to the index", async (): Promise<void> => {
        spyOn(doOnNextEventLoop, "doOnNextEventLoop")

        await computeSumOfSquaresAndMaybeUpdateBestMetric(sample, options)

        expect(doOnNextEventLoop.doOnNextEventLoop).toHaveBeenCalledWith(
            jasmine.anything(),
            index as number as Ms,
        )
    })

    it("sets the sum of squares at the sample point", async (): Promise<void> => {
        await computeSumOfSquaresAndMaybeUpdateBestMetric(sample, options)

        expect(dig(sumsOfSquares as Obj, [1, 0] as KeyPath)).toBeCloseToTyped(0.007969)
    })

    it("survives an error when computing sum of squares, but sets nothing", async (): Promise<void> => {
        spyOn(unpopularities, "computeUnpopularities").and.returnValue([
            {
                antivotes: 0 as Grade<LfcUnpopularityEstimate>,
                two3FreeClass: {
                    monzo: EMPTY_MONZO as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                index: 0 as Index<LfcUnpopularityEstimate>,
            },
            {
                antivotes: NaN as Grade<LfcUnpopularityEstimate>,
                two3FreeClass: {
                    monzo: [0, 0, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                index: 0 as Index<LfcUnpopularityEstimate>,
            },
            {
                antivotes: 8 as Grade<LfcUnpopularityEstimate>,
                two3FreeClass: {
                    monzo: [0, 0, 0, 1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                index: 0 as Index<LfcUnpopularityEstimate>,
            },
        ])

        await computeSumOfSquaresAndMaybeUpdateBestMetric(sample, options)

        expect(dig(sumsOfSquares as Obj, [1, 0] as KeyPath)).toBeUndefined()
        expect(bestMetrics.get(metricName)).toBeUndefined()
    })
})
