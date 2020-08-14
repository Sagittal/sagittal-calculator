import { Resolution, Span } from "../../../../../src/general"
import { computeDynamicParameterScopeForPerfecting } from "../../../../../src/scripts/unpopularityMetric/perfecter/dynamicParameterScope"
import { ParameterValue } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"
import { unpopularityMetricSettings } from "../../../../../src/scripts/unpopularityMetric/globals"

describe("computeDynamicParameterScopeForPerfecting", () => {
    it("takes the given parameter value and makes a scope the size of the maximum unit for the best (not perfect) non-recursive run, and starts off doing a trinary (resolution 3) subdivision of it so that it includes the middle point but then also some other points that might be better", () => {
        const parameterValue = 0.5 as ParameterValue

        const result = computeDynamicParameterScopeForPerfecting(parameterValue)

        expect(result).toEqual({
            center: 0.5 as ParameterValue,
            span: unpopularityMetricSettings.maximumUnit as number as Span<ParameterValue>,
            resolution: 3 as Resolution<ParameterValue>,
        })
    })
})
