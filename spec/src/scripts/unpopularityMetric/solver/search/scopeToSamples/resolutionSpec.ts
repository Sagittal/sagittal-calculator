import { computeResolution } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/resolution"
import { DynamicParameterValue } from "../../../../../../../src/scripts/unpopularityMetric/types"
import { Resolution, Span } from "../../../../../../../src/utilities/types"

describe("computeResolution", () => {
    it("returns the resolution required so that the unit will be no larger then the maximum parameter unit", () => {
        const range: Span<DynamicParameterValue> = 0.05 as Span<DynamicParameterValue> // todo: maybe this is a Range<DynamicParameterValue>, as is a Unit... or a Span<>

        const result = computeResolution(range)

        expect(result).toBe(5 as Resolution<DynamicParameterValue>)
    })

    it("rounds up, even if it is closer to a smaller resolution, because that would otherwise result in something just above the maximum parameter unit", () => {
        const range: Span<DynamicParameterValue> = 0.0491 as Span<DynamicParameterValue>

        const result = computeResolution(range)

        expect(result).toBe(5 as Resolution<DynamicParameterValue>)
    })
})
