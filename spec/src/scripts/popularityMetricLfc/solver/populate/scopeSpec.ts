import {Count} from "../../../../../../src/general"
import {cleanArray} from "../../../../../../src/general/code/cleanArray"
import {Scope} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {scopesToSearch, solverStatus} from "../../../../../../src/scripts/popularityMetricLfc/globals"
import {populateScope} from "../../../../../../src/scripts/popularityMetricLfc/solver/populate/scope"
import {PopularityParameterId} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("populateScope", (): void => {
    it("adds the scope to the stack and increments the count of the total ever populated", (): void => {
        const scope: Scope = [{[PopularityParameterId.SUM]: true}] as Scope

        const alreadyPopulatedScope: Scope = [{[PopularityParameterId.COUNT]: true}] as Scope
        cleanArray(scopesToSearch)
        scopesToSearch.push(alreadyPopulatedScope)
        solverStatus.populatedScopeCount = 5 as Count<Scope>

        populateScope(scope)

        expect(scopesToSearch).toEqual([alreadyPopulatedScope, scope])
        expect(solverStatus.populatedScopeCount).toEqual(6 as Count<Scope>)
    })

    it("works if its the first scope", (): void => {
        const scope: Scope = [] as unknown[] as Scope

        cleanArray(scopesToSearch)

        populateScope(scope)

        expect(scopesToSearch).toEqual([scope])
        expect(solverStatus.populatedScopeCount).toEqual(1 as Count<Scope>)
    })
})
