import { Count } from "../../../../../../src/general"
import { cleanArray } from "../../../../../../src/general/code/cleanArray"
import { Scope } from "../../../../../../src/scripts/unpopularityMetric/bestMetric"
import { scopesToSearch, solverStatus } from "../../../../../../src/scripts/unpopularityMetric/globals"
import { populateScope } from "../../../../../../src/scripts/unpopularityMetric/solver/populate/scope"
import { Parameter } from "../../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("populateScope", () => {
    it("adds the scope to the stack and increments the count of the total ever populated", () => {
        const scope: Scope = [{ [ Parameter.SUM ]: true }] as Scope

        const alreadyPopulatedScope: Scope = [{ [ Parameter.COUNT ]: true }] as Scope
        cleanArray(scopesToSearch)
        scopesToSearch.push(alreadyPopulatedScope)
        solverStatus.populatedScopeCount = 5 as Count<Scope>

        populateScope(scope)

        expect(scopesToSearch).toEqual([alreadyPopulatedScope, scope])
        expect(solverStatus.populatedScopeCount).toEqual(6 as Count<Scope>)
    })

    it("works if its the first scope", () => {
        const scope: Scope = [] as unknown[] as Scope

        cleanArray(scopesToSearch)

        populateScope(scope)

        expect(scopesToSearch).toEqual([scope])
        expect(solverStatus.populatedScopeCount).toEqual(1 as Count<Scope>)
    })
})
