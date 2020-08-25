import { Resolution, Span } from "../../../../../src/general"
import { unpopularityMetricSettings } from "../../../../../src/scripts/unpopularityMetric/globals"
import { computeDynamicParameterScopeForPerfecting } from "../../../../../src/scripts/unpopularityMetric/perfecter/dynamicParameterScope"
import { ParameterValue } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("computeDynamicParameterScopeForPerfecting", () => {
    it("takes the given parameter value and makes a scope the size of the max unit for the best (not perfect) non-recursive run, and starts off doing a trinary (resolution 3) subdivision of it so that it includes the middle point but then also some other points that might be better", () => {
        const parameterValue = 0.5 as ParameterValue

        const actual = computeDynamicParameterScopeForPerfecting(parameterValue)

        const expected = {
            center: 0.5 as ParameterValue,
            span: unpopularityMetricSettings.maxUnit as number as Span<ParameterValue>,
            resolution: 3 as Resolution<ParameterValue>,
        }
        expect(actual).toEqual(expected)
    })
})
