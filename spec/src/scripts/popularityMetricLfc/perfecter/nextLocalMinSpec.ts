import { BLANK, Index, IntegerDecimal, Ms, Name, Step } from "../../../../../src/general"
import * as doOnNextEventLoop from "../../../../../src/general/code/doOnNextEventLoop"
import { Combination } from "../../../../../src/general/math"
import { Metric, Scope, SumOfSquares } from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import { DynamicParameter, SamplePoint } from "../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples"
import { metricNames } from "../../../../../src/scripts/popularityMetricLfc/globals"
import { searchNextLocalMin } from "../../../../../src/scripts/popularityMetricLfc/perfecter/nextLocalMin"
import * as recursiveBestMetric from "../../../../../src/scripts/popularityMetricLfc/perfecter/perfectMetric"
import { LocalMin, MetricTag } from "../../../../../src/scripts/popularityMetricLfc/perfecter/types"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("searchNextLocalMin", (): void => {
    const nextLocalMin: LocalMin = {
        sumOfSquares: 0.006454 as SumOfSquares,
        samplePoint: [2, 0, 1] as unknown[] as SamplePoint,
        submetrics: [{
            [ Parameter.K_AS_COEFFICIENT ]: 0.4,
            [ Parameter.A_AS_COEFFICIENT ]: 2.1,
            [ Parameter.W ]: 1.3,
        }] as unknown[] as Combination<Submetric>,
    }
    const dynamicParameters: DynamicParameter[] = [
        {
            submetricIndex: 0 as Index<Submetric>,
            parameter: Parameter.K_AS_COEFFICIENT,
            values: [0.3, 0.4, 0.5] as ParameterValue[],
            unit: 0.1 as Step<ParameterValue>,
        },
        {
            submetricIndex: 0 as Index<Submetric>,
            parameter: Parameter.A_AS_COEFFICIENT,
            values: [1.1, 2.1, 3.1] as ParameterValue[],
            unit: 1 as Step<ParameterValue>,
        },
        {
            submetricIndex: 0 as Index<Submetric>,
            parameter: Parameter.W,
            values: [1.3, 1.4, 1.5] as ParameterValue[],
            unit: 0.1 as Step<ParameterValue>,
        },
    ]
    const scope: Scope = [{}] as unknown[] as Scope
    const index = 7
    const metricTag = "" as MetricTag
    const indentation = BLANK
    const depth = 5 as IntegerDecimal
    const nextLocalMinima = [{}, {}, {}, {}, {}, {}, {}, {}, {}] as LocalMin[]
    const onlyBetterThanSopfgtt = true
    const metricName = "{aAsCoefficient,kAsCoefficient,w}" as Name<Metric>

    it("schedules the next call a distance of time into the future proportional to the index of the local mins being searched", async (): Promise<void> => {
        spyOn(doOnNextEventLoop, "doOnNextEventLoop")

        await searchNextLocalMin(nextLocalMin, {
            dynamicParameters,
            scope,
            metricTag,
            index,
            indentation,
            depth,
            nextLocalMinima,
            onlyBetterThanSopfgtt,
            metricName,
        })

        expect(doOnNextEventLoop.doOnNextEventLoop).toHaveBeenCalledWith(
            jasmine.anything(),
            index as Ms,
        )
    })

    it("does not crash if there are errors while searching", async (): Promise<void> => {
        // Setting up for an error because this metric name has already been searched
        metricNames.push(metricName)

        await expectAsync(new Promise(async (resolve: () => void, reject: () => void): Promise<void> => {
            try {
                await searchNextLocalMin(nextLocalMin, {
                    dynamicParameters,
                    scope,
                    metricTag,
                    index,
                    indentation,
                    depth,
                    nextLocalMinima,
                    onlyBetterThanSopfgtt,
                    metricName,
                })
            } catch (e) {
                reject()
            }
            resolve()
        })).not.toBeRejected()
    })

    it("it searches the next local min recursively and maybe updates the best metric", async (): Promise<void> => {
        spyOn(recursiveBestMetric, "recursiveSearchScopeAndMaybeUpdateBestMetric")

        await searchNextLocalMin(nextLocalMin, {
            dynamicParameters,
            scope,
            metricTag,
            index,
            indentation,
            depth,
            nextLocalMinima,
            onlyBetterThanSopfgtt,
            metricName,
        })

        expect(recursiveBestMetric.recursiveSearchScopeAndMaybeUpdateBestMetric).toHaveBeenCalledWith(
            [
                {
                    [ Parameter.K_AS_COEFFICIENT ]: { center: 0.5, window: 0.06666666666666667, ed: 2 },
                    [ Parameter.A_AS_COEFFICIENT ]: { center: 1.1, window: 0.6666666666666666, ed: 7 },
                    [ Parameter.W ]: { center: 1.4, window: 0.06666666666666667, ed: 2 },
                },
            ] as unknown[] as Scope,
            {
                depth: 6 as IntegerDecimal,
                metricTag: ".8/9" as MetricTag,
                localMin: nextLocalMin,
                onlyBetterThanSopfgtt,
            },
        )
    })
})
