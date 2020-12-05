import {Ed, Parameter, Window} from "@sagittal/general"
import {computeEqualDivision} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples/equalDivision"

describe("computeEqualDivision", (): void => {
    const expected = 5 as Ed<{of: Parameter}>

    it("returns the ED required so that the unit will be no larger then the max parameter unit", (): void => {
        const window: Window<{of: Parameter}> = 0.5 as Window<{of: Parameter}>

        const actual = computeEqualDivision(window)

        expect(actual).toBe(expected)
    })

    it("rounds up, even if it is closer to a smaller ED, because that would otherwise result in something just above the max parameter unit", (): void => {
        const window: Window<{of: Parameter}> = 0.491 as Window<{of: Parameter}>

        const actual = computeEqualDivision(window)

        expect(actual).toBe(expected)
    })

    it("disallows ever being less than 2", (): void => {
        const window: Window<{of: Parameter}> = 0.001 as Window<{of: Parameter}>

        const actual = computeEqualDivision(window)

        const expected = 2 as Ed<{of: Parameter}>
        expect(actual).toBe(expected)
    })
})
