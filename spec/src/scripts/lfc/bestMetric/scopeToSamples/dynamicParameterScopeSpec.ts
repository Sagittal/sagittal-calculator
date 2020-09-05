import { Ed, Max, Min, Window } from "../../../../../../src/general"
import { DynamicParameterScope } from "../../../../../../src/scripts/lfc/bestMetric"
import { computeDynamicParameterScope } from "../../../../../../src/scripts/lfc/bestMetric/scopeToSamples"
import { ParameterValue } from "../../../../../../src/scripts/lfc/sumOfSquares"

describe("computeDynamicParameterScope", () => {
    const expectedDynamicParameterScope: DynamicParameterScope = {
        center: -1 as ParameterValue,
        window: 2 as Window<ParameterValue>,
        ed: 20 as Ed<ParameterValue>,
    }

    it("given a min and a max computes the correct dynamic parameter scope", () => {
        const min = -2 as Min<ParameterValue>
        const max = 0 as Max<ParameterValue>

        const actual = computeDynamicParameterScope({ min, max })

        expect(actual).toEqual(expectedDynamicParameterScope)
    })

    it("given a center and a window computes the correct dynamic parameter scope", () => {
        const center = -1 as ParameterValue
        const window = 2 as Window<ParameterValue>

        const actual = computeDynamicParameterScope({ center, window })

        expect(actual).toEqual(expectedDynamicParameterScope)
    })

    it("given a min and a window computes the correct dynamic parameter scope", () => {
        const min = -2 as Min<ParameterValue>
        const window = 2 as Window<ParameterValue>

        const actual = computeDynamicParameterScope({ min, window })

        expect(actual).toEqual(expectedDynamicParameterScope)
    })

    it("given a max and a window computes the correct dynamic parameter scope", () => {
        const max = 0 as Max<ParameterValue>
        const window = 2 as Window<ParameterValue>

        const actual = computeDynamicParameterScope({ max, window })

        expect(actual).toEqual(expectedDynamicParameterScope)
    })

    it("given a min and a center computes the correct dynamic parameter scope", () => {
        const min = -2 as Min<ParameterValue>
        const center = -1 as ParameterValue

        const actual = computeDynamicParameterScope({ min, center })

        expect(actual).toEqual(expectedDynamicParameterScope)
    })

    it("given a max and a center computes the correct dynamic parameter scope", () => {
        const max = 0 as Max<ParameterValue>
        const center = -1 as ParameterValue

        const actual = computeDynamicParameterScope({ max, center })

        expect(actual).toEqual(expectedDynamicParameterScope)
    })

    it("given only a min, errors", () => {
        const min = -2 as Min<ParameterValue>

        expect(() => computeDynamicParameterScope({ min })).toThrowError("Exactly 2 options should be provided from min, max, center, and window in order to compute a dynamic parameter scope; 1 provided (min -2)")
    })

    it("given only a max, errors", () => {
        const max = 0 as Max<ParameterValue>

        expect(() => computeDynamicParameterScope({ max })).toThrowError("Exactly 2 options should be provided from min, max, center, and window in order to compute a dynamic parameter scope; 1 provided (max 0)")
    })

    it("given only a max, errors", () => {
        const window = 2 as Window<ParameterValue>

        expect(() => computeDynamicParameterScope({ window })).toThrowError("Exactly 2 options should be provided from min, max, center, and window in order to compute a dynamic parameter scope; 1 provided (window 2)")
    })

    it("given only a max, errors", () => {
        const center = -1 as ParameterValue

        expect(() => computeDynamicParameterScope({ center })).toThrowError("Exactly 2 options should be provided from min, max, center, and window in order to compute a dynamic parameter scope; 1 provided (center -1)")
    })

    it("given more than two options, errors", () => {
        const min = -2 as Min<ParameterValue>
        const max = 0 as Max<ParameterValue>
        const center = -1 as ParameterValue
        const window = 2 as Window<ParameterValue>

        expect(() => computeDynamicParameterScope({
            min,
            max,
            center,
            window,
        })).toThrowError("Exactly 2 options should be provided from min, max, center, and window in order to compute a dynamic parameter scope; 4 provided (min -2, max 0, center -1, window 2)")
    })
})
