import { Index, Unit } from "../../../../../src/general"
import { Combination } from "../../../../../src/general/math"
import * as bestMetric from "../../../../../src/scripts/unpopularityMetric/bestMetric/bestMetric"
import { searchNextLocalMinimum } from "../../../../../src/scripts/unpopularityMetric/bestMetric/nextLocalMinimum"
import { DynamicParameter, SamplePoint } from "../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples"
import { LocalMinimum, Scope, SumOfSquares } from "../../../../../src/scripts/unpopularityMetric/bestMetric/types"
import { Parameter, ParameterValue, Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("searchNextLocalMinimum", () => {
    const nextLocalMinimum: LocalMinimum = {
        sumOfSquares: 0.006454 as SumOfSquares,
        samplePoint: [3, 7, 1] as unknown as SamplePoint,
        submetrics: [{
            [ Parameter.K_AS_COEFFICIENT ]: 0.4,
            [ Parameter.A_AS_COEFFICIENT ]: 2.1,
            [ Parameter.W ]: 1.3,
        }] as unknown as Combination<Submetric>,
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
    const scope: Scope = [{}] as unknown as Scope
    const index = 7
    const progressMessage = ""
    const indentation = ""
    const nextDepth = 5
    const localMinimum = {
        sumOfSquares: 0.0074849 as SumOfSquares,
        samplePoint: [8, 8, 8] as unknown as SamplePoint,
        submetrics: [{
            [ Parameter.K_AS_COEFFICIENT ]: 0.43,
            [ Parameter.A_AS_COEFFICIENT ]: 2.14,
            [ Parameter.W ]: 1.31,
        }] as unknown as Combination<Submetric>,
    }
    const nextLocalMinima = [{}, {}, {}, {}, {}, {}, {}, {}, {}] as LocalMinimum[]
    const topLevelScopeTimer = { timedOut: false }
    const onlyWinners = false
    const timer = setTimeout(() => {}, 0) // todo seems like a ton of this test setup might not be necessary with reasonable default param values

    beforeEach(() => {
        spyOn(bestMetric, "searchScopeAndMaybeUpdateBestMetric")
    })

    // TODO: test the scheduling (by index)

    // TODO: test the error catching

    // TODO: test the timing out of searches

    it("when not recursively searching, it does not continue searching", async () => {
        const recurse = false

        await searchNextLocalMinimum(nextLocalMinimum, {
            dynamicParameters,
            scope,
            progressMessage,
            index,
            indentation,
            nextDepth,
            recurse,
            localMinimum,
            nextLocalMinima,
            topLevelScopeTimer,
            onlyWinners,
            timer,
        })

        expect(bestMetric.searchScopeAndMaybeUpdateBestMetric).not.toHaveBeenCalled()
    })

    it("when recursively searching, it continues searching", async () => {
        const recurse = true

        await searchNextLocalMinimum(nextLocalMinimum, {
            dynamicParameters,
            scope,
            progressMessage,
            index,
            indentation,
            nextDepth,
            recurse,
            localMinimum,
            nextLocalMinima,
            topLevelScopeTimer,
            onlyWinners,
            timer,
        })

        expect(bestMetric.searchScopeAndMaybeUpdateBestMetric).toHaveBeenCalledWith(
            [
                {
                    [ Parameter.K_AS_COEFFICIENT ]: { center: undefined, span: 0.06666666666666667, resolution: 2 },
                    [ Parameter.A_AS_COEFFICIENT ]: { center: undefined, span: 0.6666666666666666, resolution: 7 },
                    [ Parameter.W ]: { center: 1.4, span: 0.06666666666666667, resolution: 2 },
                },
            ] as unknown as Scope,
            {
                depth: nextDepth,
                progressMessage: "8/9@depth5 ",
                localMinimum: nextLocalMinimum,
                recurse: true,
                onlyWinners: false,
                topLevelScopeTimer,
                timer,
            },
        )
    })

    it("when recursively searching, but the next local minimum is equivalent to the current local minimum, it does not continue searching", async () => {
        const recurse = true
        const localMinimum = {
            sumOfSquares: 0.006454 as SumOfSquares,
            samplePoint: [3, 7, 1] as unknown as SamplePoint,
            submetrics: [{
                [ Parameter.K_AS_COEFFICIENT ]: 0.4,
                [ Parameter.A_AS_COEFFICIENT ]: 2.1,
                [ Parameter.W ]: 1.3,
            }] as unknown as Combination<Submetric>,
        }

        await searchNextLocalMinimum(nextLocalMinimum, {
            dynamicParameters,
            scope,
            progressMessage,
            index,
            indentation,
            nextDepth,
            recurse,
            localMinimum,
            nextLocalMinima,
            topLevelScopeTimer,
            onlyWinners,
            timer,
        })

        expect(bestMetric.searchScopeAndMaybeUpdateBestMetric).not.toHaveBeenCalled()
    })
})
