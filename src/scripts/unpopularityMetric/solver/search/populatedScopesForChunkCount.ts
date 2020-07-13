import {
    bestMetricsForChunkCount,
    populatedForChunkCount,
    searchedForChunkCount,
    scopesForChunkCount,
    status,
} from "../globals"
import { Scope } from "../../types"
import { computeBestMetric } from "./bestMetric/bestMetric"
import { debugSearchedAndPopulated, presentPercentage } from "../debug"

const searchPopulatedScopesForChunkCount = async ({ debug }: { debug: boolean }) => {
    const searchingChunkCount = status.searchingChunkCount
    const searchingScopes = scopesForChunkCount[ searchingChunkCount ]
    const searchingScopesCount = searchingScopes.length

    if (debug) console.log(`scopes for chunk count remaining to search: ${searchingScopesCount}`.yellow)

    const scopeForChunkCount = searchingScopes.pop() as Scope

    try {
        const bestMetricForScope = await computeBestMetric(scopeForChunkCount, { debug, bestMetric: bestMetricsForChunkCount[ searchingChunkCount ] })

        if (!bestMetricsForChunkCount[ searchingChunkCount ] || bestMetricForScope.sumOfSquares < bestMetricsForChunkCount[ searchingChunkCount ].sumOfSquares) {
            bestMetricsForChunkCount[ searchingChunkCount ] = bestMetricForScope
        }
    } catch (e) {
        // bad scopes are still being computed... may not be a simple matter to not calculate them in the first place, so for now, just don't worry about them
    }

    searchedForChunkCount[ searchingChunkCount ] = searchedForChunkCount[ searchingChunkCount ] ? searchedForChunkCount[ searchingChunkCount ] + 1 : 1

    if (searchedForChunkCount[ searchingChunkCount ] % 10 === 0) {
        console.log(`searched out of populated for chunk count ${searchingChunkCount}: ${presentPercentage(searchedForChunkCount[ searchingChunkCount ], populatedForChunkCount[ searchingChunkCount ])} ${debugSearchedAndPopulated()}`.yellow)
    }
}

export {
    searchPopulatedScopesForChunkCount,
}
