import { Resolution, Span } from "../../../../../../src/general"
import { computeResolution } from "../../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples/resolution"
import { ParameterValue } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("computeResolution", () => {
    const expected = 5 as Resolution<ParameterValue>

    it("returns the resolution required so that the unit will be no larger then the maximum parameter unit", () => {
        const span: Span<ParameterValue> = 0.5 as Span<ParameterValue>

        const actual = computeResolution(span)

        expect(actual).toBe(expected)
    })

    it("rounds up, even if it is closer to a smaller resolution, because that would otherwise result in something just above the maximum parameter unit", () => {
        const span: Span<ParameterValue> = 0.491 as Span<ParameterValue>

        const actual = computeResolution(span)

        expect(actual).toBe(expected)
    })

    // TODO: test never being less than 2
})
