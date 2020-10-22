import {Ed, integerDivide, Window} from "../../../../../../src/general"
import {DynamicParameterScope} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {computeParameterValues} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples/parameterValues"
import {ParameterValue} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeParameterValues", (): void => {
    it("given a parameter scope (a center, a window, and a ED), will return a block of points to sample", (): void => {
        const parameterScope: DynamicParameterScope = {
            center: 1 as ParameterValue,
            window: 0.5 as Window<ParameterValue>,
            ed: 5 as Ed<ParameterValue>,
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
        expect(actual.length).toBe(parameterScope.ed as number)
        expect(actual[actual.length - 1] - actual[0]).toBe(parameterScope.window as number)
        expect(actual[integerDivide(actual.length, 2)] as number).toBe(parameterScope.center as number)
    })

    it("works when the ED is even", (): void => {
        const parameterScope: DynamicParameterScope = {
            center: 5 as ParameterValue,
            window: 1 as Window<ParameterValue>,
            ed: 4 as Ed<ParameterValue>,
        }

        const actual = computeParameterValues(parameterScope)

        const expected = [
            4.5,
            4.833333,
            5.166666,
            5.5,
        ] as ParameterValue[]
        expect(actual).toBeCloseToArray(expected)
        expect(actual.length).toBe(parameterScope.ed as number)
        expect(actual[actual.length - 1] - actual[0]).toBe(parameterScope.window as number)
        expect(
            (
                actual[integerDivide(actual.length, 2)] +
                actual[integerDivide(actual.length, 2) - 1]
            )
            /
            2,
        ).toBeCloseToTyped(parameterScope.center as number)
    })

    it("works when the ED is one", (): void => {
        const parameterScope: DynamicParameterScope = {
            center: 5 as ParameterValue,
            ed: 1 as Ed<ParameterValue>,
        }

        const actual = computeParameterValues(parameterScope)

        const expected = [
            5,
        ] as ParameterValue[]
        expect(actual).toEqual(expected)
        expect(actual.length).toBe(parameterScope.ed as number)
        expect(actual[integerDivide(actual.length, 2)] as number).toBe(parameterScope.center as number)
    })

    it("works when the ED is zero", (): void => {
        const parameterScope: DynamicParameterScope = {
            ed: 0 as Ed<ParameterValue>,
        }

        const actual = computeParameterValues(parameterScope)

        const expected: ParameterValue[] = []
        expect(actual).toEqual(expected)
        expect(actual.length).toBe(parameterScope.ed as number)
    })
})
