import {
    DynamicParameterScope,
    DynamicParameterValue,
} from "../../../../../../../src/scripts/unpopularityMetric/types"
import { computeParameterValues } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/parameterValues"
import { Resolution, Span } from "../../../../../../../src/utilities/types"


describe("computeParameterValues", () => {
    it("given a parameter scope (a center, a range, and a resolution), will return a block of points to sample", () => {
        const parameterScope: DynamicParameterScope = {
            center: 1 as DynamicParameterValue,
            range: 0.5 as Span<DynamicParameterValue>,
            resolution: 5 as Resolution<DynamicParameterValue>,
        }

        const result: DynamicParameterValue[] = computeParameterValues(parameterScope)

        expect(result).toEqual([
            0.75,
            0.875,
            1.0,
            1.125,
            1.25,
        ] as DynamicParameterValue[])
        expect(result.length).toBe(parameterScope.resolution as number)
        expect(result[ result.length - 1 ] - result[ 0 ]).toBe(parameterScope.range as number)
        expect(result[ Math.floor(result.length / 2) ] as number).toBe(parameterScope.center as number)
    })

    it("works when the resolution is even", () => {
        const parameterScope: DynamicParameterScope = {
            center: 5 as DynamicParameterValue,
            range: 1 as Span<DynamicParameterValue>,
            resolution: 4 as Resolution<DynamicParameterValue>,
        }

        const result = computeParameterValues(parameterScope)

        expect(result).toEqual([
            4.5,
            4.833333333333333333,
            5.166666666666666666,
            5.5,
        ] as DynamicParameterValue[])
        expect(result.length).toBe(parameterScope.resolution as number)
        expect(result[ result.length - 1 ] - result[ 0 ]).toBe(parameterScope.range as number)
        expect(
            (
                result[ Math.floor(result.length / 2) ] +
                result[ Math.floor(result.length / 2) - 1 ]
            )
            /
            2,
        ).toBe(parameterScope.center as number)
    })

    it("works when the resolution is one", () => {
        const parameterScope: DynamicParameterScope = {
            center: 5 as DynamicParameterValue,
            resolution: 1 as Resolution<DynamicParameterValue>,
        }

        const result = computeParameterValues(parameterScope)

        expect(result).toEqual([
            5,
        ] as DynamicParameterValue[])
        expect(result.length).toBe(parameterScope.resolution as number)
        expect(result[ Math.floor(result.length / 2) ] as number).toBe(parameterScope.center as number)
    })

    it("works when the resolution is zero", () => {
        const parameterScope: DynamicParameterScope = {
            resolution: 0 as Resolution<DynamicParameterValue>,
        }

        const result = computeParameterValues(parameterScope)

        expect(result).toEqual([])
        expect(result.length).toBe(parameterScope.resolution as number)
    })
})
