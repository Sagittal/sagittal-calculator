import { Ed, Window } from "../../../../../../src/general"
import { computeEqualDivision } from "../../../../../../src/scripts/lfc/bestMetric/scopeToSamples/equalDivision"
import { ParameterValue } from "../../../../../../src/scripts/lfc/sumOfSquares"

describe("computeEqualDivision", () => {
    const expected = 5 as Ed<ParameterValue>

    it("returns the ED required so that the unit will be no larger then the max parameter unit", () => {
        const window: Window<ParameterValue> = 0.5 as Window<ParameterValue>

        const actual = computeEqualDivision(window)

        expect(actual).toBe(expected)
    })

    it("rounds up, even if it is closer to a smaller ED, because that would otherwise result in something just above the max parameter unit", () => {
        const window: Window<ParameterValue> = 0.491 as Window<ParameterValue>

        const actual = computeEqualDivision(window)

        expect(actual).toBe(expected)
    })

    it("disallows ever being less than 2", () => {
        const window: Window<ParameterValue> = 0.001 as Window<ParameterValue>

        const actual = computeEqualDivision(window)

        const expected = 2 as Ed<ParameterValue>
        expect(actual).toBe(expected)
    })
})
