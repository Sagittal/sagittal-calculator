import { Index, Integer, IO, Unit } from "../../../../../src/general"
import { Combination } from "../../../../../src/general/math"
import { MetricName, Scope, SumOfSquares } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { DynamicParameter, SamplePoint } from "../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples"
import { searchNextLocalMin } from "../../../../../src/scripts/unpopularityMetric/perfecter/nextLocalMin"
import * as recursiveBestMetric from "../../../../../src/scripts/unpopularityMetric/perfecter/recursiveBestMetric"
import { LocalMin, MetricTag } from "../../../../../src/scripts/unpopularityMetric/perfecter/types"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("searchNextLocalMin", () => {
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
            unit: 0.1 as Unit<ParameterValue>,
        },
        {
            submetricIndex: 0 as Index<Submetric>,
            parameter: Parameter.A_AS_COEFFICIENT,
            values: [1.1, 2.1, 3.1] as ParameterValue[],
            unit: 1 as Unit<ParameterValue>,
        },
        {
            submetricIndex: 0 as Index<Submetric>,
            parameter: Parameter.W,
            values: [1.3, 1.4, 1.5] as ParameterValue[],
            unit: 0.1 as Unit<ParameterValue>,
        },
    ]
    const scope: Scope = [{}] as unknown[] as Scope
    const index = 7
    const metricTag = "" as MetricTag
    const indentation = "" as IO
    const depth = 5 as Integer
    const nextLocalMinima = [{}, {}, {}, {}, {}, {}, {}, {}, {}] as LocalMin[]
    const onlyWinners = true
    const metricName = "" as MetricName

    beforeEach(() => {
        spyOn(recursiveBestMetric, "recursiveSearchScopeAndMaybeUpdateBestMetric")
    })

    // TODO: test - the scheduling (by index)

    // TODO: test - the error catching

    it("it searches the next local min recursively and maybe updates the best metric", async () => {
        await searchNextLocalMin(nextLocalMin, {
            dynamicParameters,
            scope,
            metricTag,
            index,
            indentation,
            depth,
            nextLocalMinima,
            onlyWinners,
            metricName,
        })

        expect(recursiveBestMetric.recursiveSearchScopeAndMaybeUpdateBestMetric).toHaveBeenCalledWith(
            [
                {
                    [ Parameter.K_AS_COEFFICIENT ]: { center: 0.5, span: 0.06666666666666667, resolution: 2 },
                    [ Parameter.A_AS_COEFFICIENT ]: { center: 1.1, span: 0.6666666666666666, resolution: 7 },
                    [ Parameter.W ]: { center: 1.4, span: 0.06666666666666667, resolution: 2 },
                },
            ] as unknown[] as Scope,
            {
                depth: 6 as Integer,
                metricTag: ".8/9" as MetricTag,
                localMin: nextLocalMin,
                onlyWinners,
            },
        )
    })
})
