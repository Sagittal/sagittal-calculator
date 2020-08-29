import { Count } from "../../../../../../src/general"
import { Scope } from "../../../../../../src/scripts/lfc/bestMetric"
import * as nonRecursiveBestMetric
    from "../../../../../../src/scripts/lfc/bestMetric/nonRecursiveBestMetric"
import { scopesToSearch, solverStatus } from "../../../../../../src/scripts/lfc/globals"
import { searchPopulatedScopes } from "../../../../../../src/scripts/lfc/solver/search/populatedScopes"
import { Parameter } from "../../../../../../src/scripts/lfc/sumOfSquares"

describe("searchPopulatedScopes", () => {
    const scope = [{ [ Parameter.MAX ]: true }] as Scope
    const otherScope = [{ [ Parameter.A_AS_COEFFICIENT ]: 2 }] as Scope

    beforeEach(() => {
        solverStatus.searchedScopeCount = 155 as Count<Scope>
        scopesToSearch.push(otherScope)
        scopesToSearch.push(scope)
    })

    it("increments the count of scopes which have been searched", async () => {
        await searchPopulatedScopes()

        expect(solverStatus.searchedScopeCount).toBe(156 as Count<Scope>)
    })

    it("removes the searched scope from the stack", async () => {
        await searchPopulatedScopes()

        expect(scopesToSearch).toEqual([otherScope])
    })

    it("does those things even if there is an error while searching the scope", async () => {
        spyOn(nonRecursiveBestMetric, "nonRecursiveSearchScopeAndMaybeUpdateBestMetric").and.throwError("something")

        await searchPopulatedScopes()

        expect(scopesToSearch).toEqual([otherScope])
        expect(solverStatus.searchedScopeCount).toBe(156 as Count<Scope>)
    })

    it("searches the scope it pops off the stack", async () => {
        spyOn(nonRecursiveBestMetric, "nonRecursiveSearchScopeAndMaybeUpdateBestMetric").and.callThrough()

        await searchPopulatedScopes()

        expect(nonRecursiveBestMetric.nonRecursiveSearchScopeAndMaybeUpdateBestMetric).toHaveBeenCalledWith(scope)
    })
})
