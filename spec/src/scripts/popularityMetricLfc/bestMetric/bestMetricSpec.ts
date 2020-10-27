import {Combination, Count, Ed, Index, Mean, Name, Step, Window} from "../../../../../src/general"
import {MeanType} from "../../../../../src/general/math"
import {
    Metric,
    nonRecursiveSearchScopeAndMaybeUpdateBestMetric,
    Sample,
    SamplePoint,
    Scope,
    SearchScopeResults,
    SubmetricScope,
    SumOfSquares,
    SumsOfSquares,
} from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {bestMetrics, metricNames, solverStatus} from "../../../../../src/scripts/popularityMetricLfc/globals"
import {Parameter, Submetric} from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"
import {ParameterValue} from "../../../../../src/scripts/types"

describe("nonRecursiveSearchScopeAndMaybeUpdateBestMetric", (): void => {
    const scope = [
        {
            [Parameter.K_AS_COEFFICIENT]: {
                center: 1 as ParameterValue,
                window: 2 as Window<ParameterValue>,
                ed: 2 as Ed<ParameterValue>,
            },
        },
        {
            [Parameter.SUM]: true,
            [Parameter.A_AS_LOGARITHM_BASE]: 2 as ParameterValue,
            [Parameter.J_AS_POWER_EXPONENT]: {
                center: 3 as ParameterValue,
                window: 1 as Window<ParameterValue>,
                ed: 5 as Ed<ParameterValue>,
            },
        },
    ] as Combination<SubmetricScope>
    const metricName = "{aAsLogarithmBase,jAsPowerExponent,sum},{kAsCoefficient}" as Name<Metric>

    it("updates the best metric (only better than SoPF>3 = false so that it will)", async (): Promise<void> => {
        await nonRecursiveSearchScopeAndMaybeUpdateBestMetric(scope, {onlyBetterThanSopfgtt: false})

        expect(bestMetrics.get(metricName))
            .toEqual({
                name: metricName,
                submetrics: [{
                    [Parameter.SUM]: true,
                    [Parameter.A_AS_LOGARITHM_BASE]: 2,
                    [Parameter.J_AS_POWER_EXPONENT]: 2.5,
                    [Parameter.K_AS_COEFFICIENT]: 2,
                }] as Combination<Submetric>,
                sumOfSquares: 0.12122990586015835 as SumOfSquares,
                spreadDynamicParameters: [Parameter.K_AS_COEFFICIENT],
            })
    })

    it("adds the metric name to the list of metric names searched", async (): Promise<void> => {
        await nonRecursiveSearchScopeAndMaybeUpdateBestMetric(scope)

        expect(metricNames).toEqual([metricName])
    })

    it("throws an error if this metric name has already been searched", async (): Promise<void> => {
        metricNames.push(metricName)

        await expectAsync(new Promise(async (resolve: () => void, reject: (e: Error) => void): Promise<void> => {
            try {
                await nonRecursiveSearchScopeAndMaybeUpdateBestMetric(scope)
            } catch (e) {
                reject(e)
            }
            resolve()
        })).toBeRejectedWithError("Already searched equivalent initial scope for {aAsLogarithmBase,jAsPowerExponent,sum},{kAsCoefficient}")
    })

    it("adds to the total sample count", async (): Promise<void> => {
        solverStatus.sampleCount = 54 as Count<Sample>

        await nonRecursiveSearchScopeAndMaybeUpdateBestMetric(scope)

        expect(solverStatus.sampleCount).toBe(64 as Count<Sample>) // 10 new ones, as you can see in a test below
    })

    it("updates the average samples per scope", async (): Promise<void> => {
        solverStatus.sampleCount = 54 as Count<Sample>
        solverStatus.averageSamplesPerScope = 10 as Mean<{of: Count<Sample>, meanType: MeanType.ARITHMETIC}>
        solverStatus.populatedScopeCount = 7 as Count<Scope>

        await nonRecursiveSearchScopeAndMaybeUpdateBestMetric(scope)

        // (54 + 10 = 64) / 7 = 9.14285714286 -> round to 9
        expect(solverStatus.averageSamplesPerScope)
            .toBe(9 as Mean<{of: Count<Sample>, meanType: MeanType.ARITHMETIC}>)
    })

    it("computes the sums of squares and returns them, along with the dynamic parameters, samples computed from the scope, and the metric name", async (): Promise<void> => {
        const actual = await nonRecursiveSearchScopeAndMaybeUpdateBestMetric(scope)

        const expected: SearchScopeResults = {
            dynamicParameters: [
                {
                    submetricIndex: 0 as Index<Submetric>,
                    parameter: Parameter.K_AS_COEFFICIENT,
                    values: [0, 2] as ParameterValue[],
                    unit: 2 as Step<ParameterValue>,
                },
                {
                    submetricIndex: 1 as Index<Submetric>,
                    parameter: Parameter.J_AS_POWER_EXPONENT,
                    values: [2.5, 2.75, 3, 3.25, 3.5] as ParameterValue[],
                    unit: 0.25 as Step<ParameterValue>,
                },
            ],
            samples: [
                {
                    submetrics: [{
                        [Parameter.SUM]: true,
                        [Parameter.A_AS_LOGARITHM_BASE]: 2 as ParameterValue,
                        [Parameter.J_AS_POWER_EXPONENT]: 2.5 as ParameterValue,
                        [Parameter.K_AS_COEFFICIENT]: 0 as ParameterValue,
                    }] as Combination<Submetric>,
                    samplePoint: [0, 0] as SamplePoint,
                },
                {
                    submetrics: [{
                        [Parameter.SUM]: true,
                        [Parameter.A_AS_LOGARITHM_BASE]: 2 as ParameterValue,
                        [Parameter.J_AS_POWER_EXPONENT]: 2.5 as ParameterValue,
                        [Parameter.K_AS_COEFFICIENT]: 2 as ParameterValue,
                    }] as Combination<Submetric>,
                    samplePoint: [1, 0] as SamplePoint,
                },
                {
                    submetrics: [{
                        [Parameter.SUM]: true,
                        [Parameter.A_AS_LOGARITHM_BASE]: 2 as ParameterValue,
                        [Parameter.J_AS_POWER_EXPONENT]: 2.75 as ParameterValue,
                        [Parameter.K_AS_COEFFICIENT]: 0 as ParameterValue,
                    }] as Combination<Submetric>,
                    samplePoint: [0, 1] as SamplePoint,
                },
                {
                    submetrics: [{
                        [Parameter.SUM]: true,
                        [Parameter.A_AS_LOGARITHM_BASE]: 2 as ParameterValue,
                        [Parameter.J_AS_POWER_EXPONENT]: 2.75 as ParameterValue,
                        [Parameter.K_AS_COEFFICIENT]: 2 as ParameterValue,
                    }] as Combination<Submetric>,
                    samplePoint: [1, 1] as SamplePoint,
                },
                {
                    submetrics: [{
                        [Parameter.SUM]: true,
                        [Parameter.A_AS_LOGARITHM_BASE]: 2 as ParameterValue,
                        [Parameter.J_AS_POWER_EXPONENT]: 3 as ParameterValue,
                        [Parameter.K_AS_COEFFICIENT]: 0 as ParameterValue,
                    }] as Combination<Submetric>,
                    samplePoint: [0, 2] as SamplePoint,
                },
                {
                    submetrics: [{
                        [Parameter.SUM]: true,
                        [Parameter.A_AS_LOGARITHM_BASE]: 2 as ParameterValue,
                        [Parameter.J_AS_POWER_EXPONENT]: 3 as ParameterValue,
                        [Parameter.K_AS_COEFFICIENT]: 2 as ParameterValue,
                    }] as Combination<Submetric>,
                    samplePoint: [1, 2] as SamplePoint,
                },
                {
                    submetrics: [{
                        [Parameter.SUM]: true,
                        [Parameter.A_AS_LOGARITHM_BASE]: 2 as ParameterValue,
                        [Parameter.J_AS_POWER_EXPONENT]: 3.25 as ParameterValue,
                        [Parameter.K_AS_COEFFICIENT]: 0 as ParameterValue,
                    }] as Combination<Submetric>,
                    samplePoint: [0, 3] as SamplePoint,
                },
                {
                    submetrics: [{
                        [Parameter.SUM]: true,
                        [Parameter.A_AS_LOGARITHM_BASE]: 2 as ParameterValue,
                        [Parameter.J_AS_POWER_EXPONENT]: 3.25 as ParameterValue,
                        [Parameter.K_AS_COEFFICIENT]: 2 as ParameterValue,
                    }] as Combination<Submetric>,
                    samplePoint: [1, 3] as SamplePoint,
                },
                {
                    submetrics: [{
                        [Parameter.SUM]: true,
                        [Parameter.A_AS_LOGARITHM_BASE]: 2 as ParameterValue,
                        [Parameter.J_AS_POWER_EXPONENT]: 3.5 as ParameterValue,
                        [Parameter.K_AS_COEFFICIENT]: 0 as ParameterValue,
                    }] as Combination<Submetric>,
                    samplePoint: [0, 4] as SamplePoint,
                },
                {
                    submetrics: [{
                        [Parameter.SUM]: true,
                        [Parameter.A_AS_LOGARITHM_BASE]: 2 as ParameterValue,
                        [Parameter.J_AS_POWER_EXPONENT]: 3.5 as ParameterValue,
                        [Parameter.K_AS_COEFFICIENT]: 2 as ParameterValue,
                    }] as Combination<Submetric>,
                    samplePoint: [1, 4] as SamplePoint,
                },
            ],
            sumsOfSquares: [
                [
                    0.14072297644163048,
                    0.14072297644163048,
                    0.14072297644163048,
                    0.14072297644163048,
                    0.14072297644163048,
                ],
                [
                    0.12122990586015835,    // Best one, which is why the [1, 0] sample point gets save as best metric
                    0.12368707369426807,
                    0.1264482370332641,
                    0.12702698037159801,
                    0.12702698037159801,
                ],
            ] as SumsOfSquares,
            metricName,
        }
        expect(actual).toEqual(expected)
    })
})
