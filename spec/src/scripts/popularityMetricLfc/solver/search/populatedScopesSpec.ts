import {Count} from "../../../../../../src/general"
import {Scope} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import * as nonRecursiveBestMetric from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/bestMetric"
import {scopesToSearch, solverStatus} from "../../../../../../src/scripts/popularityMetricLfc/globals"
import {searchPopulatedScopes} from "../../../../../../src/scripts/popularityMetricLfc/solver/search/populatedScopes"
import {PopularityParameterId} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("searchPopulatedScopes", (): void => {
    const scope = [{[PopularityParameterId.MAX]: true}] as Scope
    const otherScope = [{[PopularityParameterId.A_AS_COEFFICIENT]: 2}] as Scope

    beforeEach((): void => {
        solverStatus.searchedScopeCount = 155 as Count<Scope>
        scopesToSearch.push(otherScope)
        scopesToSearch.push(scope)
    })

    it("increments the count of scopes which have been searched", async (): Promise<void> => {
        await searchPopulatedScopes()

        expect(solverStatus.searchedScopeCount).toBe(156 as Count<Scope>)
    })

    it("removes the searched scope from the stack", async (): Promise<void> => {
        await searchPopulatedScopes()

        expect(scopesToSearch).toEqual([otherScope])
    })

    it("does those things even if there is an error while searching the scope", async (): Promise<void> => {
        spyOn(nonRecursiveBestMetric, "nonRecursiveSearchScopeAndMaybeUpdateBestMetric").and.throwError("something")

        await searchPopulatedScopes()

        expect(scopesToSearch).toEqual([otherScope])
        expect(solverStatus.searchedScopeCount).toBe(156 as Count<Scope>)
    })

    it("searches the scope it pops off the stack", async (): Promise<void> => {
        spyOn(nonRecursiveBestMetric, "nonRecursiveSearchScopeAndMaybeUpdateBestMetric").and.callThrough()

        await searchPopulatedScopes()

        expect(nonRecursiveBestMetric.nonRecursiveSearchScopeAndMaybeUpdateBestMetric).toHaveBeenCalledWith(scope)
    })
})
