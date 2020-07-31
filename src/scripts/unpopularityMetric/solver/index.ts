import { DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE } from "./constants"
import { debugSearchedAndPopulated } from "./debug"
import { bestMetricsForChunkCount, killedsForChunkCount, status } from "./globals"
import { populateScopes } from "./populate"
import { populateAndSearchScopes } from "./populateAndSearchScopes"
import {
    computeResolution,
    searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect,
    searchScopes,
} from "./search"
import { Chunk, Scope } from "./types"

export {
    DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE,
    debugSearchedAndPopulated,
    killedsForChunkCount,
    bestMetricsForChunkCount,
    status,
    populateScopes,
    searchScopes,
    Chunk,
    Scope,
    computeResolution,
    searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect,
    populateAndSearchScopes,
}
