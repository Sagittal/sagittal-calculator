import { Combination } from "../../../../../src/general"
import { MetricName, SumOfSquares, SumsOfSquares } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { SamplePoint } from "../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples"
import { computeSumsOfSquaresAndMaybeUpdateBestMetric } from "../../../../../src/scripts/unpopularityMetric/bestMetric/sumsOfSquares"
import { bestMetrics } from "../../../../../src/scripts/unpopularityMetric/globals"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("computeSumsOfSquaresAndMaybeUpdateBestMetric", () => {
    const metricName = "{aAsCoefficient,sum,w}" as MetricName
    const samples = [
        {
            samplePoint: [0, 0] as SamplePoint,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 1 as ParameterValue,
                [ Parameter.W ]: 0.5 as ParameterValue,
            }] as Combination<Submetric>,
        },
        {
            samplePoint: [0, 1] as SamplePoint,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 0.5 as ParameterValue,
            }] as Combination<Submetric>,
        },
        {
            samplePoint: [1, 0] as SamplePoint,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 1 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        },
        {
            samplePoint: [1, 1] as SamplePoint,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        },
    ]

    beforeEach(() => {
        bestMetrics.clear()
    })

    it("finds the sums of squares for each sample", async () => {
        const actual = await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, { metricName })

        const expected = [
            [
                0.013989168754342854 as SumOfSquares,
                0.014131740093722655 as SumOfSquares,
            ],
            [
                0.031710642770840390 as SumOfSquares,
                0.013983040590027893 as SumOfSquares, // best!
            ],
        ] as SumsOfSquares
        expect(actual).toEqual(expected)
    })

    it("sets the best metric when it beats it", async () => {
        bestMetrics.set(
            metricName,
            {
                sumOfSquares: 0.01400000000000 as SumOfSquares,
                name: "" as MetricName,
                submetrics: [{
                    [ Parameter.SUM ]: true,
                    [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                    [ Parameter.W ]: 1.5 as ParameterValue,
                }] as Combination<Submetric>,
            },
        )

        await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, { metricName })

        const expected = {
            sumOfSquares: 0.013983040590027893 as SumOfSquares,
            name: "{aAsCoefficient,sum,w}" as MetricName,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        }
        expect(bestMetrics.get(metricName)).toEqual(expected)
    })

    it("does not set the best metric when it does not beat it", async () => {
        bestMetrics.set(
            metricName,
            {
                sumOfSquares: 0.01200000000000 as SumOfSquares,
                name: "" as MetricName,
                submetrics: [{
                    [ Parameter.SUM ]: true,
                    [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                    [ Parameter.W ]: 1.5 as ParameterValue,
                }] as Combination<Submetric>,
            },
        )

        await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, { metricName })

        const expected = {
            sumOfSquares: 0.01200000000000 as SumOfSquares,
            name: "" as MetricName,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        }
        expect(bestMetrics.get(metricName)).toEqual(expected)
    })

    // TODO: test - rejecting if example one's parameter combinations are invalid
})
