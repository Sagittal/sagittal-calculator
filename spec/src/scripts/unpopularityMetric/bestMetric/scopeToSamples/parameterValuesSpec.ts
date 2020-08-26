import { floor, Resolution, Span } from "../../../../../../src/general"
import { DynamicParameterScope } from "../../../../../../src/scripts/unpopularityMetric/bestMetric"
import { computeParameterValues } from "../../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples/parameterValues"
import { ParameterValue } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("computeParameterValues", () => {
    it("given a parameter scope (a center, a span, and a resolution), will return a block of points to sample", () => {
        const parameterScope: DynamicParameterScope = {
            center: 1 as ParameterValue,
            span: 0.5 as Span<ParameterValue>,
            resolution: 5 as Resolution<ParameterValue>,
        }

        const actual: ParameterValue[] = computeParameterValues(parameterScope)

        const expected = [
            0.75,
            0.875,
            1.0,
            1.125,
            1.25,
        ] as ParameterValue[]
        expect(actual).toEqual(expected)
        expect(actual.length).toBe(parameterScope.resolution as number)
        expect(actual[ actual.length - 1 ] - actual[ 0 ]).toBe(parameterScope.span as number)
        expect(actual[ floor(actual.length / 2) ] as number).toBe(parameterScope.center as number)
    })

    it("works when the resolution is even", () => {
        const parameterScope: DynamicParameterScope = {
            center: 5 as ParameterValue,
            span: 1 as Span<ParameterValue>,
            resolution: 4 as Resolution<ParameterValue>,
        }

        const actual = computeParameterValues(parameterScope)

        const expected = [
            4.5,
            4.833333333333333333,
            5.166666666666666666,
            5.5,
        ] as ParameterValue[]
        expect(actual).toEqual(expected)
        expect(actual.length).toBe(parameterScope.resolution as number)
        expect(actual[ actual.length - 1 ] - actual[ 0 ]).toBe(parameterScope.span as number)
        expect(
            (
                actual[ floor(actual.length / 2) ] +
                actual[ floor(actual.length / 2) - 1 ]
            )
            /
            2,
        ).toBe(parameterScope.center as number)
    })

    it("works when the resolution is one", () => {
        const parameterScope: DynamicParameterScope = {
            center: 5 as ParameterValue,
            resolution: 1 as Resolution<ParameterValue>,
        }

        const actual = computeParameterValues(parameterScope)

        const expected = [
            5,
        ] as ParameterValue[]
        expect(actual).toEqual(expected)
        expect(actual.length).toBe(parameterScope.resolution as number)
        expect(actual[ floor(actual.length / 2) ] as number).toBe(parameterScope.center as number)
    })

    it("works when the resolution is zero", () => {
        const parameterScope: DynamicParameterScope = {
            resolution: 0 as Resolution<ParameterValue>,
        }

        const actual = computeParameterValues(parameterScope)

        const expected: ParameterValue[] = []
        expect(actual).toEqual(expected)
        expect(actual.length).toBe(parameterScope.resolution as number)
    })
})
