import {
    SampleRange,
    SampleResolution,
} from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/types"
import { computeResolution } from "../../../../../../../src/scripts/unpopularityMetric/solver/search/scopeToSamples/resolution"

describe("computeResolution", () => {
    it("returns the resolution required so that the unit will be no larger then the maximum parameter unit", () => {
        const range: SampleRange = 0.05 as SampleRange // todo: maybe this is a Range<DynamicParameterValue>, as is a Unit... or a Span<>

        const result = computeResolution(range)

        expect(result).toBe(5 as SampleResolution)
    })

    it("rounds up, even if it is closer to a smaller resolution, because that would otherwise result in something just above the maximum parameter unit", () => {
        const range: SampleRange = 0.0491 as SampleRange

        const result = computeResolution(range)

        expect(result).toBe(5 as SampleResolution)
    })
})
