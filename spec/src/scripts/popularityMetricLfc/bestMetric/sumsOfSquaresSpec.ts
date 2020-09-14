import { Combination } from "../../../../../src/general"
import { MetricName, SumOfSquares, SumsOfSquares } from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import { SamplePoint } from "../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples"
import { computeSumsOfSquaresAndMaybeUpdateBestMetric } from "../../../../../src/scripts/popularityMetricLfc/bestMetric/sumsOfSquares"
import { bestMetrics } from "../../../../../src/scripts/popularityMetricLfc/globals"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeSumsOfSquaresAndMaybeUpdateBestMetric", (): void => {
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

    beforeEach((): void => {
        bestMetrics.clear()
    })

    it("finds the sums of squares for each sample", async (): Promise<void> => {
        const actual = await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, { metricName })

        const expected = [
            [
                0.013989 as SumOfSquares,
                0.014131 as SumOfSquares,
            ],
            [
                0.031710 as SumOfSquares,
                0.013983 as SumOfSquares, // best!
            ],
        ] as SumsOfSquares
        expect(actual).toBeArrayWithDeepCloseContents(expected)
    })

    it("sets the best metric when it beats it", async (): Promise<void> => {
        bestMetrics.set(
            metricName,
            {
                sumOfSquares: 0.014000 as SumOfSquares,
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
            sumOfSquares: 0.013983 as SumOfSquares,
            name: "{aAsCoefficient,sum,w}" as MetricName,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        }
        expect(bestMetrics.get(metricName)).toBeCloseToObject(expected)
    })

    it("does not set the best metric when it does not beat it", async (): Promise<void> => {
        bestMetrics.set(
            metricName,
            {
                sumOfSquares: 0.012000 as SumOfSquares,
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
            sumOfSquares: 0.012000 as SumOfSquares,
            name: "" as MetricName,
            submetrics: [{
                [ Parameter.SUM ]: true,
                [ Parameter.A_AS_COEFFICIENT ]: 2 as ParameterValue,
                [ Parameter.W ]: 1.5 as ParameterValue,
            }] as Combination<Submetric>,
        }
        expect(bestMetrics.get(metricName)).toBeCloseToObject(expected)
    })

    // TODO: test - rejecting if example one's parameter combinations are invalid
})
