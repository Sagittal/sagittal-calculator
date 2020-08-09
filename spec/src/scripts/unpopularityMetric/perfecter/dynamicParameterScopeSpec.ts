import { Resolution, Span } from "../../../../../src/general"
import { MAXIMUM_UNIT } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { computeDynamicParameterScopeForPerfecting } from "../../../../../src/scripts/unpopularityMetric/perfecter/dynamicParameterScope"
import { ParameterValue } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("computeDynamicParameterScopeForPerfecting", () => {
    it("takes the given parameter value and makes a scope the size of the maximum unit for the best (not perfect) non-recursive run, and starts off doing a binary (resolution 2) subdivision of it", () => {
        const parameterValue = 0.5 as ParameterValue

        const result = computeDynamicParameterScopeForPerfecting(parameterValue)

        expect(result).toEqual({
            center: 0.5 as ParameterValue,
            span: MAXIMUM_UNIT as number as Span<ParameterValue>,
            resolution: 2 as Resolution<ParameterValue>,
        })
    })
})
