import { Ed, Window } from "../../../../../src/general"
import { lfcScriptGroupSettings } from "../../../../../src/scripts/lfc/globals"
import { computeDynamicParameterScopeForPerfecting } from "../../../../../src/scripts/lfc/perfecter/dynamicParameterScope"
import { ParameterValue } from "../../../../../src/scripts/lfc/sumOfSquares"

describe("computeDynamicParameterScopeForPerfecting", () => {
    it("takes the given parameter value and makes a scope the size of the max unit for the best (not perfect) non-recursive run, and starts off doing a trinary (ED 3) subdivision of it so that it includes the middle point but then also some other points that might be better", () => {
        const parameterValue = 0.5 as ParameterValue

        const actual = computeDynamicParameterScopeForPerfecting(parameterValue)

        const expected = {
            center: 0.5 as ParameterValue,
            window: lfcScriptGroupSettings.maxUnit as number as Window<ParameterValue>,
            ed: 3 as Ed<ParameterValue>,
        }
        expect(actual).toEqual(expected)
    })
})
