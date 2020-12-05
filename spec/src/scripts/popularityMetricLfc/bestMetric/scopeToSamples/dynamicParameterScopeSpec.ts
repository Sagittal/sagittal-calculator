import {DynamicParameterScope, Ed, Max, Min, Parameter, Window} from "@sagittal/general"
import {computeDynamicParameterScope} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"

describe("computeDynamicParameterScope", (): void => {
    const expectedDynamicParameterScope: DynamicParameterScope = {
        center: -1 as Parameter,
        window: 2 as Window<{of: Parameter}>,
        ed: 20 as Ed<{of: Parameter}>,
    }

    it("given a min and a max computes the correct dynamic parameter scope", (): void => {
        const min = -2 as Min<Parameter>
        const max = 0 as Max<Parameter>

        const actual = computeDynamicParameterScope({min, max})

        expect(actual).toEqual(expectedDynamicParameterScope)
    })

    it("given a center and a window computes the correct dynamic parameter scope", (): void => {
        const center = -1 as Parameter
        const window = 2 as Window<{of: Parameter}>

        const actual = computeDynamicParameterScope({center, window})

        expect(actual).toEqual(expectedDynamicParameterScope)
    })

    it("given a min and a window computes the correct dynamic parameter scope", (): void => {
        const min = -2 as Min<Parameter>
        const window = 2 as Window<{of: Parameter}>

        const actual = computeDynamicParameterScope({min, window})

        expect(actual).toEqual(expectedDynamicParameterScope)
    })

    it("given a max and a window computes the correct dynamic parameter scope", (): void => {
        const max = 0 as Max<Parameter>
        const window = 2 as Window<{of: Parameter}>

        const actual = computeDynamicParameterScope({max, window})

        expect(actual).toEqual(expectedDynamicParameterScope)
    })

    it("given a min and a center computes the correct dynamic parameter scope", (): void => {
        const min = -2 as Min<Parameter>
        const center = -1 as Parameter

        const actual = computeDynamicParameterScope({min, center})

        expect(actual).toEqual(expectedDynamicParameterScope)
    })

    it("given a max and a center computes the correct dynamic parameter scope", (): void => {
        const max = 0 as Max<Parameter>
        const center = -1 as Parameter

        const actual = computeDynamicParameterScope({max, center})

        expect(actual).toEqual(expectedDynamicParameterScope)
    })

    it("given only a min, errors", (): void => {
        const min = -2 as Min<Parameter>

        expect((): void => {
            computeDynamicParameterScope({min})
        }).toThrowError("Exactly 2 options should be provided from min, max, center, and window in order to compute a dynamic parameter scope; 1 provided (min -2)")
    })

    it("given only a max, errors", (): void => {
        const max = 0 as Max<Parameter>

        expect((): void => {
            computeDynamicParameterScope({max})
        }).toThrowError("Exactly 2 options should be provided from min, max, center, and window in order to compute a dynamic parameter scope; 1 provided (max 0)")
    })

    it("given only a max, errors", (): void => {
        const window = 2 as Window<{of: Parameter}>

        expect((): void => {
            computeDynamicParameterScope({window})
        }).toThrowError("Exactly 2 options should be provided from min, max, center, and window in order to compute a dynamic parameter scope; 1 provided (window 2)")
    })

    it("given only a max, errors", (): void => {
        const center = -1 as Parameter

        expect((): void => {
            computeDynamicParameterScope({center})
        }).toThrowError("Exactly 2 options should be provided from min, max, center, and window in order to compute a dynamic parameter scope; 1 provided (center -1)")
    })

    it("given more than two options, errors", (): void => {
        const min = -2 as Min<Parameter>
        const max = 0 as Max<Parameter>
        const center = -1 as Parameter
        const window = 2 as Window<{of: Parameter}>

        expect((): void => {
            computeDynamicParameterScope({min, max, center, window})
        }).toThrowError("Exactly 2 options should be provided from min, max, center, and window in order to compute a dynamic parameter scope; 4 provided (min -2, max 0, center -1, window 2)")
    })
})
