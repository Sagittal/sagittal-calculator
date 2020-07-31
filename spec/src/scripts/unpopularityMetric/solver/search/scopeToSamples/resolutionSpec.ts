import { Resolution, Span } from "../../../../../../../src/general"
import { computeResolution } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples"
import { ParameterValue } from "../../../../../../../src/scripts/unpopularityMetric/types"

describe("computeResolution", () => {
    it("returns the resolution required so that the unit will be no larger then the maximum parameter unit", () => {
        const span: Span<ParameterValue> = 0.5 as Span<ParameterValue>

        const result = computeResolution(span)

        expect(result).toBe(5 as Resolution<ParameterValue>)
    })

    it("rounds up, even if it is closer to a smaller resolution, because that would otherwise result in something just above the maximum parameter unit", () => {
        const span: Span<ParameterValue> = 0.491 as Span<ParameterValue>

        const result = computeResolution(span)

        expect(result).toBe(5 as Resolution<ParameterValue>)
    })

    // TODO: test never being less than 2
})
